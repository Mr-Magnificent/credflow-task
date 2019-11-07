const Knex = require('knex');
const { Model } = require('objection');
const dbConfig = require('../../knexfile')[process.env.NODE_ENV];

const knex = Knex(dbConfig);

Model.knex(knex);

const Student = require('./Students');
const Course = require('./Courses');

module.exports = {
    Student,
    Course
};
