/*
Topic: ES6 Modules - Import
Description: This file demonstrates how to import from other modules.
Shows named imports, default imports, and namespace imports.
*/

// Named imports
import { add, subtract, multiply, divide, PI, E, Calculator } from './math.js';

// Default import
import power from './math.js';

// Import with alias
import { add as addNumbers, subtract as subtractNumbers } from './math.js';

// Namespace import (import everything)
// import * as MathUtils from './math.js';

console.log('=== Example 1: Named Imports ===');
console.log('Add:', add(5, 3));
console.log('Subtract:', subtract(10, 4));
console.log('Multiply:', multiply(6, 7));
console.log('Divide:', divide(20, 4));
console.log('PI:', PI);
console.log('E:', E);

console.log('\n=== Example 2: Default Import ===');
console.log('Power:', power(2, 8));

console.log('\n=== Example 3: Aliased Imports ===');
console.log('Add (aliased):', addNumbers(10, 5));
console.log('Subtract (aliased):', subtractNumbers(20, 8));

console.log('\n=== Example 4: Class Import ===');
const calc = new Calculator();
console.log('Calculator add:', calc.add(15, 25));
console.log('Calculator subtract:', calc.subtract(50, 20));
console.log('History:', calc.getHistory());

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>ES6 Modules</h4>
        <p><strong>Named Exports:</strong> export function add() {}</p>
        <p><strong>Default Export:</strong> export default function() {}</p>
        <p><strong>Named Import:</strong> import { add } from './math.js'</p>
        <p><strong>Default Import:</strong> import power from './math.js'</p>
        <p><strong>Alias Import:</strong> import { add as addNumbers } from './math.js'</p>
        <p><strong>Namespace Import:</strong> import * as MathUtils from './math.js'</p>
        <p><strong>Results:</strong></p>
        <ul>
            <li>Add(5, 3) = ${add(5, 3)}</li>
            <li>Subtract(10, 4) = ${subtract(10, 4)}</li>
            <li>Multiply(6, 7) = ${multiply(6, 7)}</li>
            <li>Divide(20, 4) = ${divide(20, 4)}</li>
            <li>Power(2, 8) = ${power(2, 8)}</li>
            <li>PI = ${PI}</li>
        </ul>
    `;
    domOutput.appendChild(demoDiv);
}

console.log('Module examples loaded');

