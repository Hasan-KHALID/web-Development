let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];
console.log(numberStore);            //[0, 1, 2, 12]



var obj = {key1: "value1", key2: "value2"};
var pair = {key3: "value3"};
obj = {...obj, ...pair};
console.log(JSON.stringify(obj));


function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction(...args);


function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3));          // output: 6
console.log(sum(1, 2, 3, 4));       // output: 10

function myFun(a,  b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}
myFun("one", "two", "three", "four", "five", "six");

// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]