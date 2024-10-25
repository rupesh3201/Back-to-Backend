import express  from 'express';

const server = express();
server.get("/hi",(req,res)=>{
    req.send("hellow");
})
server.get("/ping",(req,res)=>{
    req.send("pong");
})
server.listen(5002);