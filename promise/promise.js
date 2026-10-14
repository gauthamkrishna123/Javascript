function task1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("task executed")
        }, 2000);
        
    })
}
function task2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("task2 executed")
        }, 2000);
        
    })
}
function task3(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("task3 executed")
        }, 2000);
        
    })
}
task1()
.then(()=>task2())
.then(()=>task3())
.then(()=>console.log("completed"))
.catch(error =>console.log(error)
)


//another method console
task1()
.then((res)=>{
    console.log(res);
    return task2()
})
.then((res)=>{
    console.log(res);
    return task3()
    
})
.then((res)=>{
    console.log(res);
    
})

// promise.all

Promise.all([task1(),task2(),task3()])

.then(res =>console.log(res))

//promise.race()
//return first setteled promises
let p1 =new Promise((resolve)=>{
    setTimeout(() => {
        resolve("completed")
    },3000);
})
let p2 =new Promise((resolve)=>{
    setTimeout(() => {
        resolve("2 completed")
    },1000);
})
Promise.race([p1,p2])
.then(res =>console.log(res)
)