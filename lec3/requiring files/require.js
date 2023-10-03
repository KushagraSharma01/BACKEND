let PI = 3.1425;

let sqr = n =>n*n;
let add=(a,b)=>a+b;
console.log(PI);
console.log(sqr(5));
console.log(add(2,3));
// module.exports={
//     PI, sqr, add         this means that there values are same as their keys
// }
module.exports={
    PI:PI,
    sqr:sqr, 
    add:add
}