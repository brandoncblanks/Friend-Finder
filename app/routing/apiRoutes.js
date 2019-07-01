
const friendData = require("../data/friend");


module.exports = function(app) {
 
  app.get("/api/survey", function(req, res) {
    res.json(friendData);
  });

  
  app.post("/api/friend", function(req, res) {

    if (friendData.length < 5) {
      friendData.push(req.body);
      res.json(true);
    }
    else {
        
    }
  });

 
  app.post("/api/clear", function(req, res) {
   
    res.json({ ok: true });
  });
};
