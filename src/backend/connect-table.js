var mongoose = require('mongoose');

var User = require('./models/user');

mongoose.connect('mongodb://root:example@database:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true });

console.log("Mongo");
console.log(User)

User.find({ "name" : "ayahito" }, function(err, result){
  if (err)
    console.log(err);

  // 新規登録
  if (result.length == 0){
    var user = new User();

    user.name = "ayahito";
    user.age = 22;

    user.save(function(err){
      if (err) console.log(err);
      console.log("Created!!");
    });
  }else{
    console.log("Found!!");
    console.log(result);
  }
});
