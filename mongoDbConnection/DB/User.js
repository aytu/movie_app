const mongoose=require('mongoose');

const user=mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    }
});

module.exports=User=mongoose.model('user',user);