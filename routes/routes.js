const router = require('express').Router();

router.get('/student/:id', (req, res) => {
    res.send('hi');
});

router.get('/subjects', (req, res) => {
    res.send('google');
});
