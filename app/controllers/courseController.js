const { Course } = require('../models');
const debug = require('debug')('course');

exports.getAll = async (req, res) => {
    try {
        const data = await Course.query().eager('students');
        res.send(data);
    } catch (err) {
        debug(err);
        return res.status(500).send(err.message);
    } 
};