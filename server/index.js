const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;
const cors = require('cors');
const dbCon = require('./db/condb');
const signuproute = require('./routes/signupuser');

const checkApiKey = require('./middleware/apiKey');

const autoRunTask = require('./controllers/newsController');
const contactRoute = require('./routes/contactRoute');
app.use(cors());
app.get('/',checkApiKey,(req,res)=>{
   return res.status(200).send({sucess:true,msg:"Subscriber org webstie welcome.."});
})
app.use('/api/newsletter',checkApiKey ,signuproute);
app.use('/api/submit-form',checkApiKey ,contactRoute);

app.get('*',(req,res)=>{
    res.status(404).send({sucess:false,msg:"Page not found!"});
})
const cronTask = async ()=>{
    try {
        await autoRunTask();
        console.log('task runned')
    } catch (e) {
        console.log(e.message);
    }
}
const start = async () => {
    try {
        await dbCon();
        console.log('database connected');
        app.listen(port,()=>{
            console.log(`Server is running at http://localhost:${port}`);
        });
        // await cronTask();
    } catch (e) {
        console.log(e.message);
    }
}

start();