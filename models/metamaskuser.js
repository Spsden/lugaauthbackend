const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const MetaMaskUserSchema = new mongoose.Schema({
 
  nonce: {
    type : String,
    default: () => Math.floor(Math.random() * 1000000),
    unique:true,
    minlength :10
  },
  publicAddress: {
    type: String,
    required: [true, "Please provide a name"],
    minlength: 3,
    maxlength: 50,
    unique:true,
  }
});

//encrypt password before saving to mongo
// UserSchema.pre("save", async function () {
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

MetaMaskUserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.publicAddress },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

MetaMaskUserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("MetaMaskUser", MetaMaskUserSchema);
