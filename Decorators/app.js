var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// DECORATORS  
// decorator is a function attached to a class - you always ONLY pass the constructor function of the class as arg for decorator 
function logged(constructorFn) {
    console.log(constructorFn);
}
// attach decorators with the @ sign 
var Person = /** @class */ (function () {
    function Person() {
        console.log('hi');
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
// FACTORY - since only the constructor can be passed to DECORATORS, Factories can take other parameters in order to know if you should run the decorator 
function logging(value) {
    return value ? logged : null; // if value true log the func
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car = __decorate([
        logging(true)
    ], Car);
    return Car;
}());
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = 'Green Plant';
    }
    Plant = __decorate([
        logging(true),
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print();
// METHOD DECORATOR 
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function (n) {
        console.log(1000);
    };
    return Project;
}());
var project = new Project('super project');
project.calcBudget();
project.calcBudget = function (n) {
    console.log(n);
};
project.calcBudget(3333);
