const express = require('express');
const app = express();

// app.use('/cat',(req,res)=>{         //string is matched until next slash
//     console.log("mahesh + cat");
//     res.send('<h1>cat route<h1>')
// })
// app.use('/dog',(req,res)=>{         
//     console.log("mahesh + dog");
//     res.send('<h1>dog route<h1>')
// })
// app.use('/',(req,res)=>{                //(middleware app.use())single slash is used here to match with every other input and provide error string
//     console.log("mahesh + error");
//     res.send('<h1>error<h1>')
// })

app.get('/cat',(req,res)=>{
    console.log("get request bheji hai cat");
    res.send("yelo cat response");
})

app.get('/dog',(req,res)=>{
    console.log("get request bheji hai dog");
    res.send("yelo dog response");
})
app.get('*',(req,res)=>{                //for get method it will match complete path and not only values after slash so, we need to use universal 
    console.log("error");               //selector for handling other requests
    res.send("error");
})
app.listen(8080,()=>{
    console.log("server is connected")
})

//to run nodemon type npm start in cmd