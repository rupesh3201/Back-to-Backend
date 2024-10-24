import express  from 'express';

const server = express();
server.get("/hi",(req,res)=>{
    req.send("hellow");
})
server.listen(5002);