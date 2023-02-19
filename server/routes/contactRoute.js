const express = require('express');
const submitForm = require('../controllers/contactController');
const contactRoute = express();
const bodyParser = require('body-parser');
contactRoute.use(bodyParser.json());
contactRoute.use(bodyParser.urlencoded({extended:true}));
contactRoute.post('/', submitForm);

module.exports = contactRoute;