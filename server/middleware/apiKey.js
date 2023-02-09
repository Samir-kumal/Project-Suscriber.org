const clients = {
    client1: "abcdefghijklmno",
    client2: "pqrstuvwxyz1234"
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