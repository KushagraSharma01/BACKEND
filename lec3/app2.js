let arr=process.argv;
let a=arr[2];
let c=3;
let d=5;
for(let i=1;i<=a;i++){
    if(i==c&&c==d){
        console.log('fizzbuzz');
        c=c+3;
        d=d+5;
    }
    else if(i==c){
        console.log('fizz');
        c=c+3;
    }
    else if(i==d){    
        console.log('buzz');
        d=d+5;
    }
    else
    console.log(i);
}