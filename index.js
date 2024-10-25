import express from 'express'
const app = express();

app.get("/home",(req,res)=>
{
    res.send("Home Page is here");
})

const PORT= 4000;
console.log(`Server is Running on Port Number ${PORT}`);
app.listen(4000);