const router = require('express').Router();

const studentController = require('../app/controllers/studentController');
const courseController = require('../app/controllers/courseController');

router.get('/student/:id', studentController.getStudent);
router.get('/student/search-by-name/:name', studentController.searchByName);

router.get('/subjects', courseController.getAll);

module.exports = router;