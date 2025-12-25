/*
Topic: Arrow Functions
Description: Arrow functions provide a concise syntax for writing functions.
Key differences: no 'this' binding, no arguments object, cannot be used as constructors.
*/

// Example 1: Basic Arrow Function Syntax
console.log('=== Example 1: Basic Arrow Function Syntax ===');

// Traditional function
function traditionalAdd(a, b) {
    return a + b;
}

// Arrow function equivalent
const arrowAdd = (a, b) => a + b;

console.log('Traditional:', traditionalAdd(5, 3));
console.log('Arrow:', arrowAdd(5, 3));

// Single parameter - parentheses optional
const square = x => x * x;
console.log('Square of 4:', square(4));

// No parameters - parentheses required
const getGreeting = () => 'Hello, World!';
console.log(getGreeting());

// Multiple statements - braces required
const processNumber = num => {
    const doubled = num * 2;
    return doubled * doubled;
};
console.log('Process 5:', processNumber(5));

// Example 2: Arrow Functions with Arrays
console.log('\n=== Example 2: Arrow Functions with Arrays ===');

const numbers = [1, 2, 3, 4, 5];

// Map
const doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled);

// Filter
const evens = numbers.filter(n => n % 2 === 0);
console.log('Evens:', evens);

// Reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('Sum:', sum);

// Find
const found = numbers.find(n => n > 3);
console.log('First > 3:', found);

// Example 3: 'this' Binding Difference
console.log('\n=== Example 3: "this" Binding ===');

const person = {
    name: 'John',
    
    // Traditional function - 'this' refers to person
    traditionalGreet: function() {
        return `Hello, I'm ${this.name}`;
    },
    
    // Arrow function - 'this' refers to outer scope (global/window)
    arrowGreet: () => {
        // this.name would be undefined here
        return `Hello from arrow function`;
    },
    
    // Arrow function in method - still no 'this' binding
    introduce: function() {
        // Traditional function inside method
        setTimeout(function() {
            console.log(`Traditional: I'm ${this.name}`); // this.name is undefined
        }, 100);
        
        // Arrow function preserves 'this'
        setTimeout(() => {
            console.log(`Arrow: I'm ${this.name}`); // this.name is 'John'
        }, 200);
    }
};

console.log(person.traditionalGreet());
console.log(person.arrowGreet());
person.introduce();

// Example 4: Real-world Example - Data Processing
console.log('\n=== Example 4: Data Processing ===');

const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 2, name: 'Book', price: 15, category: 'Education' },
    { id: 3, name: 'Phone', price: 699, category: 'Electronics' },
    { id: 4, name: 'Pen', price: 2, category: 'Office' }
];

// Chain arrow functions
const expensiveElectronics = products
    .filter(p => p.category === 'Electronics')
    .filter(p => p.price > 500)
    .map(p => ({ name: p.name, price: p.price }))
    .sort((a, b) => b.price - a.price);

console.log('Expensive Electronics:', expensiveElectronics);

// Calculate total value
const totalValue = products.reduce((total, p) => total + p.price, 0);
console.log('Total Value:', totalValue);

// Group by category
const groupedByCategory = products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
        groups[category] = [];
    }
    groups[category].push(product);
    return groups;
}, {});

console.log('Grouped by Category:', groupedByCategory);

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Arrow Functions</h4>
        <p><strong>Basic:</strong> 5 + 3 = ${arrowAdd(5, 3)}</p>
        <p><strong>Square:</strong> 4² = ${square(4)}</p>
        <p><strong>Array Operations:</strong></p>
        <p>Doubled: [${doubled.join(', ')}]</p>
        <p>Evens: [${evens.join(', ')}]</p>
        <p>Sum: ${sum}</p>
        <p><strong>Expensive Electronics:</strong></p>
        <ul>
            ${expensiveElectronics.map(p => `<li>${p.name}: $${p.price}</li>`).join('')}
        </ul>
        <p><strong>Total Value:</strong> $${totalValue}</p>
    `;
    domOutput.appendChild(demoDiv);
}

