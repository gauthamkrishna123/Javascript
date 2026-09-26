let n=10;
for (let i=1;i<=n;i++){
    if(i==5){
        break;
       
        
    }
     console.log(i);
}

for ( i=1; i<=n; i++){
    if(i==5){      //skip 5
        continue;
    }
    console.log(i)
}

for( let i=1; i<=50; i++){
    if(i%5 == 0){
        continue;
    }
    console.log(i);
    
}
 
 let num=[1,2,3,4,5,6,7,8]

for(n of num){
    if(n%2 == 0){
        console.log(n);
    }
}
let sum=0
for( n of num){
 sum+=n
}
 console.log(sum);

 for(let i=1; i<=100; i++){
    if(i%17 == 0){
        break
    }
    console.log(i);
    
 }

 let password ='abcd'

 for(let i=1; i<=3;i++){
    let pass =prompt("enter the password")

    if(password == pass){
        console.log('login succesfully');
        break;
    }else{
        console.log('login failed');
    }
    
 }