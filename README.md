🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline. Feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be comepleted by. Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric. Contributing to docs does NOT count as a PR to meet your weekly requirements.

# API Documentation

#### 1️⃣ Backend delpoyed at [🚫name service here](🚫add URL here) <br>

## 1️⃣ Getting started

To get the server running locally:

🚫 adjust these scripts to match your project

- Clone this repo
- **yarn install** to install all required dependencies
- **yarn server** to start the local server
- **yarn test** to start server using testing environment

### Backend framework goes here

🚫 Why did you choose this framework?

- Point One
- Point Two
- Point Three
- Point Four

## 2️⃣ Endpoints

## CODING FLOW

# - Update Resolver

# - Update Schema

# - Prisma Deploy

# - Check Schema/Docs in playground

# - Check for Errors (mutations, queries, connections)

## TESTING OUTSIDE OF LOCALHOST

# - Prisma Deploy

# - Add Commit Push

# - Check Heroku for deploy

# - If not already auto deployed/deploying => deploy manually

# - Check Schema/Docs for updates made

# - Check for Errors (mutations, queries, connections)

## MAKE SURE UPDATES HAVE NOT AFFECTED GATEWAY

# - Check Gateway Schema/Docs for updates

# - Check that new updates dont conflict w/ databases in federation

## SOMETIMES UPDATES CAN CRASH GATEWAY

# - If this happens login to gateway heroku and re deploy

######

####### QUERY and MUTATION LIST (localhost:4000) ########

######

## QUERY INFO

# query {

# resumeQinfo

# }

########### LISTING QUERIES #################

## QUERY LISTING by ID

# query {

# reviewerListing(id: "ck4p2vbcg00cd0714wtbgf3m2"){

# id

# price

# position

# industry

# description

# createdAt

# updatedAt

# company

# isPublished

# }

# }

## QUERY ALL LISTINGS

# query {

# reviewerListings{

# id

# price

# position

# industry

# description

# createdAt

# updatedAt

# company

# isPublished

# }

# }

########### LISTING MUTATIONS #################

## MUTATION CREATE LISTING (removed reviewer from datamodel)

# mutation {

# createReviewerListing(

# price: 200

# position: "new position"

# industry:"new industry"

# description: "new description"

# company: "string"

# isPublished: false

# ) {

# id

# }

# }

## MUTATION DELETE LISTING by ID

# mutation {

# deleteReviewerListing(id: "ck4p479tl00fx0714o8niq2kc"){

# id

# }

# }

########### NEXT ###########
########### REVIEW QUERIES #################

## QUERY REVIEW by ID

# query {

# resumeReview(id: "ck4p2ja3900b807142i54d2wl"){

# id

# name

# isPending

# isAccepted

# isDenied

# isComplete

# }

# }

## QUERY ALL REVIEWS

# query {

# resumeReviews{

# id

# name

# isPending

# isAccepted

# isDenied

# isComplete

# }

# }

########### REVIEW MUTATIONS #################

## MUTATE CREATE REVIEW ( removed "!" from dateRequested: DateTime dateAccepted: DateTime dateCompleted: DateTime in datamodel)

# mutation {

# createResumeReview(

# name: "test"

# isPending: false

# isAccepted: false

# isDenied: false

# isComplete: false

# ) {

# id

# }

# }

## MUTATE DELETE REVIEW

# mutation {

# deleteResumeReview(id: "ck4p4g2tj00gt0714gqr1p5kr"){

# id

# }

# }

##################################################
##################################################

                                                 |

# Data Model

🚫This is just an example. Replace this with your data model

#### 2️⃣ ORGANIZATIONS

---

```
{
  id: UUID
  name: STRING
  industry: STRING
  paid: BOOLEAN
  customer_id: STRING
  subscription_id: STRING
}
```

#### USERS

---

```
{
  id: UUID
  organization_id: UUID foreign key in ORGANIZATIONS table
  first_name: STRING
  last_name: STRING
  role: STRING [ 'owner', 'supervisor', 'employee' ]
  email: STRING
  phone: STRING
  cal_visit: BOOLEAN
  emp_visit: BOOLEAN
  emailpref: BOOLEAN
  phonepref: BOOLEAN
}
```

## 2️⃣ Actions

🚫 This is an example, replace this with the actions that pertain to your backend

`getOrgs()` -> Returns all organizations

`getOrg(orgId)` -> Returns a single organization by ID

`addOrg(org)` -> Returns the created org

`updateOrg(orgId)` -> Update an organization by ID

`deleteOrg(orgId)` -> Delete an organization by ID
<br>
<br>
<br>
`getUsers(orgId)` -> if no param all users

`getUser(userId)` -> Returns a single user by user ID

`addUser(user object)` --> Creates a new user and returns that user. Also creates 7 availabilities defaulted to hours of operation for their organization.

`updateUser(userId, changes object)` -> Updates a single user by ID.

`deleteUser(userId)` -> deletes everything dependent on the user

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

🚫 These are just examples, replace them with the specifics for your app

_ STAGING_DB - optional development db for using functionality not available in SQLite
_ NODE*ENV - set to "development" until ready for "production"
* JWT*SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-_=+)') for i in range(50)])
_ SENDGRID_API_KEY - this is generated in your Sendgrid account \* stripe_secret - this is generated in the Stripe dashboard

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.
🚫 Add DS iOS and/or Andriod links here if applicable.

## Local Development

Requirements: NodeJS, Prisma CLI, and Docker (Docker Desktop was used)

### Initialization

cd to src directory, check out a new feature branch using `git checkout -b <feature-name>`, make sure new feature branch is even with functional master branch (may be production in some cases).

Run `npm i` to install dependencies, check package.json to verify that `env-cmd` has been added.

Run `docker-compose up` to start a Docker container from `docker-compose.yml`

`docker-compose.yml` contains information which docker-compose will use to build the Prisma and Postgres services for this repository.

An .env file is needed at the root directory with the following variables defined:

- `PRISMA_ENDPOINT`, `PRISMA_SECRET`, `PG_USER`, `PG_PASSWORD`

cd to src/prisma and run `prisma deploy -e ..config/development.env`

This will build a Prisma service from prisma.yml and datamodel.prisma and deploy it according to the environment variables contained in src/config/development.env listed below

- `PRISMA_ENDPOINT`, `PRISMA_SECRET`, `PG_USER`, `PG_PASSWORD`, `JWT_SECRET`

cd to the parent directory `cd ..`

Run `npm run development` This executes the development script which assigns the .env variables to those contained in /config/development.env and will start an instance of node at the assigned port. _This endpoint will be specified in the Gateway's environment variable and assigned to its corresponding service._

### Updating Prisma Service

If changes are made to datamodel.prisma, the service will need to be deployed using `prisma deploy -e ../config/development.env` following that, the Prisma client will need to be generated. Run `prisma generate -e ../config/development.env` This updates src/generated with the latest version of Prisma Client.

### Seeding Data for Development

To add listings from seed data to the database, a json file named `seeded_users.json` containing users on the Core database must be provided in the `prisma/seeds` directory. When that file is in place, the command `prisma seed -e ../config/development.env` can be run to seed a set of ReviewerListings. This will create another json file called `seeded_reviewer_listings.json` which is used for the script that creates accepted, denied, pending, and completed ResumeReviews. Use `npm run seed_reviewer_listing_requests` to execute that script. That script generates a file called `seeded_resume_reviews.json` which will be used in seeding Reviews and Responses in Core.
