/*
Topic: Map, Filter, Reduce
Description: The three most important array methods for data transformation.
These are functional programming concepts that make code more declarative.
*/

// Example 1: Map - Transform Each Element
console.log('=== Example 1: Map ===');

const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled);

// Square each number
const squared = numbers.map(n => n ** 2);
console.log('Squared:', squared);

// Transform objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const names = users.map(user => user.name);
console.log('Names:', names);

const userInfo = users.map(user => `${user.name} (${user.age})`);
console.log('User info:', userInfo);

// Example 2: Filter - Select Elements
console.log('\n=== Example 2: Filter ===');

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get even numbers
const evens = nums.filter(n => n % 2 === 0);
console.log('Evens:', evens);

// Get numbers greater than 5
const greaterThan5 = nums.filter(n => n > 5);
console.log('Greater than 5:', greaterThan5);

// Filter objects
const products = [
    { name: 'Laptop', price: 999, inStock: true },
    { name: 'Phone', price: 699, inStock: false },
    { name: 'Tablet', price: 399, inStock: true }
];

const inStock = products.filter(p => p.inStock);
console.log('In stock:', inStock);

const expensive = products.filter(p => p.price > 500);
console.log('Expensive:', expensive);

// Example 3: Reduce - Accumulate Values
console.log('\n=== Example 3: Reduce ===');

// Sum all numbers
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('Sum:', sum);

// Product of all numbers
const product = numbers.reduce((acc, n) => acc * n, 1);
console.log('Product:', product);

// Find maximum
const max = numbers.reduce((acc, n) => n > acc ? n : acc, numbers[0]);
console.log('Max:', max);

// Count occurrences
const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
const count = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});
console.log('Word count:', count);

// Example 4: Chaining Map, Filter, Reduce
console.log('\n=== Example 4: Chaining ===');

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chain: filter evens -> square -> sum
const result = data
    .filter(n => n % 2 === 0)  // [2, 4, 6, 8, 10]
    .map(n => n * n)            // [4, 16, 36, 64, 100]
    .reduce((acc, n) => acc + n, 0); // 220

console.log('Filter evens -> Square -> Sum:', result);

// Real-world example: Process orders
const orders = [
    { id: 1, amount: 100, status: 'completed' },
    { id: 2, amount: 200, status: 'pending' },
    { id: 3, amount: 150, status: 'completed' },
    { id: 4, amount: 300, status: 'completed' },
    { id: 5, amount: 50, status: 'cancelled' }
];

const totalRevenue = orders
    .filter(order => order.status === 'completed')
    .map(order => order.amount)
    .reduce((sum, amount) => sum + amount, 0);

console.log('Total revenue from completed orders:', totalRevenue);

// Example 5: Advanced Reduce Patterns
console.log('\n=== Example 5: Advanced Reduce ===');

// Group by property
const people = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Los Angeles' },
    { name: 'Charlie', age: 25, city: 'New York' },
    { name: 'Diana', age: 30, city: 'Chicago' }
];

const byCity = people.reduce((groups, person) => {
    const city = person.city;
    if (!groups[city]) {
        groups[city] = [];
    }
    groups[city].push(person);
    return groups;
}, {});
console.log('Grouped by city:', byCity);

// Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log('Flattened:', flattened);

// Create object from array
const keyValuePairs = [['name', 'John'], ['age', 30], ['city', 'NYC']];
const obj = keyValuePairs.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
}, {});
console.log('Object from pairs:', obj);

// Compose functions
const add = x => x + 1;
const multiply = x => x * 2;
const square = x => x * x;

const functions = [add, multiply, square];
const compose = functions.reduce((acc, fn) => x => fn(acc(x)), x => x);
console.log('Compose(5):', compose(5)); // square(multiply(add(5))) = 144

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Map, Filter, Reduce</h4>
        <p><strong>Numbers:</strong> [${numbers.join(', ')}]</p>
        <p><strong>Doubled:</strong> [${doubled.join(', ')}]</p>
        <p><strong>Evens:</strong> [${evens.join(', ')}]</p>
        <p><strong>Sum:</strong> ${sum}</p>
        <p><strong>Chained Result:</strong> ${result}</p>
        <p><strong>Total Revenue:</strong> $${totalRevenue}</p>
        <p><strong>Grouped by City:</strong></p>
        <pre>${JSON.stringify(byCity, null, 2)}</pre>
    `;
    domOutput.appendChild(demoDiv);
}

