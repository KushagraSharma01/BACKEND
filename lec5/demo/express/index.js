const express = require('express');
const app = express();
//after requiring express we get a function. after running that function we get an object
//this object constains methods
// console.log(app);

app.use((req,res)=>{                            //respond and request are returned as objects
    console.log("shaadi mai zaroor aana");      // middleware will work at every incoming request
    // console.log(req);
    // console.log(res);
    res.send("hello hi");
})
app.listen(8080,()=>{                               //easiest way to create a server 
    console.log("server connected at port 8080");   //after this it will stop for our request
});
//now you can type localhost:8080 on your browser and after that there is a default / which indicates root path  

//library is flexible and can be used as our need                                          
//there is no fix set of rules to use the library code
//library ke code ko hum apne hisaab se likhte hai

//frameworks are not flexible
 //there are fix set of rules in order to work with the framework code
//framework hamare code ko use krta hai

//app.use([path,] callback [, callback...])
//in this first callback is compulsory
//all the other things are not compulsory