const mongoose = require("mongoose");
const { collection } = require("../models/user");



const AllUserCollection = mongoose.model("User");


mongoose.set("strictQuery", true);
const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    })

    .then(() => {
      console.log("connected to db");
      console.log("starting scan of all tasks")
       
    

    })
    .catch((err) => {
      console.log(err);
    });
};

//console.log(connectDB.getCollectionNames())

module.exports = {
  connectDB,
};
