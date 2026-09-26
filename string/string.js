let a='hello'
let b= "hello"
let c =`jfjff`

let x = "  hello welcome  "
console.log('length',x.length);
console.log('index',x[3])
console.log('uppercase :',x.toUpperCase());
// console.log(x.toLowerCase());
console.log(x.trim());
console.log(x.slice(2,7));
console.log(x.trim().substring(0,6));

let str = "Javascript"
let str2= 'jhhh,kjnj,jjj'
console.log('slice',str.slice(-5,-2)); //support negetive index
console.log('substring',str.substring(2,7));

console.log(str.replace('Javascript','js'));
console.log(str2.replaceAll(",",'?'));

console.log(str.includes('z'));
console.log(str.indexOf('a'));
console.log(str.lastIndexOf('z'));

console.log(str.startsWith('hello')); 
console.log(str.endsWith('pt')); 

let text1 ='hello'
let text2 = "world"

console.log(text1.concat(' ',text2));
console.log(text1+text2);
let fruits = 'mango apple'
console.log(fruits.split(' '));
console.log(fruits.repeat(3));

let text3 = "welcome js"
console.log(text3.match(/js/));
console.log(text3.search(/m/));

let words =['hai','hello','welcome']

console.log(words.join(' '));

//Template literal

let name ='cr7',age=40

console.log(`${name} has ${40} age`);

let word1 = 'hello'
console.log(word1.split('').reverse().join(''));

//reverse a string
let name2='malayalam'
let rev=''
for(let i=name2.length-1;i>=0;i--){
    rev+=name2[i]
}
console.log(rev);

if( rev == name2){
    console.log('palindrome');
    
}else{
    console.log('not palindrome');
    
}






