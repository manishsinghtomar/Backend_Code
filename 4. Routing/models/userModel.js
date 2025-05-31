const { Schema, model } = require("mongoose");

// create a schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  age:{
    type:Number,
    required:true,
  },
  weight:{
    type:Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//then we created a model using Schema
const UserModel = model("User", UserSchema);

//exporting the model
module.exports = UserModel;
