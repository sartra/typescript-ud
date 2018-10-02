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




// METHOD DECORATOR 
function editable(value: boolean) {
  return function(target: any) {
    
  }
}
class Project {
  projectName: string; 
  
  constructor(name: string) {
    this.projectName = name; 
  }
  calcBudget(n?: number) {
    console.log(1000); 
  }
}

const project = new Project('super project'); 
project.calcBudget(); // 1000
project.calcBudget = function(n:number){
  console.log(n)
}
project.calcBudget(3333); 