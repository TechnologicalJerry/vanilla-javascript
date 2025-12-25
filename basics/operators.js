/*
Topic: Operators
Description: JavaScript operators perform operations on values and variables.
Types: Arithmetic, Assignment, Comparison, Logical, Ternary, etc.
*/

// Example 1: Arithmetic Operators
console.log('=== Example 1: Arithmetic Operators ===');

let a = 10;
let b = 3;

console.log('Addition (a + b):', a + b);
console.log('Subtraction (a - b):', a - b);
console.log('Multiplication (a * b):', a * b);
console.log('Division (a / b):', a / b);
console.log('Modulus (a % b):', a % b);
console.log('Exponentiation (a ** b):', a ** b);

// Increment and Decrement
let counter = 5;
console.log('Original counter:', counter);
console.log('Pre-increment (++counter):', ++counter);
console.log('Post-increment (counter++):', counter++);
console.log('After post-increment:', counter);

// Example 2: Comparison Operators
console.log('\n=== Example 2: Comparison Operators ===');

const x = 5;
const y = '5';
const z = 10;

console.log('x == y (loose equality):', x == y);  // true (type coercion)
console.log('x === y (strict equality):', x === y); // false (no type coercion)
console.log('x != y (loose inequality):', x != y);  // false
console.log('x !== y (strict inequality):', x !== y); // true
console.log('x < z:', x < z);
console.log('x > z:', x > z);
console.log('x <= z:', x <= z);
console.log('x >= z:', x >= z);

// Example 3: Logical Operators - Real-world Example
console.log('\n=== Example 3: Logical Operators - Access Control ===');

function checkAccess(user) {
    const hasValidEmail = user.email && user.email.includes('@');
    const hasValidAge = user.age >= 18;
    const isVerified = user.verified === true;
    
    // AND operator - all conditions must be true
    const canAccess = hasValidEmail && hasValidAge && isVerified;
    
    // OR operator - at least one condition must be true
    const canViewBasic = hasValidEmail || hasValidAge;
    
    // NOT operator - inverts boolean
    const isBlocked = !user.isBlocked;
    
    return {
        fullAccess: canAccess,
        basicAccess: canViewBasic,
        notBlocked: isBlocked
    };
}

const user1 = {
    email: 'user@example.com',
    age: 25,
    verified: true,
    isBlocked: false
};

const user2 = {
    email: 'invalid-email',
    age: 16,
    verified: false,
    isBlocked: true
};

console.log('User 1 Access:', checkAccess(user1));
console.log('User 2 Access:', checkAccess(user2));

// Ternary Operator
const userStatus = user1.age >= 18 ? 'Adult' : 'Minor';
console.log('User 1 Status:', userStatus);

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Operators Demo</h4>
        <p><strong>Arithmetic:</strong></p>
        <p>10 + 3 = ${a + b}</p>
        <p>10 - 3 = ${a - b}</p>
        <p>10 * 3 = ${a * b}</p>
        <p>10 / 3 = ${(a / b).toFixed(2)}</p>
        <p>10 % 3 = ${a % b}</p>
        <p><strong>Comparison:</strong></p>
        <p>5 == '5': ${x == y} (loose)</p>
        <p>5 === '5': ${x === y} (strict)</p>
        <p><strong>Access Control:</strong></p>
        <p>User 1 Full Access: ${checkAccess(user1).fullAccess}</p>
        <p>User 2 Full Access: ${checkAccess(user2).fullAccess}</p>
    `;
    domOutput.appendChild(demoDiv);
}

