// classes are basically blueprints for objects 
class Person {
  // public, private, and protected are optional property settings - set in class body, NOT in the constructor 
  public name: string;  // default is public, so can be left off 
  private type: string;  // only available within Person class
  protected age: number = 99; // only available within Person class - but also any objects that inherit from this class 

  constructor(name: string, public username: string){
    this.name = name; 
  }

  printAge() {
    console.log(this.age); 
  }

  setType(type: string){
    this.type = type; 
    console.log(this.type); 
  }
}



// instantiate it by creating an obj based on this class
let person = new Person('sarah', 'sartra'); // gets two args becasue of the constructor function. 
console.log(person) 
person.printAge();
person.setType('typescript maverick'); 



// INHERITANCE 
class Max extends Person {
  name = 'Max'; 
  // when extending a class you always must call super() first
  constructor(username: string){
    super('MAXINE', username); // super refers to parent class
    this.age = 33; 
  }
}
const max = new Max('Anna'); 
console.log(max)



// //  GETTERS & SETTERS
// class Plant {
//   private _species: string; 

//   get species() {
//     return this._species; 
//   }

//   set species(value: string = 'default') {
//     if(value.length > 3){
//       this._species = value; 
//     } else {
//       this._species = 'default'; 
//     }
//   }
// }

// let plant = new Plant(); 
// console.log(plant.species); 


// STATIC PROPS AND METHODS 
class Helpers {
  // static property PI
  static PI: number = 3.14;  // use static so can use this method without instantiating the class
  // static method calcCircumfrence
  static calcCircumference(diameter: number): number {
    return this.PI * diameter
  }
}
console.log(2*Helpers.PI)
console.log(Helpers.calcCircumference(8))


// ABSTRACT CLASSES
abstract class Project {
  projectName: string = 'default name';
  budget: number; 

  abstract changeName(name: string): void; // abstract func only shows how the func should look, doesnt use (){} or do logic
  calcBudget() {
    return this.budget *2; 
  }
}

class ITProject extends Project {
  changeName(name: string): void { // here the abstract changeName function is given logic - in the child class 
    this.projectName = name; 
  }
  budget = 1000; 
}

let newProject = new ITProject(); 

console.log(newProject);
newProject.changeName('super IT project!');
console.log(newProject); 



// PRIVATE CONSTRUCTORS 
