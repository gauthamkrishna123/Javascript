//Sum of first 100 numbers
let i=1;
sum=0;
while(i<=100){
    sum+=i
    i++
}
document.write(sum)
 document.write("<br>")
//mul of 5 btw 1-100

let j=1;

while (j<=100){
  if(j%5 == 0){
    document.write(j)
    document.write("<br>")
  }
  j++;
}

document.write("<br>")
// sum of even
let e=0;
esum=0;
while(e<=50){
    esum+=e;
    e+=2;
}
 document.write(esum)
    
document.write("<br>")

//sum of odd

let o=1;
osum=0;
while(o<=50){
    osum+=o;
    o+=2;
}
 document.write(osum)
    
document.write("<br>")

//square

let a=1;
let b;
while(a<=10){
    b=a**2
    document.write("square of :",a,"=",b)
    document.write("<br>")
    a++;
}
document.write("<br>")

// divisible by 7
let x=1
 count=0;
while(x<=100){
    
    if(x % 7 == 0){
      
       count+=1
    }
    x++
}
 document.write(count)
document.write("<br>")

 //divisible by 3 and 5
let y=1;
 while (y<=100){
    if( y % 5 ==0 && y % 3 == 0){
        document.write(y)
        document.write("<br>")
    }
    y++;
     
 }
 z=1;
 count=0;
 sum=0;
 while(z<=20){
    sum+=z
    count++;
    z++;
 }
let avg= sum / count;

document.write("Avarage =" + avg)