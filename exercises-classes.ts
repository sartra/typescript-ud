// Exercise 1 - How was your TypeScript Class?
class Car {
    name:string = 'sarah'; 
    acceleration:number = 0;

    constructor(name: string){
        this.name = name; 
    }
 
    honk () {
        console.log("Toooooooooot!");
    };
 
    accelerate (speed:number) {
        this.acceleration = this.acceleration + speed;
    }
}

var car = new Car('Carolla');

car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
 




// Exercise 2 - Two objects, based on each other ...
class BaseObject {
    width:number = 3;
    length:number = 2; 
};

class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    };
}

const myRectangle = new Rectangle(); 
myRectangle.width = 5;
myRectangle.length = 2; 
console.log('size', myRectangle.calcSize());
 





// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
    private _firstName: string = "";

    get firstName() {
        return this._firstName; 
    }
    set firstName(value: string) {
        if (value.length > 3){
            this._firstName = value;
        } else {
            this._firstName = 'too short a name'; 
        }
    }
};

const person = new Person(); 
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);