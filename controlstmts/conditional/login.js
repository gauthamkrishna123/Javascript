let uname="gautham"
let pwd="ab123"

let name=prompt("enter user name")
let pass=prompt('enter the password')
// let pass=parseInt(prompt('enter the password')) //if pwd is number

if (name === uname && pass === pwd){
    document.write("login successful")
    alert('login success')
}else{
    alert("login failed")
}