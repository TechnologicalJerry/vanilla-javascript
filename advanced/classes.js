/*
Topic: ES6 Classes
Description: ES6 classes provide a cleaner syntax for creating objects and
handling inheritance. They are syntactic sugar over JavaScript's prototype-based inheritance.
*/

// Example 1: Basic Class
console.log('=== Example 1: Basic Class ===');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
    }
    
    getInfo() {
        return `${this.name} (${this.age})`;
    }
}

const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);

console.log('Person 1:', person1.greet());
console.log('Person 2:', person2.getInfo());

// Example 2: Class with Getters and Setters
console.log('\n=== Example 2: Getters and Setters ===');

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    
    get width() {
        return this._width;
    }
    
    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            throw new Error('Width must be positive');
        }
    }
    
    get height() {
        return this._height;
    }
    
    set height(value) {
        if (value > 0) {
            this._height = value;
        } else {
            throw new Error('Height must be positive');
        }
    }
    
    get area() {
        return this._width * this._height;
    }
    
    get perimeter() {
        return 2 * (this._width + this._height);
    }
}

const rect = new Rectangle(10, 5);
console.log('Area:', rect.area);
console.log('Perimeter:', rect.perimeter);
rect.width = 15;
console.log('New area:', rect.area);

// Example 3: Static Methods
console.log('\n=== Example 3: Static Methods ===');

class MathUtils {
    static add(a, b) {
        return a + b;
    }
    
    static subtract(a, b) {
        return a - b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static PI = 3.14159;
}

console.log('Static add:', MathUtils.add(5, 3));
console.log('Static PI:', MathUtils.PI);

// Example 4: Inheritance
console.log('\n=== Example 4: Inheritance ===');

class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} makes a sound.`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks!`;
    }
    
    getInfo() {
        return `${this.name} is a ${this.breed}.`;
    }
}

const dog = new Dog('Buddy', 'Golden Retriever');
console.log('Dog speaks:', dog.speak());
console.log('Dog info:', dog.getInfo());
console.log('Is Animal?', dog instanceof Animal);
console.log('Is Dog?', dog instanceof Dog);

// Example 5: Private Fields (ES2022)
console.log('\n=== Example 5: Private Fields ===');

class BankAccount {
    #balance = 0; // Private field
    
    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return this.#balance;
        }
        throw new Error('Amount must be positive');
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return this.#balance;
        }
        throw new Error('Insufficient funds or invalid amount');
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log('Balance:', account.getBalance());
// console.log(account.#balance); // SyntaxError - private field

// Example 6: Method Overriding
console.log('\n=== Example 6: Method Overriding ===');

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

class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Square extends Shape {
    constructor(side) {
        super('Square');
        this.side = side;
    }
    
    getArea() {
        return this.side ** 2;
    }
}

const circle = new Circle(5);
const square = new Square(4);

console.log('Circle:', circle.getInfo());
console.log('Square:', square.getInfo());

// Example 7: Real-world Example - User Management
console.log('\n=== Example 7: User Management ===');

class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.createdAt = new Date();
        this.isActive = true;
    }
    
    activate() {
        this.isActive = true;
    }
    
    deactivate() {
        this.isActive = false;
    }
    
    getInfo() {
        return {
            username: this.username,
            email: this.email,
            isActive: this.isActive,
            createdAt: this.createdAt
        };
    }
}

class Admin extends User {
    constructor(username, email, permissions = []) {
        super(username, email);
        this.permissions = permissions;
        this.role = 'admin';
    }
    
    addPermission(permission) {
        if (!this.permissions.includes(permission)) {
            this.permissions.push(permission);
        }
    }
    
    removePermission(permission) {
        this.permissions = this.permissions.filter(p => p !== permission);
    }
    
    getInfo() {
        return {
            ...super.getInfo(),
            role: this.role,
            permissions: this.permissions
        };
    }
}

const admin = new Admin('admin', 'admin@example.com', ['read', 'write']);
admin.addPermission('delete');
console.log('Admin info:', admin.getInfo());

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>ES6 Classes</h4>
        <p><strong>Features:</strong></p>
        <ul>
            <li>constructor() - Initialize instance</li>
            <li>Methods - Instance methods</li>
            <li>Getters/Setters - Property accessors</li>
            <li>Static - Class-level methods</li>
            <li>extends - Inheritance</li>
            <li>super - Call parent</li>
            <li>Private fields (#) - Encapsulation</li>
        </ul>
        <p><strong>Examples:</strong></p>
        <ul>
            <li>Person: ${person1.getInfo()}</li>
            <li>Rectangle Area: ${rect.area}</li>
            <li>Dog: ${dog.getInfo()}</li>
        </ul>
    `;
    domOutput.appendChild(demoDiv);
}

console.log('Class examples completed');

