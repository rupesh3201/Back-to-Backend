import express  from 'express';

const server = express();
// get request 
// (req,res) are obj

server.get("/hi",(req,res)=>{
    req.send("hellow");
})
server.get("/ping",(req,res)=>{
    req.send("pong");
})
server.listen(5004);