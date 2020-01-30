const { Prisma } = require('../generated/prisma-client')
const fs = require('fs')
const path = require('path')

const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT
})

const seeded_users = fs.readFileSync((path.resolve(__dirname, './seeded_users.json')), (err => console.log(`Error`, err)))

const users = JSON.parse(seeded_users);

const seeded_reviewer_listings = fs.readFileSync((path.resolve(__dirname, "./seeded_reviewer_listings.json")), err => console.log(`error reading seeded_reviewer_listings.json`))

const reviewerListingsArray = JSON.parse(seeded_reviewer_listings);

// sets start and stop indexes

// create requests for seeker idx 10 - 14
const requestedUserStartIdx = 10
const requestedUserEndIdx = requestedUserStartIdx + 4

// create accepted reviews for idx 15 - 20
const acceptedUserStartIdx = requestedUserEndIdx + 1
const acceptedUserEndIdx = acceptedUserStartIdx + 5

// create denied requests for idx 21 - 23
const deniedUserStartIdx = acceptedUserEndIdx + 1
const deniedUserEndIdx = deniedUserStartIdx + 2

// create completed requests for idx 24-28
const completedUserStartIdx = deniedUserEndIdx + 1
const completedUserEndIdx = completedUserStartIdx + 4


async function createRequestedResumeReview(seeker, listings) {
  // map over listings to create request
  listings.forEach(async listing => {
    const newRequest = {
      seeker: seeker.id,
      coach: listing.coachID,
      // id: listing.id
    }

    if (listing.isPublished) {
      console.log(`Creating a ResumeReview request between ${seeker} and ${listing.coachID}`)
      return await db.createResumeReview(newRequest)
    }
  })
}


// create a pending request for users 11-16
for (i = requestedUserStartIdx; i < requestedUserEndIdx; i++) {
  console.log(`for requestedUserStartIdx`, i)
  createRequestedResumeReview(users[i], reviewerListingsArray)
}

// sets the index of accepted users as 6 after the requested reviews

async function createAcceptedResumeReview(seeker, listings) {
  const currentDate = new Date().toISOString();
  // map over listings to create request
  listings.forEach(async listing => {
    const acceptedRequest = {
      seeker: seeker.id,
      coach: listing.coachID,
      dateAccepted: currentDate,
      isPending: false,
      isDenied: false,
      isAccepted: true
    }
    if (listing.isPublished) {
      console.log(`Creating an Accepted ResumeReview between ${seeker} and ${listing.coachID}`)
      return await db.createResumeReview(acceptedRequest)
    }
  })
}


for (i = acceptedUserStartIdx; i < acceptedUserEndIdx; i++) {
  console.log(`for acceptedUserStartIdx`, i)

  createAcceptedResumeReview(users[i], reviewerListingsArray)
}

// sets the index of denied users as 6 after the requested reviews
// creates denied requests for all coaches for the 3 users after the accepted users

async function createDeniedResumeReviews(seeker, listings) {
  // map over listings to create request
  listings.forEach(async listing => {
    const deniedRequest = {
      seeker: seeker.id,
      coach: listing.coachID,
      isPending: false,
      isDenied: true,
    }

    if (listing.isPublished) {
      console.log(`Creating a Denied ResumeReview between ${seeker} and ${listing.coachID}`)
      return await db.createResumeReview(deniedRequest)
    }
  })
}


for (i = deniedUserStartIdx; i < deniedUserEndIdx; i++) {
  console.log(`for declinedUserStartIdx`, i)

  createDeniedResumeReviews(users[i], reviewerListingsArray)
}

// sets the index of completed-review users as 6 after the requested reviews
// creates completed requests for all coaches for the 3 users after the accepted users

async function createCompletedResumeReview(seeker, listings) {
  // map over listings to create request
  const currentDate = new Date().toISOString()
  listings.forEach(async listing => {
    const completedRequest = {
      seeker: seeker.id,
      coach: listing.coachID,
      dateAccepted: currentDate,
      dateCompleted: currentDate,
      isPending: false,
      isComplete: true
    }

    if (listing.isPublished) {
      console.log(`Creating a Completed ResumeReview between ${seeker} and ${listing.coachID}`)
      return await db.createResumeReview(completedRequest)
    }
  })
}


for (i = completedUserStartIdx; i < completedUserEndIdx; i++) {
  console.log(`for completedUserStartIdx`, i)
  createCompletedResumeReview(users[i], reviewerListingsArray)
}

// export ResumeReview to JSON
async function saveResumeReviews() {

  const response = await db.resumeReviews();

  let stringified = JSON.stringify(response);
  fs.writeFileSync((path.resolve(__dirname, "./seeded_resume_reviews.json")), stringified, 'utf8', (err => console.log(`error wriring seeded_resume_reviews`, err)))
}

saveResumeReviews();
