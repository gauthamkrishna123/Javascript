let word = 'javascript'
// extract java from javascript
console.log('slice',word.slice(0,4))
//replace html with css
let w2 = 'html'

console.log(w2.replace('html','css'));
// split sentence to words
let w3 = 'welcome back to html'
console.log(w3.split(' '));

//vowels

let text = 'Umbrella'

for(let i=text.length-1;i>=0;i--){
    if('AEIOUaeiou'.includes(text[i])){
        console.log(text[i]);
        
    }
}

//count spaces

let text2 = 'the car is beautiful'
let count = 0
for(let i=text2.length-1;i>=0;i--){
    if(' '.includes(text2[i])){
        count++;
        
        
    }
}
console.log(`${count} spaces are in the sentence`);

//find first character in the string

let w4='smartphone'

console.log(w4[0]);
 //last character
 x=w4.length
 console.log(x);
 
 console.log(w4[x-1]);
 
 //consonants

 let t4='vanila icecreammm'
 let t3 = t4.replaceAll(' ','')
 let vow = 0;
 let len=t3.length;
 con =0;
 for (let i=t3.length-1;i>=0;i--){
    if('AEIOUaeiou'.includes(t3[i])){
        vow++
    }
 }
 con = len-vow
 console.log('consonants: ',con);
 console.log('vowels :',vow);
 

 
 //longest word in a sentence

 let sentence = 'hello i am from ernakulam'
 let s=sentence.split(' ');
 let largest =''
 for(let i=0;i<s.length;i++){
    if(s[i].length > largest.length){
        largest=s[i]

    }
}console.log(`${largest} is the longest word`);

    
 

 