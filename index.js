import express from 'express'
const app = express();

app.get("/home",(req,res)=>
{
    res.send("Home Page is here");
    // api  hit sucessfully 
})
app.get("/bye",(req,res)=>
    {
        res.send("byebye");
        // api  hit sucessfully 
    })
app.get("/contact",(req,res)=>
{
        res.send("Contact Page is here");
        // if we do any cahnges are not refected directly soo we need to find soultuion we need to restart the server

})
// sending json 
app.get("/data",(req,res)=>
    {
        res.json(
            {
                sucess : true,
                msg : 'Pass',
                marks : 90 ,
                subject : 'hindi'
            }
        )
        // api  hit sucessfully 
    })
const PORT= 4000;
console.log(`Server is Running on Port Number ${PORT}`);
app.listen(4000);