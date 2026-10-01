let student = {
  name: "rahul",
  age: 23,
  course: "mern",
};
document.write(student);
document.write(JSON.stringify(student));

//accessing

document.write("<br>" + student.name);
document.write(student["course"]);

//adding
student.city = "kochi";
document.write(JSON.stringify(student));

//updating

student.age = 27;
document.write("<br>", student.age);

//delete
delete student.age;
document.write(JSON.stringify(student));

//nested object

let student1 = {
  name: "gautham",
  address: {
    city: "kochi",
    pin: "948838",
  },
};

document.write(JSON.stringify(student1));
console.log(student1.address.city);

//object destructuring

let {
  name,
  address: { city },
} = student1;
console.log(name);
console.log(city);

//spread operator

let person = {
  name: "jdfjdf",
  age: 46,
};
let person1 = {
  city: "eklm",
  place: "pvm",
};
let person2 = {
  ...person,
  ...person1,
  value: "jjhj",
};
console.log(person2);

//looping through object

for (let p in person2) {
  console.log(p, person2[p]);
}

let user = { name: "john", age: 21 };

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//count

console.log(Object.keys(user).length);

//check property exist

if ("name" in user) {
  console.log("exist");
} else {
  console.log("not exist");
}

//highest score

let scores = {
  david: 29,
  john: 59,
  johny: 90,
  messi: 50,
};

let highestScore = 0;
let highestStudent = "";

for (let key in scores) {
  if (scores[key] > highestScore) {
    highestScore = scores[key];
    highestStudent = key;
  }
}
console.log(highestScore);
console.log(highestStudent);

let cars = {
  BMW: 2,
  Benz: 5,
  Audi: 4,
};
let jeep = {
  Thar: 23,
  jeep: 6,
  jimni: 9,
};

let vehicles = {
  ...cars,
  ...jeep,
};
console.log(vehicles);

//shallow copy

let object = {
  name: "gautham",
  age: 22,
  address: {
    city: "kottayam",
    pin: 238748,
  },
};
let copy = { ...object };
copy.name = "rahul"; //changes only in copy
copy.address.city = "ernakulam"; //also change in object
console.log("copy:", copy);
console.log("original:", object);

//deep copy

let person3 = {
  name: "Gautham",
  age: 23,
  address: {
    city: "Kochi",
    pin: 682001,
  },
};

let copy2 = structuredClone(person3); //takes the exact copy of the object
copy2.address.city = "Tvm";
console.log("deep copy:", copy2);
console.log(person3);
