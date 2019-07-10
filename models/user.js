var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({ 
  name: { type: String, required: true },
  proffession: { type: String, required: true },
  id: { type: Number },
  age: { type: Number },
  description: { type: String }
});

var User = mongoose.model("user", UserSchema);

module.exports = {
 UserModel: User
};