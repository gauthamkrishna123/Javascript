let num1=parseInt(prompt('enter number'))
let num2=parseInt(prompt('enter number'))
let optr=prompt('enter oprator')
let c
if (optr == '+'){
    c=num1+num2
    document.write(c)
    // alert(c)
    
}else if(optr == '-'){
    c=num1-num2
    document.write(c)
    alert(c)
}else if(optr == '*'){
    c=num1*num2
    document.write(c)
    alert(c)
}else if(optr == '/'){
    c=num1/num2
    document.write(c)
    alert(c)
}else{
    alert("invalid")
}

