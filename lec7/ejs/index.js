const express = require('express');
const app = express();
const path=require('path');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname, 'public')));
//css file(static file) will run for every template because we need same pattern for every template.
app.get('/',(req,res)=>{
    // res.send('<h1>hi i am home</h1>')
    let arr=[1,2,3,4,5]
    res.render('index',{arr}) //no need to give complete path till views coz already given in app.set()
})

app.get('/home',(req,res)=>{
    let randomnum=Math.floor(Math.random()*10)
    // res.send('<h1>hi i am home</h1>')
    res.render('home',{randomnum})  //to show/render your template  
    //no need to give complete path till views coz already given in app.set()

})

app.listen(8080,()=>{
    console.log("server connected at port 8080")
})