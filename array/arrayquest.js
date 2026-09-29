// let array = [10,20,30,40,50]
// for (let i = 0; i< array.length;i++){
//     console.log(array[i]);
    
// }
//sum

let arr =[1,2,40,50]
sum=0;

for(let i = 0; i<arr.length;i++){
    sum+=arr[i]
}
console.log("sum of numbers is:",sum);

//largest

let a1= [30,40,1,3]
let max = a1[0];
for (let i = 0; i<a1.length; i++){
    if( a1[i] > max)
        max = a1[i]
    
}
console.log("large number is;",max);

//smallest

let a2= [30,40,1,3]
let min = a2[0];
for (let i = 0; i<a2.length; i++){
    if( a2[i] < min)
        min = a2[i]
    
}
console.log("smaller number is;",min);

//second largest

// let array2 =[20,9,3,3,20,20,59,200,150]
// array2.sort((a,b) => b-a)
// let res2 = array2.find(n => n < array2[0])
// console.log("second largest:",res2);

let array2 =[20,9,3,3,20,20,59,200,150]
array2 = [...new Set(array2)]; //remove dupliates
array2.sort((a,b) => b-a)
console.log("second largest:",array2[1]);

//second smallest

array2.sort((a,b) => a-b)
let res = array2.find(n => n>array2[0])
console.log("second smallest:",res);

// if (array2[0] !== array2[1]){
//     console.log("second smallest:",array2[1]);
// }else{
//     console.log("second smallest:",array2[2]);
// }

//reverse

let a4 =['a','b','c','d']
let reverse = [];
for(let i =a4.length-1; i>=0; i--){
    reverse.push(a4[i])
}
console.log("reverse",reverse);

// Q3 frequency

let x=[1,1,3,5,5,1]
let result =x.reduce((res,val) => {
    res[val] = (res[val] || 0)+1
    return res;
},{})
console.log(result);

// count = 0;
// for(let i of array2){
//     if (i == 20)
//         count++;
// }
// console.log("frequency of 20:",count);


// *Array*
// 1.Find the second largest element in an array.
// 2.Find the second smallest element in an array.
// 3.Find the frequency of each element in an array.
// 4.Find the first non-repeating element in an array.
// 5.Find the first repeating element in an array.
// 6.Find the missing number in an array containing numbers from 1 to n.
// 7.Check whether an array is sorted in ascending order.
// 8.Move all zeros to the end of an array.
// 9.Rotate an array left by one position.
// 10.Rotate an array right by one position.
// 11.Find the intersection of two arrays.
// 12.Find the union of two arrays.
// 13.Find all pairs whose sum equals a target value.
// 14.Find the element that appears only once while all others appear multiple times.
// 15.Check whether an array is a palindrome.

//Q4

let y =[2,0,5,4,0,2,3,2]

let freq = y.reduce((result,value) =>{
    result[value] = (result[value] || 0)+1
    return result;
},{});
for( value of y){
if(freq[value] == 1){
    console.log("first non-repeating element:",value);
    break;
} 
}


//search
let a5 = [1,4,9]
search = 9
console.log(a5.includes(search));

//even and odd

let a6 =[2,4,3,1,8,5]
let even =0,odd=0;

for(let i of a6){
    if(i % 2 == 0){
        even++
    }else {
        odd++
    }
}
console.log("even numbers:",even);

//sort

for(let i=0;i<=a6.length;i++){
    for(let j=0; j<=a6.length-i-1; j++ ){
        if(a6[j] > a6[j+1]){
            let temp =a6[j];
            a6[j] = a6[j+1];
            a6[j+1] = temp;
        }
    }
}console.log(a6);


