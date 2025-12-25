/*
Topic: Variables
Description: Variables are containers for storing data values.
JavaScript has three ways to declare variables: var, let, and const.
*/

// Example 1: var, let, and const
console.log('=== Example 1: Variable Declaration ===');

var oldWay = 'I am var (function-scoped)';
let modernWay = 'I am let (block-scoped)';
const constantValue = 'I am const (cannot be reassigned)';

console.log(oldWay);
console.log(modernWay);
console.log(constantValue);

// Demonstrating scope difference
if (true) {
    var varExample = 'var is accessible outside block';
    let letExample = 'let is block-scoped';
    const constExample = 'const is also block-scoped';
}

console.log('var outside block:', varExample);
// console.log(letExample); // Would cause ReferenceError
// console.log(constExample); // Would cause ReferenceError

// Example 2: Variable Hoisting
console.log('\n=== Example 2: Variable Hoisting ===');

console.log('hoistedVar:', hoistedVar); // undefined (not ReferenceError)
var hoistedVar = 'I was hoisted';

// console.log(hoistedLet); // Would cause ReferenceError
let hoistedLet = 'I was not hoisted';

// Example 3: Real-world usage - User Profile
console.log('\n=== Example 3: Real-world Example - User Profile ===');

let userName = 'John Doe';
let userAge = 28;
const userId = 'USR-12345';
let isActive = true;

console.log('User Profile:');
console.log('Name:', userName);
console.log('Age:', userAge);
console.log('ID:', userId);
console.log('Active:', isActive);

// Update user status
isActive = false;
console.log('Updated Status:', isActive);

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Variable Examples</h4>
        <p><strong>var:</strong> ${oldWay}</p>
        <p><strong>let:</strong> ${modernWay}</p>
        <p><strong>const:</strong> ${constantValue}</p>
        <p><strong>User Profile:</strong></p>
        <ul>
            <li>Name: ${userName}</li>
            <li>Age: ${userAge}</li>
            <li>ID: ${userId}</li>
            <li>Active: ${isActive}</li>
        </ul>
    `;
    domOutput.appendChild(demoDiv);
}

