interface NamedPerson {
  firstName: string; 
  age?: number; 
  [propName: string]: any; // if you don't know the name of possible props 
  greet(lastName: string):void;
}

function greet(person: NamedPerson ) { 
  console.log('hi', person.firstName)
}

// function greet(person: {name: string}) { // pass person as object with name prop 
//   console.log('hi', person.name)
// }

const person: NamedPerson = {
  firstName: 'max',
  age: 27,
  greet(lastName: string){
    console.log('hi, I am', this.firstName, lastName)
  }
}

greet(person); 
person.greet('renshaw'); 


class Person implements NamedPerson {
  firstName: string;
  greet(lastName: string){
    console.log('hi class, I am', this.firstName, lastName)
  };
}

const myPerson = new Person();
myPerson.firstName = 'Ann';
greet(myPerson); //greet funciton in global scope
myPerson.greet('Mullin'); // greet fun inside person class 


// FUNCTION TYPES

interface DoubleValueFunc {
  (num1: number, num2: number): number; 
}

let myDoubleFunction: DoubleValueFunc; 
myDoubleFunction = function(value1: number, value2: number) {
  return (value1 + value2) * 2; 
}

console.log(myDoubleFunction(10, 20)) // 60

// INTERFACE INHERITANCE
interface AgedPerson extends NamedPerson {
  age: number; // extending named person just making age required 
}

const ageRequiredPerson: AgedPerson = {
  age: 33, 
  firstName: 'sars',
  greet(lastName: string){
    console.log('hey there,', this.firstName, lastName)
  }
}

console.log(ageRequiredPerson)

// simple GENERIC 
function echo(data: any) {
  return data; 
}
console.log(echo('Rooskie Moose'.length)); 
console.log(echo(100))
console.log(echo({name: 'max', age: 27}))

// Better Generic 
function betterEcho<T>(data: T) { // <T> T can be any char, this tell TS it is a generic func 
  return data; 
}

console.log(betterEcho('Rooskie Moose')); 
console.log(betterEcho(100)) // js infers number to be the type
console.log(betterEcho<number>(101)) // whereas here it is explicitly stated as <number>
console.log(betterEcho<object>({name: 'max', age: 27}))

// Built-in Generics
const testResults: Array<number> = [1.94, 2.33]; 
testResults.push(-2); 
// testResults.push('string'); 
console.log(testResults)

// Arrays
function printAll<T>(args: T[]) { // generic type of elements in the array
  args.forEach(e => console.log(e))
}

printAll(['apple', 'banana']); // works for any type
printAll<string>(['apple', 'banana']); // specifies string type 

const echo2: <T>(data:T) => T = betterEcho; 
console.log(echo2<string>('some string'));

// Generic classes
class SimpleMath<T extends number | string, U extends number | string> {  // class SimpleMath<T extends U, U extends number | string> -- would mean T has to be same type as U
  baseValue: T; 
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue; 
  }
}

const simpleMath = new SimpleMath<number, string>();
simpleMath.baseValue = 10; 
simpleMath.multiplyValue = '20'; 
console.log(simpleMath.calculate()); // 200 