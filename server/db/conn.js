const mongoose = require("mongoose") ;
const DB = "mongodb+srv://adamnasr:1234@cluster0.6gpetnj.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(DB,{
   
    useNewUrlParser : true , 
    useUnifiedTopology : true 
}).then(()=>console.log("connection start")).catch((error)=> console.log(error.message)) ;