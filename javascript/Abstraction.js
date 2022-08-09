function Car(name){
   this.name = name;
   this.start = function(){
     // car starting mechanism
     console.log(this.name + " starts");
   }
   this.stop = function(){
     // break mechanism
     console.log(this.name+ " stops");
   }
}

let mercedes = new Car("Mercedes Benz");
mercedes.start();           // Output: Mercedes Benz starts
mercedes.stop();            // Output: Mercedes Benz stops


class Account {
  #balance = 0;     // Private property
  constructor(name, initBalance) {
    this.name = name;
    this.#balance = initBalance;
  }
  addBalance(amount) {
    this.#balance = this.#balance + amount;
  }
  deductBalance(amount) {
    this.#balance = this.#balance - amount;
  }
  showBalance() {
    console.log('Current balance is: ', this.#balance);
  }
}

const myAccount = new Account('Tajnur', 526310);
console.log(myAccount);    // Account { name: 'Tajnur' }
myAccount.addBalance(804700);
myAccount.showBalance();    // Current balance is:  1331010
// উপরের কোডটিতে কিভাবে একাউন্টে টাকা যোগ বা বিয়োগ করা হচ্ছে সেটি সরাসরি না দেখিয়ে একটি মেথডের মাধ্যমে কাজটি করা হচ্ছে এবং মেথডের ভিতরের প্রসেসটি ইউজারের কাছ থেকে হাইড করে রাখা হচ্ছে।



function Machine(name) {
  this.name = name;
  this.turnOn = function () {
    // Some process here
    console.log(`${this.name} machine starts...`);
  }
  this.turnOff = function () {
    // Some process here
    console.log(`${this.name} machine stops.`);
  }
}

const mig24 = new Machine('Jet');
mig24.turnOn();     // Jet machine starts...
mig24.turnOff();    // Jet machine stops.  


function Computer(name, model) {
  this.name = name;
  this.model = model;
  this.startPC = function () {
    console.log(`Your ${this.name} ${this.model} is starting...`);
  }
  this.stopPC = function () {
    console.log(`Your ${this.name} ${this.model} is shutting down...`);
  }
}

const myPC2 = new Computer('MacBook', 'Pro');
myPC.startPC();    // Your MacBook Pro is starting...
myPC.stopPC();    // Your MacBook Pro is shutting down...


function Computer(name, model) {
  this.name = name;
  this.model = model;
  this.startPC = function () {
    console.log(`Your ${this.name} ${this.model} is starting...`);
  }
  this.stopPC = function () {
    console.log(`Your ${this.name} ${this.model} is shutting down...`);
  }
}

const myPC = new Computer('MacBook', 'Pro');
myPC.startPC();    // Your MacBook Pro is starting...
myPC.stopPC();    // Your MacBook Pro is shutting down...


