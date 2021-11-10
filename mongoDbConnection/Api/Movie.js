const express=require('express');
const route=express.Router();
const Movie=require('../DB/Movie');

route.post('/movies',async (req,res)=>{
    console.log(req.body);
    const movie=new Movie({
        title: req.body.title,
        cover: req.body.cover
    });
    await movie.save()
    res.send(movie); 
});

route.get('/movies', (req,res)=>{
    setTimeout(async()=>{
        const movies= await Movie.find();
        res.send(movies);
    },1000)    
});

route.get('/movies/:id', async (req,res)=>{   
        const movie= await Movie.findOne({_id:req.params.id});
        res.send(movie);  
    
});

route.patch('/movies/:id',async (req,res)=>{
    const movie= await Movie.findOne({_id:req.params.id});
    console.log(req.body);
    if(req.body.title) movie.title=req.body.title;
    if(req.body.cover) movie.cover=req.body.cover;
    await movie.save();
    res.send(movie);
})

route.delete('/movies/:id',async (req,res)=>{
    await Movie.deleteOne({_id:req.params.id});
    res.status(204).send();
})

module.exports=route;