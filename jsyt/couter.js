const increment = document.getElementById('incrementbtn')
const reset = document.getElementById('resetbtn')
const decrement = document.getElementById('decrementbtn')
const countlabel = document.getElementById('controllabel')

let count =0
increment.onclick = ()=>{
    count++;
   countlabel.textContent = count;
}
reset.onclick = () =>{
    count = 0;
    countlabel.textContent = count;
}
decrement.onclick =() =>{
    count--;
    countlabel.textContent = count;
}