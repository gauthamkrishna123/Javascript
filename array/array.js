let age = [10, 49, 30]
let fruits = ['apple', 'orange', 'grapes', 'kiwi']

console.log('length', fruits.length);
console.log("fruits", fruits);

let numbers = [30, 75, 4, 6]

let newnumbers = numbers.slice(1, 3)
console.log("new array", newnumbers);

 fruits.splice(1, 2, 'hello', 'wow', 'hi', 'bro') // here index 1-2 are replaced by the words
console.log("splice:",fruits);

fruits.push('banana', 'Strawberry')
console.log("push",fruits);

fruits.pop()
console.log("pop",fruits);

fruits.unshift('orange') //insert to the first
console.log("unshift",fruits);

fruits.shift() //delete from the start
console.log("shift", fruits);

let kiwiindex = fruits.indexOf('kiwi')
console.log(kiwiindex);

let morefruits = ['watermelon', 'pineappe']

let combinedfruits = fruits.concat(morefruits)
console.log("concat :",combinedfruits);


//IMPORTANT
let filteredfruits = fruits.filter(fruit => fruit !== 'apple')
console.log("filter:",filteredfruits);

let hasapple = fruits.includes('apple')
console.log("hasapple", hasapple);

fruits.sort()
console.log(fruits);


let fruitData = [
    {
        id: 1,
        fruit: "apple",
        size: "medium",
        color: 'green'
    },
    {
        id: 2,
        fruit: "orange",
        size: "large",
        color: 'green'
    },
    {
        id: 3,
        fruit: "grape",
        size: "small",
        color: 'blue'
    }
]

let foundFruit = fruitData.find(fruit => fruit.id === 3)
console.log("found fruit:", foundFruit);

let foundFruitData = fruitData.find(fruit => fruit !== 'orange') 
console.log("foundfruitdata", foundFruitData);

let array1 = [1, 3, 5, 6, 6, 23]

let x = array1.reduce(function (a, b) {
    return a + b;  //a - accumulator(store the result so far) b- current array value
}, 0);  //the initial value of a is 0
console.log("reduce", x);
//"Go through every value in the array, keep adding it to the previous result, and finally give me the total."

let array2 = array1.sort()
console.log(array2);

let sortedarray = array1.sort((a, b) => a - b) //sort ascending order
console.log("sort ascending", sortedarray);

let sortedarraydesc = array1.sort((a, b) => b - a) //sort descending order
console.log("sort descending", sortedarraydesc);


let upper = fruitData.map((frts, index) => {
    console.log(frts.fruit.toUpperCase());
    console.log(frts.color);

})

const num = [45, 4, 9, 16, 25];
let txt = "";
num.forEach(value => {
    txt+=value+"\n" ;
       
});
console.log("for each:\n",txt);
// function myFunction(value, index, array) {
//   txt += value + "<br>";
// }


const veg = ['tomato', 'carrot', 'potato', 'tomato']

const veg2 = [...new Set(veg)] //set is used to remove duplicates
console.log("remove duplicates", veg2);

let arr = [1, 3, 5, 88, 99, 100]
console.log(arr.reverse());


//array destructuring

[a, b, c, ...rest] = [10, 30, 40, 50, 60, 70]

console.log(`a: ${a}, b: ${b}`);
console.log(c);
console.log(rest);


