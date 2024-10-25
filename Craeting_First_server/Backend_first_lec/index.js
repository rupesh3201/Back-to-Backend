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
server.get("/vande",(req,res)=>{
    res.send("Matram");
})
server.get("rupesh",(req,res)=>{
    res.send("Mnadge");
})
// created a basic server by using express 
server.listen(5004);