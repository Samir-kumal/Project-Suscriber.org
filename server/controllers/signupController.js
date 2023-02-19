const newsletterSchema = require('../model/newletter');
const signup = async (req,res) => {
    const {email} = req.body;
    try {
        const usrData = newsletterSchema({
            email
        });
        let data =await usrData.save();
        if(!data){
            return res.status(200).send({sucess:false,msg:data.message});
        }
        else{
            return res.status(200).send({sucess:true,msg:"Sucessfully signed up."});
        }
    } catch (e) {
        return res.status(200).send({sucess:false,msg:e.message});
    }
}

module.exports = signup;