/*
Topic: Inheritance
Description: Inheritance allows classes to inherit properties and methods
from parent classes. JavaScript supports both prototypal and class-based inheritance.
*/

// Example 1: Class Inheritance
console.log('=== Example 1: Class Inheritance ===');

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        return `${this.name} makes a sound.`;
    }
    
    move() {
        return `${this.name} moves.`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Canine'); // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks!`; // Override parent method
    }
    
    fetch() {
        return `${this.name} fetches the ball.`; // New method
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name, 'Feline');
        this.color = color;
    }
    
    speak() {
        return `${this.name} meows!`; // Override parent method
    }
    
    climb() {
        return `${this.name} climbs the tree.`; // New method
    }
}

const dog = new Dog('Buddy', 'Golden Retriever');
const cat = new Cat('Whiskers', 'Orange');

console.log('Dog speaks:', dog.speak());
console.log('Dog moves:', dog.move());
console.log('Dog fetches:', dog.fetch());
console.log('Cat speaks:', cat.speak());
console.log('Cat climbs:', cat.climb());

// Example 2: Multiple Levels of Inheritance
console.log('\n=== Example 2: Multiple Levels ===');

class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    
    start() {
        return `${this.brand} starts.`;
    }
    
    stop() {
        return `${this.brand} stops.`;
    }
}

class Car extends Vehicle {
    constructor(brand, year, doors) {
        super(brand, year);
        this.doors = doors;
        this.type = 'Car';
    }
    
    drive() {
        return `${this.brand} ${this.type} is driving.`;
    }
}

class SportsCar extends Car {
    constructor(brand, year, topSpeed) {
        super(brand, year, 2); // Sports cars typically have 2 doors
        this.topSpeed = topSpeed;
        this.type = 'Sports Car';
    }
    
    race() {
        return `${this.brand} ${this.type} races at ${this.topSpeed} mph!`;
    }
}

const sportsCar = new SportsCar('Ferrari', 2023, 200);
console.log('Sports car starts:', sportsCar.start());
console.log('Sports car drives:', sportsCar.drive());
console.log('Sports car races:', sportsCar.race());

// Example 3: Method Overriding with super
console.log('\n=== Example 3: Method Overriding with super ===');

class Shape {
    constructor(name) {
        this.name = name;
    }
    
    getArea() {
        return 0;
    }
    
    getInfo() {
        return `${this.name} with area ${this.getArea()}`;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle');
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
    
    getInfo() {
        return `${super.getInfo()} (${this.width} x ${this.height})`;
    }
}

const rect = new Rectangle(10, 5);
console.log('Rectangle info:', rect.getInfo());

// Example 4: instanceof and isPrototypeOf
console.log('\n=== Example 4: instanceof ===');

console.log('dog instanceof Dog:', dog instanceof Dog);
console.log('dog instanceof Animal:', dog instanceof Animal);
console.log('dog instanceof Object:', dog instanceof Object);
console.log('sportsCar instanceof SportsCar:', sportsCar instanceof SportsCar);
console.log('sportsCar instanceof Car:', sportsCar instanceof Car);
console.log('sportsCar instanceof Vehicle:', sportsCar instanceof Vehicle);

// Example 5: Composition vs Inheritance
console.log('\n=== Example 5: Composition ===');

// Instead of inheritance, use composition
class Engine {
    start() {
        return 'Engine starts.';
    }
    
    stop() {
        return 'Engine stops.';
    }
}

class Wheel {
    constructor(position) {
        this.position = position;
    }
    
    rotate() {
        return `${this.position} wheel rotates.`;
    }
}

class VehicleComposition {
    constructor(brand) {
        this.brand = brand;
        this.engine = new Engine();
        this.wheels = [
            new Wheel('Front Left'),
            new Wheel('Front Right'),
            new Wheel('Rear Left'),
            new Wheel('Rear Right')
        ];
    }
    
    start() {
        return `${this.brand}: ${this.engine.start()}`;
    }
    
    drive() {
        return this.wheels.map(wheel => wheel.rotate()).join(' ');
    }
}

const vehicle = new VehicleComposition('Toyota');
console.log('Vehicle starts:', vehicle.start());
console.log('Vehicle drives:', vehicle.drive());

// Example 6: Real-world Example - Employee Hierarchy
console.log('\n=== Example 6: Employee Hierarchy ===');

class Employee {
    constructor(name, id, department) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = 0;
    }
    
    work() {
        return `${this.name} is working.`;
    }
    
    getInfo() {
        return `${this.name} (ID: ${this.id}) - ${this.department}`;
    }
}

class Manager extends Employee {
    constructor(name, id, department, teamSize) {
        super(name, id, department);
        this.teamSize = teamSize;
        this.salary = 80000;
    }
    
    manage() {
        return `${this.name} manages a team of ${this.teamSize}.`;
    }
    
    getInfo() {
        return `${super.getInfo()} - Manager (Team: ${this.teamSize})`;
    }
}

class Developer extends Employee {
    constructor(name, id, department, programmingLanguage) {
        super(name, id, department);
        this.programmingLanguage = programmingLanguage;
        this.salary = 70000;
    }
    
    code() {
        return `${this.name} is coding in ${this.programmingLanguage}.`;
    }
    
    getInfo() {
        return `${super.getInfo()} - Developer (${this.programmingLanguage})`;
    }
}

class SeniorDeveloper extends Developer {
    constructor(name, id, department, programmingLanguage, experience) {
        super(name, id, department, programmingLanguage);
        this.experience = experience;
        this.salary = 90000;
    }
    
    mentor() {
        return `${this.name} mentors junior developers.`;
    }
    
    getInfo() {
        return `${super.getInfo()} - Senior (${this.experience} years)`;
    }
}

const manager = new Manager('Alice', 'M001', 'Engineering', 5);
const developer = new Developer('Bob', 'D001', 'Engineering', 'JavaScript');
const seniorDev = new SeniorDeveloper('Charlie', 'D002', 'Engineering', 'JavaScript', 5);

console.log('Manager:', manager.getInfo());
console.log('Developer:', developer.getInfo());
console.log('Senior Developer:', seniorDev.getInfo());

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Inheritance</h4>
        <p><strong>Class Inheritance:</strong> class Child extends Parent</p>
        <p><strong>super():</strong> Call parent constructor</p>
        <p><strong>Method Overriding:</strong> Redefine parent methods</p>
        <p><strong>instanceof:</strong> Check inheritance chain</p>
        <p><strong>Examples:</strong></p>
        <ul>
            <li>Dog: ${dog.speak()}</li>
            <li>Cat: ${cat.speak()}</li>
            <li>Sports Car: ${sportsCar.race()}</li>
        </ul>
    `;
    domOutput.appendChild(demoDiv);
}

console.log('Inheritance examples completed');

