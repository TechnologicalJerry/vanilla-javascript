/*
Topic: The 'this' Keyword
Description: 'this' refers to the object that is executing the current function.
Its value depends on how the function is called, not where it's defined.
*/

// Example 1: 'this' in Global Context
console.log('=== Example 1: "this" in Global Context ===');

console.log('Global this (in browser):', typeof window !== 'undefined' ? window : global);
console.log('this === window:', typeof window !== 'undefined' ? this === window : 'N/A');

// Example 2: 'this' in Object Methods
console.log('\n=== Example 2: "this" in Object Methods ===');

const person = {
    name: 'John',
    age: 30,
    
    // Regular method - 'this' refers to person
    greet: function() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
    },
    
    // Shorthand method - same behavior
    introduce() {
        return `Hi, my name is ${this.name}.`;
    },
    
    // Arrow function - 'this' refers to outer scope
    arrowGreet: () => {
        // this.name would be undefined here
        return 'Hello from arrow function';
    }
};

console.log(person.greet());
console.log(person.introduce());
console.log(person.arrowGreet());

// Example 3: 'this' Binding Issues
console.log('\n=== Example 3: "this" Binding Issues ===');

const car = {
    brand: 'Toyota',
    model: 'Camry',
    getInfo: function() {
        return `${this.brand} ${this.model}`;
    }
};

console.log('Direct call:', car.getInfo()); // Works

// Losing 'this' context
const getInfoRef = car.getInfo;
// console.log(getInfoRef()); // Error: Cannot read property 'brand' of undefined

// Solutions:
// 1. bind()
const boundGetInfo = car.getInfo.bind(car);
console.log('With bind:', boundGetInfo());

// 2. call()
console.log('With call:', car.getInfo.call(car));

// 3. apply()
console.log('With apply:', car.getInfo.apply(car));

// Example 4: 'this' in Event Handlers
console.log('\n=== Example 4: "this" in Event Handlers ===');

const button = {
    text: 'Click me',
    clicks: 0,
    
    // Traditional function - 'this' refers to button
    handleClick: function() {
        this.clicks++;
        console.log(`Button clicked ${this.clicks} times. Text: ${this.text}`);
    },
    
    // Arrow function - 'this' refers to outer scope
    handleClickArrow: () => {
        // this.clicks would be undefined
        console.log('Arrow function - this context lost');
    }
};

// Simulate button click
button.handleClick();
button.handleClick();

// Example 5: 'this' with call, apply, and bind
console.log('\n=== Example 5: call, apply, and bind ===');

function introduce(greeting, punctuation) {
    return `${greeting}, I'm ${this.name}${punctuation}`;
}

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

// call() - arguments passed individually
console.log(introduce.call(person1, 'Hello', '!'));
console.log(introduce.call(person2, 'Hi', '.'));

// apply() - arguments passed as array
console.log(introduce.apply(person1, ['Hey', '!']));
console.log(introduce.apply(person2, ['Yo', '?']));

// bind() - creates new function with bound 'this'
const introduceAlice = introduce.bind(person1);
console.log(introduceAlice('Hello', '!'));

const introduceBob = introduce.bind(person2, 'Hi'); // Can also pre-fill arguments
console.log(introduceBob('!'));

// Example 6: Real-world Example - Calculator
console.log('\n=== Example 6: Calculator with "this" ===');

const calculator = {
    value: 0,
    
    add(num) {
        this.value += num;
        return this; // Return this for method chaining
    },
    
    subtract(num) {
        this.value -= num;
        return this;
    },
    
    multiply(num) {
        this.value *= num;
        return this;
    },
    
    divide(num) {
        if (num !== 0) {
            this.value /= num;
        }
        return this;
    },
    
    getValue() {
        return this.value;
    },
    
    reset() {
        this.value = 0;
        return this;
    }
};

// Method chaining
const result = calculator
    .add(10)
    .multiply(3)
    .subtract(5)
    .divide(2)
    .getValue();

console.log('Calculator result:', result);

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>The 'this' Keyword</h4>
        <p><strong>Object Method:</strong> ${person.greet()}</p>
        <p><strong>With call:</strong> ${introduce.call(person1, 'Hello', '!')}</p>
        <p><strong>With bind:</strong> ${boundGetInfo()}</p>
        <p><strong>Calculator:</strong> ${calculator.reset().add(10).multiply(3).getValue()}</p>
        <p><strong>Key Points:</strong></p>
        <ul>
            <li>Regular functions: 'this' depends on how function is called</li>
            <li>Arrow functions: 'this' is lexically bound (from outer scope)</li>
            <li>Methods: 'this' refers to the object</li>
            <li>call/apply/bind: explicitly set 'this'</li>
        </ul>
    `;
    domOutput.appendChild(demoDiv);
}

