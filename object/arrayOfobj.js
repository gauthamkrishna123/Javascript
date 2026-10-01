//Questions
let employee =[
    {id:1,name:'ronaldo',age:40},
    {id:2,name:'messi',age:37},
    {id:3,name:'neymar',age:26},
    {id:4,name:'Mbape',age:22}
]
let Ageabove25 = employee.filter(emp => emp.age>25).map(emp =>emp.name)
console.log("above 25:",Ageabove25);

let highestAge = employee.sort((a,b) => b.age - a.age)
console.log("highest age:",highestAge[0].name);

let lowestAge = employee.sort((a,b) => a.age - b.age)
console.log("lowest age :",lowestAge[0].name);

employee[0].salary=95000;
employee[1].salary=38000;
employee[2].salary=54000;
employee[3].salary=70000;


let totalsal = employee.reduce((total,sal) =>{
    return total+sal.salary
},0)
console.log("total salary:",totalsal);

let Avgage =employee.reduce((total,age) =>{ 
    return total+age.age/employee.length
},0)
console.log("avarage age",Math.floor(Avgage));

let s = employee.filter(emp => emp.salary >30000).map(emp =>{
    return emp.name
    
})
console.log("salary above 30000:",s);

let salsort = employee.sort((a,b) =>b.salary - a.salary)
console.log(salsort);

let f = employee.find(emp =>emp.name == 'ronaldo')
f.salary = 100000

console.log(employee);

let products =[
    {id:1,name:'Table',price:26000},
    {id:2,name:'Chair',price:1000},
    {id:3,name:'Sofa',price:5000},
    {id:3,name:'Sofa',price:5000}
]

 let hp = products.sort((a,b) => b.price - a.price)
 console.log('highest price:',hp[0].name +"  Rs:"+hp[0].price);
 
let TotalPrice = products.reduce((t,p) =>{
    return t+p.price
},0)
console.log("total price:",TotalPrice);

let h = products.find(p =>p.price>25000)
console.log("price above 25000:",h.name);

//find element using id
let i =products.find(p =>p.id === 1)

console.log(i.name);

let tax = products.map(p =>(p.price)+(p.price*10)/100)
console.log(tax);

//remove duplicate based on id

let result = products.filter((product,index) =>{
    return index === products.findIndex(p => product.id === p.id)
})

console.log(result);















// let highest =0
// let lowest =employee[0].age
// let older=''
// let elder =''
// let total =0;
// let avg;
// let sumage = 0;
// employee[0].salary=2800
// employee[1].salary=3000
// employee[2].salary=4500
// for(let i=0;i<employee.length;i++){
//     console.log(employee[i].name);
//     console.log(employee[i].age);
//     if(employee[i].age >25){
//         console.log("age above 25:",employee[i].name);
        
//     }
//     if(employee[i].age > highest){
//         highest=employee[i].age;
//         older=employee[i].name;   
//     }
//         if(employee[i].age < lowest){
//         lowest=employee[i].age;
//         elder=employee[i].name;   
//     }
//     total += employee[i].salary
//     sumage+=employee[i].age
//    let avg = sumage/employee.length
// }

//         console.log(older);
//         console.log(highest);
//         console.log(elder);
//         console.log(lowest);
//         console.log(employee);
//         console.log("total salary:",total);
//         console.log(avg);
        
        
        
        

