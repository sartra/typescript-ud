var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// classes are basically blueprints for objects 
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 99; // only available within Person class - but also any objects that inherit from this class 
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
// instantiate it by creating an obj based on this class
var person = new Person('sarah', 'sartra'); // gets two args becasue of the constructor function. 
console.log(person);
person.printAge();
person.setType('typescript maverick');
// INHERITANCE 
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    // when extending a class you always must call super() first
    function Max(username) {
        var _this = _super.call(this, 'MAXINE', username) || this;
        _this.name = 'Max';
        _this.age = 33;
        return _this;
    }
    return Max;
}(Person));
var max = new Max('Anna');
console.log(max);
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
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    // static method calcCircumfrence
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    // static property PI
    Helpers.PI = 3.14; // use static so can use this method without instantiating the class
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// ABSTRACT CLASSES
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'default name';
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.budget = 1000;
        return _this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('super IT project!');
console.log(newProject);
