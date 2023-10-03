const express = require('express');
const app = express();

app.get('/search',(req,res)=>{
    console.log(req.query);
    res.send('query');
})
app.get('/search2',(req,res)=>{
    console.log(req.query);
    let {first,last}=req.query;
    res.send(`<h1>hi my name is ${first} ${last}<h1>`);
})
app.listen(8080,()=>{
    console.log("server connected at 8080");
})
//http://localhost:8080/search?kush=sharma