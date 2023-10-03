const express=require('express');
const app=express();



app.get('/',(req,res)=>{
    res.send('root route');
})


app.listen(8080,()=>{
    console.log("server connexted at port 8080");
})
