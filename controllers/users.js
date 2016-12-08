var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  show: function(req, res) {
    User.find({}, function(err, users){
      res.send(users)
    })
  },
  new: function(req, res) {
    console.log("POST DATA", req.params);

    var user = new User({
      name: req.params.name
    });
    user.save(function(err) {
      if(err) {
        console.log('something went wrong');
      } else { 
        console.log('successfully added a user!');
        res.redirect('/');
      }
    })
  },
  remove: function(req, res){
    console.log("POST DATA", req.params);
    User.remove({name: req.params.name}, function(err){
     if(err) {
        console.log('something went wrong');
      } else { 
        console.log('successfully removed a user!');
        res.redirect('/');
      }
    })
  },
  
  detail: function(req, res) {
    console.log("ID!", req.params.name);
    User.findOne({name: req.params.name}, function(err, user){
      res.send(user);
    })
  }
}