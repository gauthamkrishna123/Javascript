//if
let age=20
if (age >= 18){
    console.log("adult")
    // document.write("Adult"+'<br>') //for display in the browser
}

//if-else
let age1 =10
    if (age1>=18){
        console.log("Adult")
        // document.write('adult'+'<br>')
    }
    else{
        console.log("Minor")
    }

    //ternary operation

    let result = (age >=18) ? "adult" : "minor"
    console.log(result);

    //if else if 

    let mark=75

    if (mark >= 90){
        console.log("A grade");
    }
    else if (mark >=60){
        console.log("B grade");
    }
    else if(mark >= 10){
        console.log("d Grade");
        
    }
    else{
        console.log("fail");
    }


    let num=-10

    if (num > 0){
        console.log("Positive");
        
    }
    else if(num <0){
        console.log("negetive");
        
    }
    else{
        console.log("zero");
        
    }

    //Q2

    let age2=3

    if (age2 >= 18){
        console.log("elegeble to vote");
        
    }
    else{
        console.log("not elegible");
        
    }

    //Q3
     let temp =2
     if (temp >= 35){
        console.log("Hot");
     }
     else if(temp >= 20){
        console.log("Warm");
        
     }else if(temp >= 10){
        console.log("cool");
        
     }else{
        console.log("cold");
        
     }

     //Q4
      let x =10
      if (x > 5){
        console.log("A");
        
      }else if (x > 8){
        console.log("B")
      }else{
        console.log("C");
        
      }

      //Q5

      let v=23

      if (v % 2 === 0){
        console.log("even");
        
      }else{
        console.log("odd");
        
      }
       
      let marks=65
      let attendence=70

      if (marks >= 50){
        if(attendence >= 60){
            console.log("pass")
        }else{
            console.log("fail and attendence shortage");
            
        }
      }else{
       console.log("fail")
      }



      