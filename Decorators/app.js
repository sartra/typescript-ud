var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
// METHOD DECORATOR  // Property Decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project = /** @class */ (function () {
    function Project(name, otherName) {
        this.projectName = name;
        this.otherName = otherName;
    }
    Project.prototype.calcBudget = function () {
        console.log(project.projectName, project.otherName, 1000);
    };
    __decorate([
        overwritable(false)
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(false) // blocks ability to edit this method 
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var project = new Project('super project', 'awesome');
project.calcBudget(); // 1000
project.calcBudget = function () {
    console.log(project.projectName, 2000);
};
project.calcBudget(); // still 1000 if @editable(false)
console.log(project);
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(20000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course('Super Duper Course');
course.printStudentNumbers('any name will do', true); // 10000
course.printStudentNumbers('any name will do', false); // 20000
