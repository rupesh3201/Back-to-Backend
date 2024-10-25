import express from 'express'
const app = express();

app.get("/home",(req,res)=>
{
    res.send("Home Page")
});
const Port =  5005;
app.listen(Port,()=>
{
    console.log(`server is running on port : ${Port}`);
})