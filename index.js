const express = require('express');
const path = require('path');
const router = require('./routes/router');
const PORT = process.env.PORT || 5000;

let app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', router);


app.listen(PORT, () => {
    console.log(`Now listening on ${PORT}`);
});