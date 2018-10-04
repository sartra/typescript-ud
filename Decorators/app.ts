// DECORATORS  
// decorator is a function attached to a class - you always ONLY pass the constructor function of the class as arg for decorator 
function logged(constructorFn: Function){
  console.log(constructorFn); 
}
// attach decorators with the @ sign 
@logged 
class Person {
  constructor(){
    console.log('hi')
  }
}

// FACTORY - since only the constructor can be passed to DECORATORS, Factories can take other parameters in order to know if you should run the decorator 
function logging(value: boolean) {
  return value ? logged : null;  // if value true log the func
}
@logging(true)
class Car {

}


// Advanced
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() { 
    console.log(this) 
  }; 
}

@logging(true)
@printable
class Plant {
  name = 'Green Plant'; 
}
const plant = new Plant();
(<any>plant).print(); 




// METHOD DECORATOR  // Property Decorator

function editable(value: boolean) {
  return function(target: any, propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value; 
  }
}

function overwritable(value: boolean) {
  return function(target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor; 
  }
}

class Project {
  @overwritable(false)  // overwritable is a PROPERTY DECORATOR 
  projectName: string; 
  otherName: string; 
  
  constructor(name: string, otherName: string) {
    this.projectName = name; 
    this.otherName = otherName; 
  }
  @editable(false)  // blocks ability to edit this method 
  calcBudget() {
    console.log(project.projectName, project.otherName, 1000); 
  }
}
// create instance of class 
const project = new Project('super project', 'awesome'); 
project.calcBudget(); // 1000
project.calcBudget = function(){
  console.log(project.projectName, 2000)
}
project.calcBudget(); // still 1000 if @editable(false)
console.log(project)


// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log("Target: ", target);
  console.log("methodName: ", methodName);
  console.log("paramIndex: ", paramIndex);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if(printAll) {
      console.log(10000);
    } else {
      console.log(200)
    }
  }
}

const course = new Course('Super Duper Course');
course.printStudentNumbers('any name will do', true); // 10000
course.printStudentNumbers('any name will do', false); // 200
