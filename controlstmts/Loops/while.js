// //Sum of first 100 numbers
// let i=1;
// sum=0;
// while(i<=100){
//     sum+=i
//     i++
// }
// document.write(sum)
//  document.write("<br>")
// //mul of 5 btw 1-100

// let j=1;

// while (j<=100){
//   if(j%5 == 0){
//     document.write(j)
//     document.write("<br>")
//   }
//   j++;
// }

// document.write("<br>")
// // sum of even
// let e=0;
// esum=0;
// while(e<=50){
//     esum+=e;
//     e+=2;
// }
//  document.write(esum)

// document.write("<br>")

// //sum of odd

// let o=1;
// osum=0;
// while(o<=50){
//     osum+=o;
//     o+=2;
// }
//  document.write(osum)

// document.write("<br>")

// //square

// let a=1;
// let b;
// while(a<=10){
//     b=a**2
//     document.write("square of :",a,"=",b)
//     document.write("<br>")
//     a++;
// }
// document.write("<br>")

// // divisible by 7
// let x=1
//  count=0;
// while(x<=100){

//     if(x % 7 == 0){

//        count+=1
//     }
//     x++
// }
//  document.write(count)
// document.write("<br>")

//  //divisible by 3 and 5
// let y=1;
//  while (y<=100){
//     if( y % 5 ==0 && y % 3 == 0){
//         document.write(y)
//         document.write("<br>")
//     }
//     y++;

//  }
//  z=1;
//  let count=0;
//  let sum=0;
//  while(z<=20){
//     sum+=z
//     count++;
//     z++;
//  }
// let avg= sum / count;

// document.write("Avarage =" + avg)

// //Palindrome

// let v=121
// let number=121
// let rev=0
// while(number>0){
//     let rem=number%10;
//     rev=rev*10+rem;
//     number=Math.floor(number/10)
// }
// console.log(rev)
// if(rev == v){
//     console.log("palindrome")
// }else{
//     console.log("not palindrome");

// }

//armstrong

// let num=153;
// let original=num;
// let a=0;
// let x=0;
// while (num>0){
//     a=num%10  // 3,5,1
//     x+=a**3; //0+27 + 9+125 + 1 =153
//     num =Math.floor(num/10) //15,1
// }
// if (x == original){
//     console.log("armstrong");

// }else{
//     console.log("not armstrong");

// }

//do while

//  let n=2;
//  do{
//     console.log(n);
//     n++

//  }while(n<10)

//     //atm

//     let balance=1000;
//     let choice;

//     do{
//         choice = Number(
//             prompt(
//                 "ATM Menu\n"+
//                 "1.Check balance\n"+
//                 "2.Deposit\n"+
//                 "3.Withdraw\n"+
//                 "4.exit"
//             )
//         );
//         switch (choice){
//             case 1:
//                 console.log("current balance :"+ balance);
//                 break;
//             case 2:
//                 let deposit =Number(prompt("deposit amount:"))
//                 balance+=deposit;
//                 console.log(deposit + "deposited.");
//                 console.log("new balance ="+balance);
//                 break;
//             case 3:
//                 let withdraw =Number(prompt('enter withdrawal amount:'))
//                 if (withdraw <= balance){
//                 balance-=withdraw;
//                 console.log(withdraw+"withdrawn.");
//                 console.log("remaining balance: "+ balance);
//                 }else{
//                     console.log("insufficient balance");

//                 }
//                 break;
//             case 4:
//                 console.log("thank you for using ATM.")
//                 break;
//             default:
//                 console.log("invalid choice");

//         }

//     }while(choice !== 4);

// fibonacci do-while

let a = 0,
  b = 1,
  temp = 0;
let n = 0;
do {
  console.log(a);
  temp = a + b;
  a = b;
  b = temp;
  n++;
} while (n <= 10);
