// Tests for user-related functionality
import 'cross-fetch/polyfill'
import '@babel/polyfill';
import ApolloBoost, { gql } from 'apollo-boost';
import prisma from '../src/prisma';

const client = new ApolloBoost({
  uri: 'http://localhost:5990'
})

// add const to create listing --may need user_id--


afterAll(async () => {
  await prisma.mutation /*  add correct mutation to remove posts   */
})


// test that post is successful
// -- need auth

// test that post can be unpublished/published

// test that unpublished is not viewable by users
