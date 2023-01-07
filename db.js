const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://Vaibhav4556:vaibhav8336@cluster0.9ngzy3n.mongodb.net/BookShop'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose
