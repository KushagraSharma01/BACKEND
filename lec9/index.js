const express=require('express');
const app=express();
const path=require('path');  //we want params from path
const methodOverrride=require('method-override');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));//specifying the middleware to define the req.body
//extended=true is used to tell that multiple objects can be present
app.use(methodOverrride('_Method'));//to override a method to perform specific task(query parameter)


let comments=[
    {
        id:0,
        username:"Namanu mera bhai",
        comment:"Namanu beer pike agyi bike ke neeche"
    },
    {
        id:1,
        username:"Nikhil lala",
        comment:"Pani ki chori krta h"
    },
    {
        id:2,
        username:"Sharmili",
        comment:"kapde dhole"
    },
    {
        id:3,
        username:"manav",
        comment:"Kuch nhi kah skte"
    }
]

//Restful Routing ==> as we are creating a template /page
//read=> displaying all the comments 

//display all list of comments
app.get('/comments/:commentId',(req,res)=>{
    //console.log(req.params);
    // res.send("showing that particular product");
    let {commentId}=req.params;
    let foundcomment=comments.find((item)=>{return item.id==commentId});
    res.render('show',{foundcomment});
})
app.get('/comments/:commentId/edit',(req,res)=>{
    let {commentId}=req.params;
    let foundcomment=comments.find((item)=>{return item.id==commentId});
    res.render('edit',{foundcomment});
});
app.get('/comments',(req,res)=>{
    res.render('index',{comments}); //comments are send as object on index.ejs app
})

//Displaying form to add new comment
app.get('/comment/new',(req,res)=>{
    res.render('new');
})

//To actually add the comment
//Whenever ew redirect then 
//Post request is hit when we submit the form
//By deafault the req.body is logged on to the console it has the value as undefined


// app.post('/comments',(req,res)=>{
//     console.log(req.body);       //It will display undefined as output
//     res.send("Post request send"); 
    
// })

app.post('/comments',(req,res)=>{
    let{username,comment} =req.body;
    comments.push({username,comment,id:comments.length})
    res.redirect('/comments');
})

//To show information about one comment
app.get('/comments/:commentId',(req,res)=>{
    let{commentId}=req.params;      //here req.params gives the id of the objects in the url
    let foundcomment=comments.find((item)=>{return item.id==commentId});
    res.render('show',{foundcomment});
})

//To edit particular information

app.get('/comments/:commentId/edit',(req,res)=>{
    let{commentId}=req.params;
    let foundcomment=comments.find((item)=>{return item.id==commentId});
    res.render('edit',{foundcomment});

})

//To actually edit the comments
app.patch('/comments/:commentId',(req,res)=>{
    let {commentId}=req.params;
    let foundcomment=comments.find((item)=>{return item.id==commentId});
    let{comment}=req.body;
    res.send("Edited successfully");
})

app.get('/',(req,res)=>{
    res.send("Route Route");
})


app.listen(8081,()=>{
    console.log("Server Created");
})