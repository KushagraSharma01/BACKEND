let fs= require('fs');
let data="hello kushagra ";
//path,data,optional(object),callback
fs.writeFile('abc.txt',data,{
    encoding:'utf-8',   //because we use utf-8 encoding in html
    flag:'w'        //write
},(err)=>{
    if(err){throw err}
    console.log("file written successfully");
})

//read file by using optional parameter to specify the format of decoding the buffer
fs.readFile('abc.txt',{
    encoding:'utf-8',   //because we use utf-8 encoding in html
    // flag:'w'            // we will again use optional para to decode the code in utf-8 
},(err,data)=>{
    if(err){throw err}
    console.log(data);
})

//read file by using .toString() method
fs.readFile('abc.txt',{},(err,data)=>{
    if(err){throw err}
    console.log(data.toString());
})

//append data in a file
fs.appendFile('abc.txt',"file system ka bhaukal",{},(err)=>{
    if(err){throw err}
    console.log("file updated successfully");
})

//delete file
// fs.unlink('abc.txt',(err)=>{
//     if(err){throw err}
//     console.log("file deleted successfully");
// })