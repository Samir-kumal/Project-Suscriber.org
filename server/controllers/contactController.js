const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
      user: process.env.user, 
      pass: process.env.pass 
    }
  });
  
  const sendMail =async (info) => {
    const userEmail = {
        email:"b2.samir@cgim.edu.np"
    }
    const mailOptions = {
        from: `${info.name} ${info.email}`,
        to: userEmail.email,
        subject: info.subject,
        html: `<p>${info.message}</p>`
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log(`Email sent to ${userEmail.email}`);
        }
      });
  }
const submitForm = async (req,res)=> {
    const {name,email,phoneno,subject,message} = req.body;

        try {
            console.log(name,email,phoneno,subject,message);
            const info = {
                name:name,
                email:email,
                phoneno:phoneno,
                message:message
            }
            const result = await sendMail(info);
            return res.status(200).send({sucess:true,message:name,email,phoneno,subject,message})
            
        } catch (e) {
            console.log(e.message);
            return res.status(400).send({sucess:false,message:e.message});
        }
}   



module.exports = submitForm;