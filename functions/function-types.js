/*
Topic: Function Types
Description: JavaScript supports multiple ways to define functions:
1. Function Declaration
2. Function Expression
3. Arrow Functions
4. Function Constructor (rarely used)
*/

// Example 1: Function Declaration
console.log('=== Example 1: Function Declaration ===');

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('John'));

// Function declarations are hoisted
console.log(hoistedFunction()); // Works even before declaration

function hoistedFunction() {
    return 'I was hoisted!';
}

// Example 2: Function Expression
console.log('\n=== Example 2: Function Expression ===');

const multiply = function(a, b) {
    return a * b;
};

console.log('Multiply 5 * 3:', multiply(5, 3));

// Named function expression
const divide = function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
};

console.log('Divide 10 / 2:', divide(10, 2));

// Example 3: Arrow Functions
console.log('\n=== Example 3: Arrow Functions ===');

const add = (a, b) => a + b;
console.log('Add 2 + 3:', add(2, 3));

const square = x => x * x;
console.log('Square of 5:', square(5));

const greetArrow = name => `Hello, ${name}!`;
console.log(greetArrow('Alice'));

// Arrow function with multiple statements
const processNumber = num => {
    const doubled = num * 2;
    const squared = doubled * doubled;
    return squared;
};
console.log('Process 3:', processNumber(3));

// Example 4: Real-world Example - Calculator Functions
console.log('\n=== Example 4: Calculator Functions ===');

const calculator = {
    // Function declaration (method)
    add: function(a, b) {
        return a + b;
    },
    
    // Arrow function (method)
    subtract: (a, b) => a - b,
    
    // Shorthand method (ES6)
    multiply(a, b) {
        return a * b;
    },
    
    // Arrow function with default parameter
    divide: (a, b = 1) => a / b,
    
    // Function expression with validation
    power: function(base, exponent) {
        if (exponent === 0) return 1;
        let result = 1;
        for (let i = 0; i < Math.abs(exponent); i++) {
            result *= base;
        }
        return exponent < 0 ? 1 / result : result;
    }
};

console.log('Calculator Results:');
console.log('10 + 5 =', calculator.add(10, 5));
console.log('10 - 5 =', calculator.subtract(10, 5));
console.log('10 * 5 =', calculator.multiply(10, 5));
console.log('10 / 5 =', calculator.divide(10, 5));
console.log('2 ^ 3 =', calculator.power(2, 3));
console.log('2 ^ -2 =', calculator.power(2, -2));

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Function Types</h4>
        <p><strong>Function Declaration:</strong> ${greet('World')}</p>
        <p><strong>Function Expression:</strong> 5 * 3 = ${multiply(5, 3)}</p>
        <p><strong>Arrow Function:</strong> 2 + 3 = ${add(2, 3)}</p>
        <p><strong>Calculator:</strong></p>
        <ul>
            <li>10 + 5 = ${calculator.add(10, 5)}</li>
            <li>10 - 5 = ${calculator.subtract(10, 5)}</li>
            <li>10 * 5 = ${calculator.multiply(10, 5)}</li>
            <li>10 / 5 = ${calculator.divide(10, 5)}</li>
        </ul>
    `;
    domOutput.appendChild(demoDiv);
}

