//5
let array =[12,30,1,20,2,1]
let x = array.reduce((res,val) =>{
    res[val] = (res[val] || 0)+1
    return res;
},{})
console.log(x);
for(i of array){
    if(x[i] > 1){
        console.log("first repeating element:",i);  
        break;
    }
}

//6 missing number
let a=[1,2,3,4,6]
let n =6
let total = n*(n+1)/2;
let sum = 0;

for (i of a){
    sum+=i;
}
let result = total-sum

console.log("missing number:",result);

// check sort ascending

let a1 =[2,3,5,8,40,3];
let sorted = true
for(i=0;i<a1.length-1;i++){
    
    if(a1[i] > a1[i+1]){
        sorted = false;
        break;
    }
}
if(sorted){
    console.log("sorted in ascending order");
    
}else{
    console.log("not sorted");
    
}
    
//move 0 to the end

let a2 =[1,4,0,3,0,5,0,10];
let res =[]
let zero =0;
for (let i of a2 ){
    if(i !== 0){
        res.push(i)
    }else{
        zero++;
    }
    
}
for(let i=1;i<=zero;i++){
    res.push(0)
}
console.log(res);

//intersection

let l =[3,5,7,6,2];
let m = [2,4,6,8,10];
let inter =[]
for(let i of l){
    for(let j of m){
        if (j == i){
            inter.push(j);
        }
    }
}
console.log("intersection of two array:",inter);

//palindrome

let t=[1,2,3,2,1,8];
let palindrome =true;
for(let i=0; i<t.length/2;i++){
    if(t[i] !== t[t.length-1-i]){
        palindrome=false;
        break
    }
}
if(palindrome){
    console.log("palindrome");
    
}else{
    console.log("not palindrome");
    
}