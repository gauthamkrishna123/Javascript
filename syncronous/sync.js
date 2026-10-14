console.log("hello");
setTimeout(()=>{
    console.log("welcome");
    
},2000)
console.log("javascript");

//setInterval
let a=setInterval(()=>{
    
    console.log("hai");
    
},2000)
 setTimeout(()=>{
    clearInterval(a)
 },5000)