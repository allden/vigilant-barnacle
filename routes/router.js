const express = require('express');
const ejs = require('ejs');
const router = express.Router();
let messages = require('../messages');

router.get('/', (req, res) => {
    res.render('index', {messages});
});

router.get('/new', (req, res) => {
    res.render('form');
});

router.post('/new', (req, res) => {
    console.log(req.body);
    let now = new Date();

    messages.push({
        name: req.body.name,
        message: req.body.message,
        date: now.toUTCString()
    });

    res.redirect('/');
    res.end();
});

module.exports = router;