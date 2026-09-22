//Arithmetic operator
let a=10 ,b=4;

console.log("add",a+b);
console.log(a-b);
console.log(a*b);
console.log('devide',a/b);
console.log('modules',a%b);
console.log(a**b);

//Assignment operater
let x=10

console.log('+= :',x+=3)
console.log('-= :',x-=3)
console.log('/= :',x/=3)
console.log('*= :',x*=3)
console.log('%= :',x%=3)

//Comparison

let y=20 , z='20' ;
console.log('==',y==z);
console.log('===',y===z);
console.log('!=',5!=5);
console.log('!==',6!==5);
console.log('>==',6>=5);
console.log('<==',6<=5);

//Logical Operator

console.log(true&&true);
console.log(true&&false);
console.log(true||true);
console.log(true||false);
console.log(false||false);

let age=20
let id=true

console.log(age>=30&&id)
console.log(age<=30&&id)
console.log(age<=30||id)
console.log(age>=3||id)


//increment/decrement

let j=9
console.log(j++)
console.log(++j)
console.log(j++)
console.log(j++)
console.log(j--)
console.log(j--)

// Nullish Coalescing

let user = null
let name = user ?? 'guest'
console.log(name)

//swap using temporary variable
let r=3 ,t=5 ,i

i=t;
t=r
r=i
  
console.log(r,t)

//swap without temp

let f=15, g=10

f+=g //25
g=f-g //25-10 =15
f=f-g //25-15 = 10


console.log(f,g)
 
let m=5;
let n=10;

[m,n]=[n,m]
console.log(m)
console.log(n)