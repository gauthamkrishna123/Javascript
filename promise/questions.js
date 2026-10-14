//1
// console.log("Loading...");

// setTimeout(()=>{
//     console.log("Data Loaded");

// },3000)

//2
// let count = 5;
// function countdown(){
//     console.log(count);
//     setTimeout(() => {
//         if(count>1){
//         count--;
//         countdown();
//     }
//     },1000);

// }
// countdown();

//3.Simulate a file download completing after 4 seconds.

// const button = document.getElementById("btn")
// const p =document.getElementById("p1")
// button.addEventListener("click",()=>{
//     setTimeout(() => {
//         p.innerHTML="Download completed"
//     },4000);
// })
//4. Create an ATM simulation using setTimeout()
// function insertCard(callback){
//     console.log("Card inserted");
//     callback()
// }
// function varifyPin(callback) {
//     setTimeout(()=>{
//         console.log("Your pin is varified");
//         callback()
//     },2000)
// }
// function amount(callback){
//     setTimeout(() => {
//      console.log("Entered 1000 Rs");
//      callback()       
//     }, 1000);

// }
// function withdraw(){
//     setTimeout(() => {
//         console.log("Collect your cash");
//         
//     }, 3000);
// }
// insertCard(()=>{
//     varifyPin(()=>{
//         amount(()=>{
//             withdraw()
//         })
//     })
// })
// 1.Create a food delivery workflow using nested callbacks.

// function orderFood(callback){
//     setTimeout(() => {
//         console.log("Food ordered");
//         callback()
//     }, 1000);
// }
// function acceptOrder(callback){
//     setTimeout(() => {
//        console.log("Order Accepted");
//         callback()
//     },2000 );
// }
// function prepareFood(callback){
//     setTimeout(() => {
//         console.log("Food prepared");
//         callback()
//     }, 4000);
// }
// function foodDelivered(){
//     setTimeout(() => {
//         console.log("Order placed");

//     }, 5000);
// }
// orderFood(()=>{
//     acceptOrder(()=>{
//         prepareFood(()=>{
//             foodDelivered()
//         })
//     })
// })

//3.Create a movie ticket booking workflow using callbacks.
// function selectTheater(callback){
//     console.log("Theater selected");
//     callback()
// }
// function selectMovie(callback) {
//     setTimeout(() => {
//         console.log("movie Selected");
//         callback()
//     }, 2000);
// }
// function selectSeat(callback) {
//     setTimeout(() => {
//         console.log("seat selected");
//         callback()
//     }, 2000);
// }
// function bookTicket() {
//     setTimeout(() => {
//         console.log("ticket booked");

//     }, 3000);
// }
// selectTheater(()=>{
//     selectMovie(()=>{
//         selectSeat(()=>{
//             bookTicket()
//         })
//     })
// })
// 4. Create a student admission process using callbacks.
// 5. Create a hospital appointment workflow using callbacks.
// 6. Create a restaurant order processing workflow using callbacks.

//Promises
// 1.Create a Promise that resolves after 3 seconds.
// let p = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("accepted")
//     }, 3000);
// })
// p.then((result)=>{
//     console.log(result);

// })
// //2. Check voting eligibility using a Promise.
// let age =2;
// let p2 = new Promise((resolve,reject)=>{
//     if(age>=18){
//         resolve("eligible to vote")
//     }else{
//         reject("not eligible to vote")
//     }
// })
// p2.then((res)=>{
//     console.log(res);

// }).catch(error =>{console.log(error);
// })
// //3. Validate login credentials using a Promise.

// let username ='admin';
// let password ='1234'
// let p3 =new Promise((resolve,reject)=>{
//     if(username === 'admin' && password === '123'){
//         resolve("loggedin")
//     }else{
//         reject("invalid username or password")
//     }
// })
// p3.then((res)=>{
//     console.log(res);

// }).catch(error =>console.log(error)
// )
// 1. Create an ATM withdrawal system using Promise chaining:
// Verify account
// Check balance
// Withdraw money
// Send receipt

function varifyAccount() {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Account Varified")
        }, 2000);

    })
}
function checkBalance() {
  
      return  new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("balance checked")
            },2000);
            
        })
    

}
function withdrawMoney() {
   
       return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("withdrawed")
            }, 3000);
            
        })
  
}
function receipt() {
  
    return new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve("recept send")  
            }, 3000);
           
        })
   

}
 varifyAccount()
    .then((res) => {
        console.log(res);
       return  checkBalance()
    }).then((res) => {
        console.log(res);
        return withdrawMoney()
    }).then((res) => {
        console.log(res);
     return receipt()
    }).then((res) => {
        console.log(res);
    }).catch(error=>{console.log(error);
    })