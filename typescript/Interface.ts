interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Murphy", 1)


function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}

printStatusCode(404);
printStatusCode('404');


function printHello(): void {
  console.log('Hello!');
}

printHello();

let x4: unknown = 'hello';


class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
      
const person = new Person("Jane");

console.log(person.getName()); // person.name isn't accessible from outside the class since it's privat