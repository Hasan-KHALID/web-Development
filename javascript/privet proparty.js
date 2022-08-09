class CoffeeMachine {
   waterAmount = 0;
   sugarAmount = 0;
   constructor(power) {
     this.power = power;
     console.log("Created a coffee machine with power: "+power)
   }
}

// কফি মেশিন থেকে নতুন কফি অবজেক্ট তৈরি
let coffee = new CoffeeMachine(100);

// কফিতে পানির পরিমাণ
coffee.waterAmount = 200;

class CoffeeMachine {
  waterAmount = 0;
  _sugarAmount = 0;
  set sugarAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._sugarAmount = value;
  }
  get sugarAmount(){
    return this._sugarAmount;
  }

  constructor(power) {
    this.power = power;
    console.log("Created a coffee machine with power: "+power)
  }

}

// কফি মেশিন থেকে নতুন কফি অবজেক্ট তৈরি
let coffee = new CoffeeMachine(100);

// কফিতে চিনির পরিমাণ
coffee.sugarAmount = -100;
console.log(coffee.sugarAmount) // আউটপুটঃ 0



class CoffeeMachine {
   #waterAmount = 0;
   set waterAmount(value) {
     this.#waterAmount = value;
   }
   get waterAmount() {
     return this.#waterAmount;
   }
}

let coffee = new CoffeeMachine();
coffee.waterAmount = 10;
console.log(coffee.waterAmount);