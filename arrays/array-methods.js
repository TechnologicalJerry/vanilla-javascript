/*
Topic: Array Methods
Description: Arrays have many built-in methods for manipulation, iteration, and transformation.
Understanding these methods is essential for effective JavaScript programming.
*/

// Example 1: Basic Array Methods
console.log('=== Example 1: Basic Array Methods ===');

const fruits = ['apple', 'banana', 'cherry'];

// push() - adds to end
fruits.push('date');
console.log('After push:', fruits);

// pop() - removes from end
const last = fruits.pop();
console.log('Popped:', last);
console.log('After pop:', fruits);

// unshift() - adds to beginning
fruits.unshift('apricot');
console.log('After unshift:', fruits);

// shift() - removes from beginning
const first = fruits.shift();
console.log('Shifted:', first);
console.log('After shift:', fruits);

// Example 2: Array Iteration Methods
console.log('\n=== Example 2: Array Iteration Methods ===');

const numbers = [1, 2, 3, 4, 5];

// forEach() - executes function for each element
console.log('forEach:');
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// map() - creates new array with transformed elements
const doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled);

// filter() - creates new array with filtered elements
const evens = numbers.filter(n => n % 2 === 0);
console.log('Evens:', evens);

// find() - finds first matching element
const found = numbers.find(n => n > 3);
console.log('First > 3:', found);

// findIndex() - finds index of first matching element
const index = numbers.findIndex(n => n > 3);
console.log('Index of first > 3:', index);

// Example 3: Array Search and Check Methods
console.log('\n=== Example 3: Search and Check Methods ===');

const items = ['apple', 'banana', 'cherry', 'date'];

// includes() - checks if array contains value
console.log('Includes "banana":', items.includes('banana'));
console.log('Includes "grape":', items.includes('grape'));

// indexOf() - returns first index of value
console.log('Index of "cherry":', items.indexOf('cherry'));
console.log('Index of "grape":', items.indexOf('grape')); // -1 if not found

// lastIndexOf() - returns last index of value
const duplicates = ['a', 'b', 'a', 'c', 'a'];
console.log('Last index of "a":', duplicates.lastIndexOf('a'));

// some() - checks if any element passes test
const hasEven = numbers.some(n => n % 2 === 0);
console.log('Has even number:', hasEven);

// every() - checks if all elements pass test
const allPositive = numbers.every(n => n > 0);
console.log('All positive:', allPositive);

// Example 4: Array Transformation Methods
console.log('\n=== Example 4: Array Transformation Methods ===');

const nums = [1, 2, 3, 4, 5];

// reduce() - reduces array to single value
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log('Sum:', sum);

const product = nums.reduce((acc, n) => acc * n, 1);
console.log('Product:', product);

// reduceRight() - reduces from right to left
const concatRight = ['a', 'b', 'c'].reduceRight((acc, val) => acc + val, '');
console.log('Concat right:', concatRight);

// flat() - flattens nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
console.log('Flat (depth 1):', nested.flat());
console.log('Flat (depth 2):', nested.flat(2));

// flatMap() - map then flat
const words = ['hello world', 'foo bar'];
const letters = words.flatMap(word => word.split(' '));
console.log('FlatMap:', letters);

// Example 5: Array Manipulation Methods
console.log('\n=== Example 5: Array Manipulation Methods ===');

// slice() - extracts portion of array (doesn't modify original)
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 4);
console.log('Original:', arr);
console.log('Sliced (1-4):', sliced);

// splice() - modifies array (adds/removes elements)
const arr2 = [1, 2, 3, 4, 5];
const removed = arr2.splice(1, 2, 'a', 'b'); // Remove 2 elements, add 'a', 'b'
console.log('After splice:', arr2);
console.log('Removed:', removed);

// concat() - combines arrays
const arr3 = [1, 2];
const arr4 = [3, 4];
const combined = arr3.concat(arr4);
console.log('Combined:', combined);

// join() - joins elements into string
const joined = ['a', 'b', 'c'].join('-');
console.log('Joined:', joined);

// reverse() - reverses array (modifies original)
const reversed = [1, 2, 3].reverse();
console.log('Reversed:', reversed);

// sort() - sorts array (modifies original)
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
const sorted = [...unsorted].sort((a, b) => a - b);
console.log('Sorted:', sorted);

// Example 6: Real-world Example - Data Processing
console.log('\n=== Example 6: Data Processing ===');

const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics', inStock: true },
    { id: 2, name: 'Book', price: 15, category: 'Education', inStock: true },
    { id: 3, name: 'Phone', price: 699, category: 'Electronics', inStock: false },
    { id: 4, name: 'Pen', price: 2, category: 'Office', inStock: true }
];

// Get all electronics
const electronics = products.filter(p => p.category === 'Electronics');
console.log('Electronics:', electronics);

// Get product names
const names = products.map(p => p.name);
console.log('Product names:', names);

// Check if all in stock
const allInStock = products.every(p => p.inStock);
console.log('All in stock:', allInStock);

// Calculate total value
const totalValue = products.reduce((sum, p) => sum + p.price, 0);
console.log('Total value:', totalValue);

// Group by category
const byCategory = products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
        groups[category] = [];
    }
    groups[category].push(product);
    return groups;
}, {});
console.log('Grouped by category:', byCategory);

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Array Methods</h4>
        <p><strong>Numbers:</strong> [${numbers.join(', ')}]</p>
        <p><strong>Doubled:</strong> [${doubled.join(', ')}]</p>
        <p><strong>Evens:</strong> [${evens.join(', ')}]</p>
        <p><strong>Sum:</strong> ${sum}</p>
        <p><strong>Products:</strong></p>
        <ul>
            ${products.map(p => `<li>${p.name}: $${p.price}</li>`).join('')}
        </ul>
        <p><strong>Total Value:</strong> $${totalValue}</p>
    `;
    domOutput.appendChild(demoDiv);
}

