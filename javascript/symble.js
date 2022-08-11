let id = Symbol("id");
let person = {
    name: "Jack",
    // adding symbol as a key
    [id]: 123               // not "id": 123

};

console.log(person);       // {name: "Jack", Symbol(id): 123}

let person2 = {
    name: "Jack"
};

// using string as key 
// Program-1
person2.id = 12;
console.log(person2.id);        // 12




// Another program overwrites value
// Program-2
person2.id = 'Another value';
console.log(person2.id);        // Another value