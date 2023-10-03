// var a=10;

// console.log(a);
// sam();
// var a=10;
// function sam(){
//     console.log("hello");
// }

// console.log(a);             //ReferenceError: Cannot access 'a' before initialization
// sam();
// let a=10;
// function sam(){
//     console.log("hello");
// }
       
// let a=10;                    //output 
                                //10
// console.log(a);              //20
// function sam(){
//     let a=20;
//     console.log(a));
// }
// sam();

// var a=10;                    //output 
//                                // 10
// console.log(a);              //20
// {
//     var a=20;
//     console.log(a);
// }
// sam();

//closure

function a(){
    let c=100;
    console.log("inside a");
    function b(){
        console.log(c);
        console.log("inside b");
    }
    //b();
    return b;               //whenever you return a function then all 
}
let final=a();
console.log(final);