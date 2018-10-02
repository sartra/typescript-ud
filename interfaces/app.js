function greet(person) {
    console.log('hi', person.firstName);
}
// function greet(person: {name: string}) { // pass person as object with name prop 
//   console.log('hi', person.name)
// }
var person = {
    firstName: 'max',
    age: 27,
    greet: function (lastName) {
        console.log('hi, I am', this.firstName, lastName);
    }
};
greet(person);
person.greet('renshaw');
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log('hi class, I am', this.firstName, lastName);
    };
    ;
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = 'Ann';
greet(myPerson); //greet funciton in global scope
myPerson.greet('Mullin'); // greet fun inside person class 
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20)); // 60
var ageRequiredPerson = {
    age: 33,
    firstName: 'sars',
    greet: function (lastName) {
        console.log('hey there,', this.firstName, lastName);
    }
};
console.log(ageRequiredPerson);
// simple GENERIC 
function echo(data) {
    return data;
}
console.log(echo('Rooskie Moose'.length));
console.log(echo(100));
console.log(echo({ name: 'max', age: 27 }));
// Better Generic 
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Rooskie Moose'));
console.log(betterEcho(100)); // js infers number to be the type
console.log(betterEcho(101)); // whereas here it is explicitly stated as <number>
console.log(betterEcho({ name: 'max', age: 27 }));
// Built-in Generics
var testResults = [1.94, 2.33];
testResults.push(-2);
// testResults.push('string'); 
console.log(testResults);
// Arrays
function printAll(args) {
    args.forEach(function (e) { return console.log(e); });
}
printAll(['apple', 'banana']); // works for any type
printAll(['apple', 'banana']); // specifies string type 
var echo2 = betterEcho;
console.log(echo2('some string'));
// Generic classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = '20';
console.log(simpleMath.calculate()); // 200 
