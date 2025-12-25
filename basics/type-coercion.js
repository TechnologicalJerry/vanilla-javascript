/*
Topic: Type Coercion
Description: Type coercion is the automatic or implicit conversion of values
from one data type to another. JavaScript performs type coercion in various contexts.
*/

// Example 1: Implicit Type Coercion
console.log('=== Example 1: Implicit Type Coercion ===');

// String coercion
console.log('String + Number:', '5' + 3); // '53' (number coerced to string)
console.log('Number + String:', 5 + '3'); // '53' (number coerced to string)

// Number coercion
console.log('String - Number:', '10' - 5); // 5 (string coerced to number)
console.log('String * Number:', '5' * 2); // 10
console.log('String / Number:', '20' / 4); // 5

// Boolean coercion
console.log('Boolean in if:', !!'hello'); // true
console.log('Boolean in if:', !!''); // false
console.log('Boolean in if:', !!0); // false
console.log('Boolean in if:', !!1); // true

// Example 2: Truthy and Falsy Values
console.log('\n=== Example 2: Truthy and Falsy Values ===');

const falsyValues = [false, 0, -0, 0n, '', null, undefined, NaN];
const truthyValues = [true, 1, -1, 'hello', [], {}, function(){}];

console.log('Falsy Values:');
falsyValues.forEach(val => {
    console.log(`${val} is ${val ? 'truthy' : 'falsy'}`);
});

console.log('\nTruthy Values:');
truthyValues.forEach(val => {
    console.log(`${val} is ${val ? 'truthy' : 'falsy'}`);
});

// Example 3: Real-world Example - Form Input Handling
console.log('\n=== Example 3: Form Input Handling ===');

function processFormInput(input) {
    // Input comes as string from form
    const value = input.value || input; // Handle both DOM element and direct value
    
    // Coercion scenarios
    const asString = String(value);
    const asNumber = Number(value);
    const asBoolean = Boolean(value);
    
    // Check if it's a valid number
    const isValidNumber = !isNaN(asNumber) && value !== '';
    
    return {
        original: value,
        asString: asString,
        asNumber: isValidNumber ? asNumber : 'Invalid Number',
        asBoolean: asBoolean,
        type: typeof value
    };
}

// Simulate form inputs
const inputs = [
    { value: '42' },
    { value: 'hello' },
    { value: '0' },
    { value: '' },
    { value: 'true' }
];

inputs.forEach((input, index) => {
    console.log(`Input ${index + 1}:`, processFormInput(input));
});

// Common coercion pitfalls
console.log('\n=== Coercion Pitfalls ===');
console.log('[] + []:', [] + []); // '' (empty string)
console.log('[] + {}:', [] + {}); // '[object Object]'
console.log('{} + []:', {} + []); // 0 (in some contexts)
console.log('true + true:', true + true); // 2
console.log('null + 1:', null + 1); // 1
console.log('undefined + 1:', undefined + 1); // NaN

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Type Coercion Examples</h4>
        <p><strong>String Coercion:</strong></p>
        <p>'5' + 3 = '${'5' + 3}'</p>
        <p><strong>Number Coercion:</strong></p>
        <p>'10' - 5 = ${'10' - 5}</p>
        <p>'5' * 2 = ${'5' * 2}</p>
        <p><strong>Form Input Processing:</strong></p>
        <p>Input "42": Number = ${processFormInput({value: '42'}).asNumber}</p>
        <p>Input "hello": Number = ${processFormInput({value: 'hello'}).asNumber}</p>
        <p><strong>Best Practice:</strong> Use strict equality (===) to avoid coercion!</p>
    `;
    domOutput.appendChild(demoDiv);
}

