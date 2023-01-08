const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);



const obj1 = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
console.log(myJSON)

const obj2 = {name: "John", age: 30, city: "New York"};
const myJSON2 = JSON.stringify(obj);




const myObj = { name: "John", age: 31, city: "New York" };
const myJSON1 = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let text4 = localStorage.getItem("testJSON");
let obj5 = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;