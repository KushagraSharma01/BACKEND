console.log(process.argv);
let arr=process.argv;
let ans=arr.slice(2);            
console.log(ans);
for(let item of ans){
    console.log(`hello from ${item}`)
}
//input on terminal

//node app.js kushagra naman gupta

//output on terminal
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\kusha\\Desktop\\javascript\\lec3\\app.js',
//     'kushagra',
//     'naman',
//     'gupta'
//   ]
//   [ 'kushagra', 'naman', 'gupta' ]
//   hello from kushagra
//   hello from naman
//   hello from gupta