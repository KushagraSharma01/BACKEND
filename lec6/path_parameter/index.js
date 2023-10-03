const express = require('express');
const app = express();

// app.get('/r/cat',(req,res)=>{
//     console.log("cat");
//     res.send('cat');
// })

// app.get('/r/dog',(req,res)=>{
//     console.log("dog");
//     res.send('dog');
// })
app.get('/r/:subreddit',(req,res)=>{            //for temporary paths for which we dont need to create individual pages
    console.log(req);                         //request is itself an object containing another object params
    console.log(req.params);
    let{subreddit}=req.params;
    res.send(`<hi> hi I am ${subreddit}<h1`);
})

app.listen(8080,()=>{
    console.log("server is connected")
})