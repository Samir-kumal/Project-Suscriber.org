const newsletterSchema = require('../model/newletter');
const nodemailer = require('nodemailer');
const cron = require('cron');

const getSubscribersFromDB = async () => {
   
  try {
    const subscribers = await newsletterSchema.find({});
    return subscribers;
  } catch (e) {
    console.error(e.message);
    return [];
  } 
}

const autoRunTask = async ()=>{
    let subscribers = await getSubscribersFromDB();
   
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, 
        auth: {
          user: 'xcrwolfie@gmail.com', 
          pass: 'jiefsiykivjzpran' 
        }
      });
      const job = new cron.CronJob({
        cronTime: '*/2 * * * *', 
        onTick: function() {
          subscribers.forEach((subscriber) => {
            const mailOptions = {
              from: '"My Newsletter" <newsletter@example.com>',
              to: subscriber.email,
              subject: 'This week\'s newsletter',
              html: '<p>Hello! Here\'s this week\'s newsletter.</p>'
            };
            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.error(error);
              } else {
                console.log(`Email sent to ${subscriber.email}`);
              }
            });
          });
        },
        start: false,
        timeZone: 'America/Los_Angeles'
      });
      
      job.start();

    
}

module.exports = autoRunTask;