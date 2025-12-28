/*
Topic: Prototypes
Description: JavaScript uses prototypal inheritance. Every object has a prototype
from which it can inherit properties and methods. Understanding prototypes is key.
*/

// Example 1: Prototype Chain
console.log('=== Example 1: Prototype Chain ===');

const obj = {};
console.log('Object prototype:', Object.getPrototypeOf(obj));
console.log('Is Object.prototype?', Object.getPrototypeOf(obj) === Object.prototype);

// Adding to prototype
Object.prototype.customMethod = function() {
    return 'Custom method from Object.prototype';
};

console.log('Custom method:', obj.customMethod());

// Example 2: Function Prototypes
console.log('\n=== Example 2: Function Prototypes ===');

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add method to prototype
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
};

Person.prototype.getInfo = function() {
    return `${this.name} (${this.age})`;
};

const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);

console.log('Person 1:', person1.greet());
console.log('Person 2:', person2.greet());
console.log('Same prototype?', Object.getPrototypeOf(person1) === Person.prototype);

// Example 3: Prototype Inheritance
console.log('\n=== Example 3: Prototype Inheritance ===');

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return `${this.name} makes a sound.`;
};

function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}

// Set Dog prototype to Animal prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    return `${this.name} barks!`;
};

const dog = new Dog('Buddy', 'Golden Retriever');
console.log('Dog speaks:', dog.speak());
console.log('Dog barks:', dog.bark());
console.log('Is Animal?', dog instanceof Animal);
console.log('Is Dog?', dog instanceof Dog);

// Example 4: Object.create()
console.log('\n=== Example 4: Object.create() ===');

const animal = {
    speak() {
        return `${this.name} makes a sound.`;
    }
};

const cat = Object.create(animal);
cat.name = 'Whiskers';
cat.meow = function() {
    return `${this.name} meows!`;
};

console.log('Cat speaks:', cat.speak());
console.log('Cat meows:', cat.meow());
console.log('Prototype:', Object.getPrototypeOf(cat) === animal);

// Example 5: hasOwnProperty vs in
console.log('\n=== Example 5: hasOwnProperty vs in ===');

const parent = {
    inherited: 'I am inherited'
};

const child = Object.create(parent);
child.own = 'I am own property';

console.log('hasOwnProperty("own"):', child.hasOwnProperty('own')); // true
console.log('hasOwnProperty("inherited"):', child.hasOwnProperty('inherited')); // false
console.log('"own" in child:', 'own' in child); // true
console.log('"inherited" in child:', 'inherited' in child); // true

// Example 6: Modern Class Syntax (ES6)
console.log('\n=== Example 6: Modern Class Syntax ===');

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    
    start() {
        return `${this.brand} starts.`;
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    
    drive() {
        return `${this.brand} ${this.model} is driving.`;
    }
}

const car = new Car('Toyota', 'Camry');
console.log('Car starts:', car.start());
console.log('Car drives:', car.drive());
console.log('Is Vehicle?', car instanceof Vehicle);
console.log('Is Car?', car instanceof Car);

// Example 7: Prototype Methods
console.log('\n=== Example 7: Prototype Methods ===');

Array.prototype.last = function() {
    return this[this.length - 1];
};

Array.prototype.first = function() {
    return this[0];
};

const arr = [1, 2, 3, 4, 5];
console.log('First:', arr.first());
console.log('Last:', arr.last());

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Prototypes</h4>
        <p><strong>Prototype Chain:</strong> Object → Prototype → null</p>
        <p><strong>Inheritance:</strong> Objects inherit from their prototype</p>
        <p><strong>Methods:</strong></p>
        <ul>
            <li>Object.getPrototypeOf() - Get prototype</li>
            <li>Object.create() - Create with prototype</li>
            <li>hasOwnProperty() - Check own property</li>
            <li>instanceof - Check inheritance</li>
        </ul>
        <p><strong>Modern Way:</strong> Use ES6 classes (syntactic sugar for prototypes)</p>
    `;
    domOutput.appendChild(demoDiv);
}

console.log('Prototype examples completed');

