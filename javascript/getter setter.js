const person = {
   // ডাটা প্রোপার্টি
   name: "Mehedi",
   // এক্সেসর প্রোপার্টি (getter)
   get getName (){
     return this.name;
   }
}

console.log(person.name)            // Output: Mehedi
console.log(person.getName)         // Output: Mehedi

console.log(person.getName())       // TypeError: person.getName is not a function



const car = {
    name: "toyota",

    get getName(){
        return this.name;
    }
}

console.log(car.getName)


const person2 = {
   // ডাটা প্রোপার্টি
   name: "Mehedi",
   // এক্সেসর প্রোপার্টি (setter)
   set setName (newName){
     this.name = newName; 
  }
}

console.log(person2.name)       // Output: Mehedi
person.setName = "Azad";
console.log(person2.name)       // Output: Azad



const person3 = {
    name: "rony",
    set setName(newName){
         this.name = newName;
    }
   

}



const person = {
   name: 'Mehedi'
}

// getting property
Object.defineProperty(person, "getName", {
   get : function () {
     return this.name;
   }
});

// setting property
Object.defineProperty(person, "setName", {
   set : function (value) {
     this.name = value;
   }
});

console.log(person.name);         // Output: Mehedi
person.setName = "Azad"
console.log(person.name);         // Output: Azad


