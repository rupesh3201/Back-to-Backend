import express  from 'express';
const server = express();
// get request 
// (req,res) are obj
server.get("/hi",(req,res)=>{
    res.send("hellow");
});
server.get("/ping",(req,res)=>{
    res.send("pong");
});
// created a basic server by using express 
server.listen(5004);