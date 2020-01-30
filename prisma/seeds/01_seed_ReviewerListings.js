const fs = require('fs')
const { Prisma } = require('../../prisma/generated/prisma-client')
const path = require('path')

const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT
})
// ./ prisma / seeds / seeded_users.json

const seeded_users = fs.readFileSync((path.resolve(__dirname, './seeded_users.json')), (err => console.log(`Error`, err)))

const users = JSON.parse(seeded_users);
// console.log(`01_seed_ReviewerListings / users`, users)



// set number of listings to create
const listingNumber = 10


// function creates a reviewerListing for a user
async function createReviewerListings(user) {
  console.log(`creating review listing for ${user.first_name} ${user.last_name} -- ID: ${user.id}`)
  // useful for making some posts published and other not
  const randomBoolean = Date.now() % 2 === 0
  const listing = {
    coachID: user.id,
    price: Math.floor(Math.random() * 100),
    position: 'Full Stack Developer',
    industry: 'Professional Services',
    company: 'Testing Company',
    description: `With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship.`,
    isPublished: randomBoolean
  }

  return await db.createReviewerListing(listing)
}


for (i = 0; i < listingNumber; i++) {
  createReviewerListings(users[i])
}
