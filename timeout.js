function x(){
    for (let i =1 ;i<=5;i++)
    setTimeout(function(){
        document.write(i,"\n");
    },i*1000)
    document.write("welcome")
}
x();