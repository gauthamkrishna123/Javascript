// function hello(callback){
//     console.log("hai hello");
//     callback();
//     }
// function greet(){
//     console.log("welcome");
    

// }
// hello(greet);

function login(uname, callback){
    
    console.log(uname);
    
    setTimeout(()=>{
        console.log("login success");
          callback()
    },2000)
  
}
function dashbord(){

    console.log("dash user");
    
}
login('user',dashbord)

// //callbackhell

function task1(callback){

    setTimeout(()=> {
        console.log("task 1 completed");
        callback();
    }, 3000);
}
function task2(callback){
        setTimeout(() => {
        console.log("task 2 completed");
        callback();
    }, 1000);
    
}
function task3(callback){
        setTimeout(() => {
        console.log("task 3 completed");
        callback();
    }, 4000);
    
}
function task4(callback){
       setTimeout(() => {
        console.log("task 4 completed");
        callback();
    }, 2000);
    
}
function task5(callback){
        setTimeout(() => {
        console.log("task 5 completed");
        callback();
    }, 2000);
    
}
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    console.log("competed");
                    
                })
            })
        })
    })
});


function userLoggedin(uname,callback){
    setTimeout(() => {
        console.log(uname+"logged in")
        callback();
    }, 5000);
    
}
function profileFetch(callback){
    setTimeout(() => {
        console.log("profile fetched");
        
        callback();
    },1000);
}
function getProfile(callback){

    setTimeout(()=>{
        console.log("profile got");
        
        callback()
    },2000)
}
userLoggedin("Admin",()=>{
    profileFetch(()=>{
        getProfile(()=>{

        })
    })
})