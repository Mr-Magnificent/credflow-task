const { Student } = require('../models');
const debug = require('debug')('app:student');

exports.getStudent = async (req, res) => {
    debug(req.params);
    try {
        const student = await Student.query().findById(req.params.id)
            .eager('courses');
        debug(student);
        res.status(200).send(student);
    } catch (err) {
        debug(err);
        return res.status(500).send(err.message);
    }
};

exports.searchByName = async (req, res) => {
    debug(req.params);
    try {
        const students = await Student.query().where('name', 'like', `${req.params.name}%`);
        return res.send(students);
    } catch (err) {
        debug.extend('byName')(err);
        return res.status(500).send(err.message);
    }
};