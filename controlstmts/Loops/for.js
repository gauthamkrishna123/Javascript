// for loop

//for (initialization;condition;itration)

// for (let j=1;j<=10;j++){
// console.log(j);
// }


// for (let i=10;i>0;i--){
// console.log(i);
// }

// for (let k=1;k<=20;k++){
//     if (k % 2 == 0){
//         console.log(k);
        
//     }
// }
// let s=1;
// let sum=0;
// for (s=1;s<=10;s++){
//     sum+=s;

// }
// console.log(sum);

// let num=5;
// let i;

// for (i=1;i<=10;i++){
//     res= i*5
//     console.log(i ,'*', 5,"=",res)
// }

//template literals using back tic

// let n=10;
// let j;

// for (j=1;j<=10;j++){
//     res= j*n
//     console.log(`${j} * 10 = ${res}`);
// }

//Factorial of A number

// let number= 4;
// let l;
// fact=1;
// for (l=1;l<=number;l++){
//     fact=fact*l
// }
// console.log(fact);

// reverse

// let num= 123;
// let reverse=0;
// for (let i=1;num>0;i++){
//     let remainder =num%10;
//     reverse =reverse*10 +remainder
//     num=Math.floor(num/10)
// }
// console.log(reverse);

//prime number

// n = 13;
// let i;
// let count = 0;

// for (i=1; i<=n; i++){
//     if (n % i == 0){
//         count++
//     }

// }
//     if(count == 2){
//         console.log('prime');

//     }else{
//         console.log('not prime');
        
//     }

// perfect number

    // let num = 6;
    // let j;
    // let p = 0;
    //  for(j=1; j<num; j++){ // 1<6 
    //     if( num%j == 0){  //6%1 == 0
    //        p+=j; // 0+1
    //     }
        
    //  }
    //  if (p == num){  //1== 6 ? 
    //     console.log("perfect number");
        
    //  }else{
    //     console.log("Not a perfect number");
        
    //  }

//Fibonacci

     let n=7;
     let a=0
     let b = 1
     let i;
     let temp=0;
     for (i=0; i<=n; i++){

        temp = a+b;
        a=b;
        b=temp;
        console.log(a);
     }

//amstrong number