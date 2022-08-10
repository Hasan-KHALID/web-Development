class Dog {
   constructor(name, age){
      this.name = name;
      this.age = age;
   }
   bark (){
      console.log("Dog barking");
   }
}

class HuskyDog extends Dog {
   constructor(name, age){
     super(name, age);
   }
   bark(){
     console.log("Husky dog barking")
   }
   play () {
     console.log(this.name+ " is playing");
   }
}

const hachi = new HuskyDog("Hachi", 2);
hachi.bark();                 // Output: Husky dog barking
hachi.play();                 // Output: Hachi is playing


class Dog {
   constructor(name, age){
     this.name = name;
     this.age = age;
   }
   bark (){
     console.log("Dog barking");
   }
   play(){
     console.log(this.name+" is playing")
   }
   play(partner){
     console.log(this.name+" is playing with "+ partner)
   }
   play(partner1, partner2){
     console.log(this.name+" is playing with "+ partner1+ " and "+partner2)
   }
}

const hachi4 = new Dog("Hachi", 2);
hachi.play();                         // Output: Hachi is playing with undefined and undefined
hachi.play("Broley");                 // Output: Hachi is playing with Broley and undefined
hachi.play("Broley", "Bravo");        // Output: Hachi is playing with Broley and Bravo

class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  run() {
    console.log('Vehicle is running...');
  }
  turnLightsOn() {
    console.log('Lights on.');
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand, model);
  }
  run() {
    console.log(`The ${this.brand} ${this.model} car is running...`);
  }
}

const myCar = new Car('Lumbergini', 'X22');
myCar.run();    // The Lumbergini X22 car is running...
myCar.turnLightsOn();    // Lights on.


class Database {
  dbName = '';
  dbPassword = '';
  constructor(dbName, dbPass) {
    this.dbName = dbName;
    this.dbPassword = dbPass;
  }
  connectionMsg() {
    console.log('Database connected...');
  }
  errorMsg() {
    console.log('There is a problem while trying to connect with database.');
  }
}

class PythonDB extends Database {
  constructor(dbName, dbPass) {
    super(dbName, dbPass);
  }
  connect(dbName, dbPass) {
    if ((this.dbName === dbName) && (this.dbPassword === dbPass)) {
      this.connectionMsg();
    } else {
      this.errorMsg();
    }
  }
}

const companyDB = new PythonDB('vivasoft', '1234');
companyDB.connect('vivasoft', '1425');    // There is a problem while trying to connect with database.
companyDB.connect('vivasoft', '1234');    // Database connected...