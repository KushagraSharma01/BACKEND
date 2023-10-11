const express =require('express');
const app= express();
const mongoose=require('mongoose');

//connect returns a promise
mongoose.connect('mongodb://127.0.0.1:27017/cheerz')  //change db
.then(()=>{console.log("DB CONNECTED")})    //resolve
.catch((err)=>{console.log("CONNECTION ERROR",err)})    //reject

//creating a schema
let movieSchema=new mongoose.Schema({
    name:String,
    year:Number,
    imdb:Number,
    isWatched:Boolean
})
//creating a model
let Movie=mongoose.model('Movie',movieSchema);
//Movie(or Model) is a class so this returns an object
//model is a javascript class and that is why camelcase name format is followed by convention and should be singular also  

let shaktiman=new Movie({name:"shaktiman",year:2010,imdb:8,isWatched:false});

console.log(shaktiman);

shaktiman.save()
.then(()=>{console.log("movie saved successfully")})
.catch(()=>{console.log("save error")})


app.listen(8080,()=>{
    console.log("server connected at port 8080");
})

//while working with express we call collections by the name Models
//Model has schema(mandatory) // schema is the blueprint of a model
//every single entity in express is also called a document