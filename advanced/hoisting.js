/*
Topic: Hoisting
Description: Hoisting is JavaScript's behavior of moving declarations to the top.
var and function declarations are hoisted, let/const are not (temporal dead zone).
*/

// Example 1: Variable Hoisting
console.log('=== Example 1: Variable Hoisting ===');

// var is hoisted (but initialized as undefined)
console.log('hoistedVar:', hoistedVar); // undefined (not ReferenceError)
var hoistedVar = 'I was hoisted';

// let/const are hoisted but in temporal dead zone
// console.log(hoistedLet); // ReferenceError
let hoistedLet = 'I was hoisted but in TDZ';

// Example 2: Function Hoisting
console.log('\n=== Example 2: Function Hoisting ===');

// Function declaration is hoisted
console.log('Hoisted function:', hoistedFunction()); // Works!

function hoistedFunction() {
    return 'I was hoisted!';
}

// Function expression is NOT hoisted
// console.log(hoistedExpression()); // TypeError
var hoistedExpression = function() {
    return 'I was not hoisted';
};

// Arrow function is NOT hoisted
// console.log(hoistedArrow()); // TypeError
var hoistedArrow = () => 'I was not hoisted';

// Example 3: Temporal Dead Zone
console.log('\n=== Example 3: Temporal Dead Zone ===');

// TDZ for let
// console.log(tdzLet); // ReferenceError
let tdzLet = 'In TDZ until here';

// TDZ for const
// console.log(tdzConst); // ReferenceError
const tdzConst = 'In TDZ until here';

// After declaration, works fine
console.log('After declaration:', tdzLet, tdzConst);

// Example 4: Hoisting Order
console.log('\n=== Example 4: Hoisting Order ===');

console.log('Value:', hoistedValue); // undefined (var hoisted)
var hoistedValue = 'Assigned value';

// What actually happens:
// var hoistedValue; // Declaration hoisted
// console.log('Value:', hoistedValue); // undefined
// hoistedValue = 'Assigned value'; // Assignment stays in place

// Example 5: Function vs Variable Hoisting
console.log('\n=== Example 5: Function vs Variable ===');

// Function declaration takes precedence over variable
console.log('Type of hoisted:', typeof hoisted); // 'function' (not 'undefined')

var hoisted = 'I am a variable';

function hoisted() {
    return 'I am a function';
}

// Example 6: Class Hoisting
console.log('\n=== Example 6: Class Hoisting ===');

// Classes are NOT hoisted
// const instance = new HoistedClass(); // ReferenceError

class HoistedClass {
    constructor() {
        this.value = 'I am a class';
    }
}

// After declaration, works
const instance = new HoistedClass();
console.log('Class instance:', instance.value);

// Example 7: Best Practices
console.log('\n=== Example 7: Best Practices ===');

// Bad: Relying on hoisting
function badExample() {
    console.log(value); // undefined
    var value = 'assigned later';
}

// Good: Declare at top
function goodExample() {
    let value = 'assigned at top';
    console.log(value); // 'assigned at top'
}

badExample();
goodExample();

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Hoisting</h4>
        <p><strong>What is Hoisted:</strong></p>
        <ul>
            <li>var declarations (initialized as undefined)</li>
            <li>function declarations (fully hoisted)</li>
        </ul>
        <p><strong>What is NOT Hoisted:</strong></p>
        <ul>
            <li>let/const (in Temporal Dead Zone)</li>
            <li>function expressions</li>
            <li>arrow functions</li>
            <li>classes</li>
        </ul>
        <p><strong>Best Practice:</strong> Always declare variables at the top!</p>
    `;
    domOutput.appendChild(demoDiv);
}

console.log('Hoisting examples completed');

