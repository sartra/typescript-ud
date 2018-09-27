console.log("It works!");

// assign array type of items in array any[] 
let hobbies: any[]  = ['cooking', 'swimming']

hobbies = [100]

// tuples - arrays with mixed types and a limited number of items  (order is important)
let address: [string, number] = ['superstreet', 99]; 

// enum - creates a new type
enum Color {
  Gray,
  Green = 100,
  Blue
}

let myColor: Color = Color.Blue;
console.log(myColor); 

let myName = 'sarah'; 
// functions - the value of returned val is string type
function returnMyName(): string {
  return myName; 
}
console.log(returnMyName()); // if pass something not a string get error 

// if a function returns nothing then set return type to void
function sayHello(): void {
  console.log('hello'); // no return
}

// argument types
function multiply(val1: number, val2:number): number {
  return val1 * val2; 
}
console.log(multiply(2, 3));

// function types 
let myMultiply: (val1:number, val2:number) => number ;  // a func type to set to funcs - cannot call this currently 
// myMultiply = sayHello;  -- will give errors!
// myMultiply(); 
myMultiply = multiply; 
console.log(myMultiply(3,3));

// objects
let userData: { name: string, age: number } = {
  name: 'Max',
  age: 27
}; 
// implicitly assigns obj types with name string, age num ; keys hold prop types implicitly 

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function (all: boolean): number[] {
    return this.data;
  }
} 
console.log(complex)

// TYPE ALIAS
type Complex = { data: number[], output: (all: boolean) => number[] }; // reusable type of object - basically a class obj 

let complex2: Complex = {
  data: [200, 3, 8],
  output: function (all: boolean): number[] {
    return this.data;
  }
}
console.log(complex2)


// check types
let finalValue = 3;
if (typeof finalValue == 'number') console.log('final val is a number')

// NEVER TYPE  - function that never finishes 
function neverReturns():never {
  throw new Error('an error!'); 
}

// Nullable Types 
let canBeNull = 12;
canBeNull = null; // clear the val 
let canAlsoBeNull; // has val undefined - with default tpye all 
canAlsoBeNull = null; 
canAlsoBeNull = 12; 


type BankAccount = { money: number, deposit: (value: number) => void }; 

let bankAccount: BankAccount = {
  money: 2000, 
  deposit(value:number): void {
    this.money += value;
  }
}; 

let myself: { name: string, bankAccount: BankAccount, hobbies: string[] } = {
  name: 'max',
  bankAccount: bankAccount,
  hobbies: ['sports', 'cooking']
};

myself.bankAccount.deposit(3000); 

console.log(myself)


const multiplyNumbers = (num1: number, num2: number) => {
  return num1 * num2; 
}

console.log(multiplyNumbers(3, 11)); 

// Rest & Spread 
const nums = [1,2,3,4,5];
console.log(Math.max(...nums));  // spreads out the array into single values 

// Rest parameter - good if you don't know how many args you want 
function makeArray(name: string, ...args: number[]) {  // turns it into an array of nums - args of any quantity 
  return args; 
}

console.log(makeArray('sarah', 1,2,3,4,5,6,7))

// DESTRUCTURING
const myHobbies = ['hiking', 'swimming'];
// const hobby1 = myHobbies[0]
// const hobby2 = myHobbies[1]
// console.log(hobby1, hobby2)
// SAME AS: 
const [hobby1, hobby2] = myHobbies; // [variable names] = array to destructure 
console.log(hobby1, hobby2)

const userData2 = {userName: 'maxine', age: 27}; 
// const userName2 = userData2.userName; 
// const age2 = userData.age; 
const {userName, age} = userData2; 
console.log(userName, age); 