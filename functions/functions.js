//fun declaration
function greet() {
  //parameter
  console.log("hello");
}
greet(); //arguments

function square(n) {
  //singleparameter
  console.log(n * n);
}
square(3);

function add(a, b) {
  //multiple
  console.log(a + b);
}
add(4, 6);

//arrow function

const mul = (a, b) => {
  console.log(a * b);
};
mul(2, 3);

const sub = (a, b) => {
  console.log(a - b);
};
let result = sub(5, 1);
console.log(result); //undefind

const div = (a, b) => {
  return a / b;
};
let res = div(10, 2);
console.log(res);

function test() {
  return 22434;
  console.log("kjjcvjk"); //nothing prints after return
}
test();

// function expression anonymous

const sayHello = function () {
  console.log("hello world");
};
sayHello();

const welcomeMsg = function hai() {
  console.log("welcome");
};
welcomeMsg();

function welcome(name = "user") {
  //default parameter
  console.log("welcome " + name);
}
welcome();
welcome("gautham");

//Rest parameter

function sum(...numbers) {
  // any numbers can
  let total = 0;
  for (num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(20, 30, 40, 10));

function oddeven(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(oddeven(20));

//1.largest of 2

function large(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log("largest is:", large(20, 40));

//smallest of 3 nos
function small(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log("smallest is:", small(20, 40));

//6

const product = (a, b) => {
  return a * b;
};
console.log("product is:", product(5, 5));

//5
const diff = (a, b) => {
  let x = console.log(a - b);
  return x;
};
diff(10, 4);

//7
const quosient = (a, b) => {
  let x = console.log(a / b);
  return x;
};
quosient(20, 2);

//8
const s = (n) => {
  console.log(n * n);
};
s(4);

//9
const c = (n) => {
  console.log(n ** 3);
};
c(4);

//10

const check = (n) => {
  if (n > 0) {
    console.log("positive");
  } else if (n < 0) {
    console.log("negetive");
  } else {
    console.log("zero");
  }
};
check(0);

//11 factorial

function fact(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  console.log("factorial of ", n, "is:", factorial);
  return factorial;
}
fact(5);

//12.prime
const prime = (n) => {
  let count = 0;
  for (i = 1; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log(n, " is prime");
  } else {
    console.log(n, "not prime");
  }
};
prime(15);
