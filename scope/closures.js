/*
Topic: Closures
Description: A closure is a function that has access to variables in its outer
(enclosing) lexical scope, even after the outer function has returned.
Closures are created every time a function is created.
*/

// Example 1: Basic Closure
console.log('=== Example 1: Basic Closure ===');

function outerFunction(outerVar) {
    // Inner function has access to outerVar
    function innerFunction(innerVar) {
        console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    }
    return innerFunction;
}

const closure = outerFunction('Hello');
closure('World'); // Still has access to 'Hello'

// Example 2: Counter with Closure
console.log('\n=== Example 2: Counter with Closure ===');

function createCounter() {
    let count = 0; // Private variable
    
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count;
        },
        reset() {
            count = 0;
            return count;
        }
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log('Counter 1:', counter1.increment()); // 1
console.log('Counter 1:', counter1.increment()); // 2
console.log('Counter 2:', counter2.increment()); // 1 (independent)
console.log('Counter 1 count:', counter1.getCount()); // 2
console.log('Counter 2 count:', counter2.getCount()); // 1

// Example 3: Private Variables with Closure
console.log('\n=== Example 3: Private Variables ===');

function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private
    
    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                return `Deposited $${amount}. New balance: $${balance}`;
            }
            return 'Invalid deposit amount';
        },
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return `Withdrew $${amount}. New balance: $${balance}`;
            }
            return 'Insufficient funds or invalid amount';
        },
        getBalance() {
            return `Current balance: $${balance}`;
        }
        // No way to directly access or modify balance from outside
    };
}

const account = createBankAccount(1000);
console.log(account.getBalance());
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.getBalance());
// console.log(account.balance); // undefined - balance is private

// Example 4: Closure in Loops
console.log('\n=== Example 4: Closure in Loops ===');

// Problem: All functions reference the same i
const functions1 = [];
for (var i = 0; i < 3; i++) {
    functions1.push(function() {
        return i; // All return 3
    });
}
console.log('With var:', functions1.map(fn => fn())); // [3, 3, 3]

// Solution 1: Use let
const functions2 = [];
for (let j = 0; j < 3; j++) {
    functions2.push(function() {
        return j; // Returns 0, 1, 2
    });
}
console.log('With let:', functions2.map(fn => fn())); // [0, 1, 2]

// Solution 2: IIFE
const functions3 = [];
for (var k = 0; k < 3; k++) {
    functions3.push((function(index) {
        return function() {
            return index; // Each closure has its own index
        };
    })(k));
}
console.log('With IIFE:', functions3.map(fn => fn())); // [0, 1, 2]

// Example 5: Real-world Example - Function Factory
console.log('\n=== Example 5: Function Factory ===');

function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log('Double 5:', double(5));
console.log('Triple 5:', triple(5));
console.log('Quadruple 5:', quadruple(5));

// Advanced: Memoization with Closure
function memoize(fn) {
    const cache = {}; // Private cache
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log('Cache hit!');
            return cache[key];
        }
        console.log('Computing...');
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const expensiveFunction = memoize(function(n) {
    return n * n;
});

console.log('First call:', expensiveFunction(5));
console.log('Second call:', expensiveFunction(5)); // Uses cache

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Closures</h4>
        <p><strong>Counter:</strong></p>
        <p>Counter 1: ${counter1.getCount()}</p>
        <p>Counter 2: ${counter2.getCount()}</p>
        <p><strong>Bank Account:</strong></p>
        <p>${account.getBalance()}</p>
        <p><strong>Multipliers:</strong></p>
        <p>Double(5) = ${double(5)}</p>
        <p>Triple(5) = ${triple(5)}</p>
        <p><strong>Key Concept:</strong> Closures allow functions to "remember" their lexical environment!</p>
    `;
    domOutput.appendChild(demoDiv);
}

