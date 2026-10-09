const subscribe = document.getElementById("sub");
const Gpay = document.getElementById("gpay");
const Phonepay = document.getElementById("Phonepay");
const Visa = document.getElementById("Visa");
const subtxt = document.getElementById("subtxt");
const payment = document.getElementById("paytxt");
const subbtn = document.getElementById("submit")

subbtn.onclick= function(){
    if(subscribe.checked){
        subtxt.textContent=`You are subscribed`
    }else{
        subtxt.textContent=`You are not subscribed`
    }


    if(Gpay.checked){
        payment.textContent =`Payment using Google pay.`
    }
    else if(Phonepay.checked){
        payment.textContent =`Payment using Phone pay.`
    }
    else if(Visa.checked){
        payment.textContent =`Payment using Visa pay.`
    }else{
        payment.textContent=`You must choose the payment method.`
    }
}