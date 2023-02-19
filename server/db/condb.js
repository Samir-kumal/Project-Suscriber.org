const mongoose = require('mongoose');
const dbCon = async()=>{
    mongoose.set('strictQuery', true);
    return mongoose.connect('mongodb://localhost:27017/subscriber');
}

module.exports = dbCon;