const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`Property : ${property} -- value: ${object[property]}`);
}

// Property : a -- value: 1
// Property : b -- value: 2
// Property : c -- value: 3

var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"