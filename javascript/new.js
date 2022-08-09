class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const ceoFacebook = new Person('Zakarberg', 38);
console.log(ceoFacebook);    // Person { name: 'Zakarberg', age: 38 }




function Company(companyName, location) {
  this.companyName = companyName;
  this.location = location;
}

const myCompany = new Company('Vivasoft', 'Banani, Dhaka');
console.log(myCompany);    // Company { companyName: 'Vivasoft', location: 'Banani, Dhaka' }

function Fund(initAmount) {
  this.currentAmount = initAmount;
  this.addAmount = function (amount) {
    this.currentAmount = this.currentAmount + amount;
  }
  this.deductAmount = function (amount) {
    this.currentAmount = this.currentAmount - amount;
  }
}

const bdBank = new Fund(2);
bdBank.addAmount(500000);
bdBank.deductAmount(92000);
console.log(bdBank);
/*
Output:
  Fund {
    currentAmount: 408002,
    addAmount: [Function (anonymous)],
    deductAmount: [Function (anonymous)]
  }
*/