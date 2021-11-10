const mongoose=require('mongoose');

const movie=mongoose.Schema({
    title:{
        type:String
    },
    cover:{
        type:String
    }
});

module.exports=Movie=mongoose.model('movie',movie);