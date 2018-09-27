console.log("It works!");
// assign array type of items in array any[] 
var hobbies = ['cooking', 'swimming'];
hobbies = [100];
// tuples - arrays with mixed types and a limited number of items  (order is important)
var address = ['superstreet', 99];
// enum - creates a new type
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
var myName = 'sarah';
// functions - the value of returned val is string type
function returnMyName() {
    return myName;
}
console.log(returnMyName()); // if pass something not a string get error 
// if a function returns nothing then set return type to void
function sayHello() {
    console.log('hello'); // no return
}
// argument types
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(2, 3));
// function types 
var myMultiply; // a func type to set to funcs - cannot call this currently 
// myMultiply = sayHello;  -- will give errors!
// myMultiply(); 
myMultiply = multiply;
console.log(myMultiply(3, 3));
// objects
var userData = {
    name: 'Max',
    age: 27
};
// implicitly assigns obj types with name string, age num ; keys hold prop types implicitly 
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex);
var complex2 = {
    data: [200, 3, 8],
    output: function (all) {
        return this.data;
    }
};
console.log(complex2);
// check types
var finalValue = 3;
if (typeof finalValue == 'number')
    console.log('final val is a number');
// NEVER TYPE  - function that never finishes 
function neverReturns() {
    throw new Error('an error!');
}
// Nullable Types 
var canBeNull = 12;
canBeNull = null; // clear the val 
var canAlsoBeNull; // has val undefined - with default tpye all 
canAlsoBeNull = null;
canAlsoBeNull = 12;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'max',
    bankAccount: bankAccount,
    hobbies: ['sports', 'cooking']
};
myself.bankAccount.deposit(3000);
console.log(myself);
var multiplyNumbers = function (num1, num2) {
    return num1 * num2;
};
console.log(multiplyNumbers(3, 11));
// Rest & Spread 
var nums = [1, 2, 3, 4, 5];
console.log(Math.max.apply(Math, nums)); // spreads out the array into single values 
// Rest parameter - good if you don't know how many args you want 
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray('sarah', 1, 2, 3, 4, 5, 6, 7));
// DESTRUCTURING
var myHobbies = ['hiking', 'swimming'];
// const hobby1 = myHobbies[0]
// const hobby2 = myHobbies[1]
// console.log(hobby1, hobby2)
// SAME AS: 
var hobby1 = myHobbies[0], hobby2 = myHobbies[1]; // [variable names] = array to destructure 
console.log(hobby1, hobby2);
var userData2 = { userName: 'maxine', age: 27 };
// const userName2 = userData2.userName; 
// const age2 = userData.age; 
var userName = userData2.userName, age = userData2.age;
console.log(userName, age);
