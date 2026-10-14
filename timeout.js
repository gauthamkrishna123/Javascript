function x(){
    for (let i =1 ;i<=5;i++)
    setTimeout(()=>{
        document.write(i);
    },i*1000)
    document.write("welcome")
}
x();