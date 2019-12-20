"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "ReviewerListing",
    embedded: false
  },
  {
    name: "ResumeReview",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://resumeqbe-8689136a16.herokuapp.com/quality-hub-resume-be/dev`
});
exports.prisma = new exports.Prisma();
