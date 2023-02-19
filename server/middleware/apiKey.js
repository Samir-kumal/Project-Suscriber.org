require('dotenv').config();
const clients = {
    client1: process.env.apiKey1,
    client2: process.env.apiKey2
  };
  
  const checkApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey) return res.status(401).send({sucess:false,msg:"Unauthorized"});
  
    const client = Object.keys(clients).find(
      key => clients[key] === apiKey
    );
    if (!client) return res.status(401).send({sucess:false,msg:"Unauthorized"});
  
    next();
  };

  module.exports = checkApiKey;