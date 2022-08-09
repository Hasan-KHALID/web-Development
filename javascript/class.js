class Car {
    constructor(color, brand, model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }
    repaint(){
        this.color = "Red";
    }
}

const myCar = new Car("Black", "Doge", "Charger");
const helensCar = new Car("Blue", "Nissan", "Ultima");


class person {
    constructor(age ,name){
        this.age = age;
        this.name = name;
    }
    printName(){
        console.log(this.name)
    }
}

const person1 = new person(12, "loki") 




class CakeFactory {
   constructor(){
      this.createCake = function(flavor){
          let cake;
          if(flavor === "chocolate"){
             cake = new ChocolateCake();
          }
          else if(flavor === "biscuit"){
             cake = new BiscuitCake();
          }
          else if(flavor === "pound"){
             cake = new PoundCake();
          }
          return cake;
      }
   }
}

class ChocolateCake {
   constructor(){
      this.cakeFlavor = "Chocolate Cake";
      this.made = function (){
         console.log("You made "+this.cakeFlavor)
      }
   }
}

class BiscuitCake {
    constructor(){
      this.cakeFlavor = "Biscuit Cake";
      this.made = function (){
        console.log("You made "+this.cakeFlavor)
      }
   }
}

class PoundCake {
    constructor(){
      this.cakeFlavor = "Pound Cake";
      this.made = function (){
        console.log("You made "+this.cakeFlavor)
      }
   }
}

const cakeFactory = new CakeFactory();
const chocolate = cakeFactory.createCake("chocolate");
const pound = cakeFactory.createCake("pound");
const biscuit = cakeFactory.createCake("biscuit")
chocolate.made()                          // আউটপুটঃ You made Chocolate Cake
pound.made()                              // আউটপুটঃ You made Pound Cake
biscuit.made()                            // আউটপুটঃ You made Biscuit Cake





class Car {
    constructor(options) {
        this.wheels = options.wheels;
        this.doors = options.doors;
        this.color = options.color; 
    }
}

class Truck {
    constructor(options) {
        this.wheels = options.wheels;
        this.doors = options.doors;
        this.color = options.color; 
    }
}

class Factory {

    constructor(type) {
        this.type = type;
    }

    create = (options) => {
        let vehicleType = this.type;
        let vehicle;
        
        if (vehicleType === "car") {
            vehicle = new Car(options);
        } else if (vehicleType === "truck") {
            vehicle = new Truck(options);
        }

        
        vehicle.vehicleType = vehicleType;

        vehicle.startEngine = ()=> console.log(`Reving ${vehicleType} engine`);

        vehicle.driveVehicle = ()=> console.log(`Driving ${vehicleType}...`);

        vehicle.stopEngine = ()=> console.log(`Stop ${vehicleType} engine`);

        return vehicle;
    }
    
};

const TruckFactory = new Factory("truck");
const truck = TruckFactory.create({
    wheels: 12,
    doors: 2,
    color: "yellow"
})


console.log(truck)

truck.startEngine();