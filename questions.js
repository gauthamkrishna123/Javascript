//q1
let name = "iphone";
let price = "1000";
let quantity = "2";
console.log(`${quantity} ${name} has ${price} Rupees`);

//Q2

console.log(typeof NaN);
console.log(typeof []);
console.log(typeof {});
console.log(typeof true);

//Q3

let l = 5;
let w = 10;
let a = l + w;
let p = 2 * a;
console.log("perimeter :" + p);

//Q4

let mark = 60;
if (mark >= 90) {
  console.log("A Grade");
} else if (mark >= 70) {
  console.log("B Grade");
} else if (mark >= 60) {
  console.log("C grade");
} else {
  console.log("failed");
}

//Q5

let num = 6;

if (num % 7 == 0) {
  console.log("multiple of 7");
} else {
  console.log("not multiple of 7");
}

//Q6

let f = 30;
let j = 56;
let k = 2;
let m = 7;

let largest = f;

if (j > largest) {
  largest = j;
}

if (k > largest) {
  largest = k;
}

if (m > largest) {
  largest = m;
}

console.log("Largest:", largest);

//   Q7

//   let color = Number(
//                 prompt(
//                 "1.Red\n"+
//                 "2.Yellow\n"+
//                 "3.Green\n"+
//                 "5.exit"
//             )
//             );
//   switch(color){
//     case 1 :
//         console.log("Stop");
//         break;
//     case 2 :
//         console.log("Get Ready");
//         break;
//     case 3 :
//         console.log("go");
//         break
//     case 4:
//         console.log("thank you");
//         break;
//     default:
//         console.log("invalid");

//   }

//  Q8

// let month = Number(
//     prompt("enter the month"

//     )
// )

// switch (month){
//     case 1 :
//         console.log('january');
//         break;
//            case 2 :
//         console.log('feb');
//         break;
//            case 3 :
//         console.log('march');
//         break;
//            case 4 :
//         console.log('aprl');
//         break;
//            case 5 :
//         console.log('may');
//         break;
//            case 6 :
//         console.log('june');
//         break;
//            case 7 :
//         console.log('july');
//         break;
//            case 8 :
//         console.log('august');
//         break;
//            case 9 :
//         console.log('sep');
//         break;
//            case 10 :
//         console.log('oct');
//         break;

// }
// //Q9

let numb = 35;

if (numb % 2 == 0 && numb % 5 == 0) {
  console.log("number is divisible by 2 and 3");
} else {
  console.log("number is not divisible by 2 and 3");
}

//Q10

let d = 5;
console.log(d++ + ++d);
12;
