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



const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.name;
};
xmlhttp.open("GET", "json_demo.txt");
xmlhttp.send();

const myObj44 = {name: "John", age: 31, city: "New York"};
const myJSON09 = JSON.stringify(myObj);
window.location = "demo_json.php?x=" + myJSON;



const dbParam = JSON.stringify({table:"customers",limit:20});
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  myObj = JSON.parse(this.responseText);
  let text = "<table border='1'>"
  for (let x in myObj) {
    text += "<tr><td>" + myObj[x].name + "</td></tr>";
  }
  text += "</table>"
  document.getElementById("demo").innerHTML = text;
}
xmlhttp.open("POST", "json_demo_html_table.php");
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);