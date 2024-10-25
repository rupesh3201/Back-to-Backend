import express from 'express'
const app = express();
const Port =  5005;
app.listen(Port,()=>
{
    console.log(`server is running${Port}`);
})