const express = require('express');
const signup = require('../controllers/signupController');
const signuproute = express();
const bodyparser = require('body-parser');

signuproute.use(bodyparser.json());
signuproute.use(bodyparser.urlencoded({extended:true}));
signuproute.get('/',(req,res)=>{
    return res.send({sucess:true,msg:"signin api endpoint"});
})
signuproute.post('/sign-up/newsletter',signup);

module.exports = signuproute;