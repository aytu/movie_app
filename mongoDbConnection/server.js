const express=require('express');
const connectDB=require('./DB/connection');
const app=express();
var cors = require('cors');

const Port=process.env.Port || 3000;

process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at:', p, 'reason:', reason);
    process.exit(1);
  });
var timeStamp=function(req,res,next){
    req.timeStamp=Date.now();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
 
    next();
}
connectDB();

// const corsOptions ={
//    origin:'*', 
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }
app.use(cors({origin: '*'}));
app.use(timeStamp);
app.use(express.json({extended:false}));
app.use('/api', require('./Api/User'));
app.use('/api', require('./Api/Movie'));
// app.get('/:name', (req, res) => {
//     res.send('Your name is ' + req.params.name + '\n');
// });

app.listen(Port,()=>{
    console.log("my first node server started");
});
