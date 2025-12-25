/*
Topic: Scope Types
Description: Scope determines the accessibility of variables, functions, and objects.
JavaScript has: Global Scope, Function Scope, Block Scope (let/const)
*/

// Example 1: Global Scope
console.log('=== Example 1: Global Scope ===');

var globalVar = 'I am global';
let globalLet = 'I am also global';
const globalConst = 'I am global too';

function checkGlobalScope() {
    console.log('Inside function - globalVar:', globalVar);
    console.log('Inside function - globalLet:', globalLet);
    console.log('Inside function - globalConst:', globalConst);
}

checkGlobalScope();
console.log('Outside function - globalVar:', globalVar);

// Example 2: Function Scope
console.log('\n=== Example 2: Function Scope ===');

function functionScopeDemo() {
    var functionScopedVar = 'I am function-scoped';
    let functionScopedLet = 'I am also function-scoped';
    
    if (true) {
        var stillFunctionScoped = 'var is function-scoped, not block-scoped';
        let blockScoped = 'I am block-scoped';
    }
    
    console.log('functionScopedVar:', functionScopedVar);
    console.log('functionScopedLet:', functionScopedLet);
    console.log('stillFunctionScoped:', stillFunctionScoped); // Accessible!
    // console.log(blockScoped); // ReferenceError - not accessible
}

functionScopeDemo();
// console.log(functionScopedVar); // ReferenceError - not accessible outside

// Example 3: Block Scope
console.log('\n=== Example 3: Block Scope ===');

if (true) {
    var varInBlock = 'var escapes block';
    let letInBlock = 'let stays in block';
    const constInBlock = 'const stays in block';
}

console.log('varInBlock:', varInBlock); // Accessible
// console.log(letInBlock); // ReferenceError
// console.log(constInBlock); // ReferenceError

// Loop scope
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log('var i:', i), 100); // Prints 3, 3, 3
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log('let j:', j), 200); // Prints 0, 1, 2
}

// Example 4: Real-world Example - Scope in Event Handlers
console.log('\n=== Example 4: Scope in Event Handlers ===');

function createButtons() {
    const buttons = [];
    
    // Problem: var creates function-scoped variable
    for (var i = 0; i < 3; i++) {
        buttons.push({
            id: i,
            onClick: function() {
                console.log('Button clicked (var):', i); // All print 3
            }
        });
    }
    
    // Solution 1: Use let
    const buttonsWithLet = [];
    for (let k = 0; k < 3; k++) {
        buttonsWithLet.push({
            id: k,
            onClick: function() {
                console.log('Button clicked (let):', k); // Prints 0, 1, 2
            }
        });
    }
    
    // Solution 2: IIFE
    const buttonsWithIIFE = [];
    for (var m = 0; m < 3; m++) {
        (function(index) {
            buttonsWithIIFE.push({
                id: index,
                onClick: function() {
                    console.log('Button clicked (IIFE):', index);
                }
            });
        })(m);
    }
    
    return { buttons, buttonsWithLet, buttonsWithIIFE };
}

const buttonSet = createButtons();
console.log('Button set created with different scope solutions');

// Example 5: Lexical Scope
console.log('\n=== Example 5: Lexical Scope ===');

const outerVar = 'I am outer';

function outerFunction() {
    const middleVar = 'I am middle';
    
    function innerFunction() {
        const innerVar = 'I am inner';
        console.log('Inner can access:', outerVar, middleVar, innerVar);
    }
    
    innerFunction();
    // console.log(innerVar); // ReferenceError - innerVar not accessible
}

outerFunction();

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Scope Types</h4>
        <p><strong>Global Scope:</strong> Variables accessible everywhere</p>
        <p><strong>Function Scope:</strong> var is function-scoped</p>
        <p><strong>Block Scope:</strong> let and const are block-scoped</p>
        <p><strong>Key Points:</strong></p>
        <ul>
            <li>var: function-scoped, hoisted, can be redeclared</li>
            <li>let: block-scoped, not hoisted, cannot be redeclared</li>
            <li>const: block-scoped, not hoisted, cannot be reassigned</li>
        </ul>
        <p><strong>Best Practice:</strong> Use let and const, avoid var!</p>
    `;
    domOutput.appendChild(demoDiv);
}

