/*
Topic: Find and Sort
Description: Methods for searching and sorting arrays.
find(), findIndex(), sort() are essential for data manipulation.
*/

// Example 1: Find Methods
console.log('=== Example 1: Find Methods ===');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// find() - returns first element that passes test
const firstEven = numbers.find(n => n % 2 === 0);
console.log('First even:', firstEven);

const firstGreaterThan5 = numbers.find(n => n > 5);
console.log('First > 5:', firstGreaterThan5);

// findIndex() - returns index of first matching element
const index = numbers.findIndex(n => n > 5);
console.log('Index of first > 5:', index);

// findLast() - returns last element that passes test (ES2023)
const lastEven = numbers.findLast ? numbers.findLast(n => n % 2 === 0) : numbers.slice().reverse().find(n => n % 2 === 0);
console.log('Last even:', lastEven);

// Example 2: Find with Objects
console.log('\n=== Example 2: Find with Objects ===');

const users = [
    { id: 1, name: 'Alice', age: 25, active: true },
    { id: 2, name: 'Bob', age: 30, active: false },
    { id: 3, name: 'Charlie', age: 35, active: true },
    { id: 4, name: 'Diana', age: 28, active: true }
];

const activeUser = users.find(user => user.active);
console.log('First active user:', activeUser);

const oldUser = users.find(user => user.age > 30);
console.log('User older than 30:', oldUser);

const userIndex = users.findIndex(user => user.name === 'Charlie');
console.log('Index of Charlie:', userIndex);

// Example 3: Sort Basics
console.log('\n=== Example 3: Sort Basics ===');

// String sorting
const fruits = ['banana', 'apple', 'cherry', 'date'];
const sortedFruits = [...fruits].sort();
console.log('Sorted fruits:', sortedFruits);

// Number sorting (default is string sort!)
const nums = [10, 5, 40, 25, 1000, 1];
const wrongSort = [...nums].sort();
console.log('Wrong number sort:', wrongSort); // [1, 10, 1000, 25, 40, 5]

// Correct number sorting
const correctSort = [...nums].sort((a, b) => a - b);
console.log('Correct number sort (ascending):', correctSort);

const descending = [...nums].sort((a, b) => b - a);
console.log('Descending sort:', descending);

// Example 4: Sort with Objects
console.log('\n=== Example 4: Sort with Objects ===');

const products = [
    { name: 'Laptop', price: 999, rating: 4.5 },
    { name: 'Phone', price: 699, rating: 4.8 },
    { name: 'Tablet', price: 399, rating: 4.2 },
    { name: 'Watch', price: 299, rating: 4.7 }
];

// Sort by price (ascending)
const byPrice = [...products].sort((a, b) => a.price - b.price);
console.log('Sorted by price:', byPrice);

// Sort by rating (descending)
const byRating = [...products].sort((a, b) => b.rating - a.rating);
console.log('Sorted by rating:', byRating);

// Sort by name (alphabetical)
const byName = [...products].sort((a, b) => a.name.localeCompare(b.name));
console.log('Sorted by name:', byName);

// Example 5: Real-world Example - Search and Sort
console.log('\n=== Example 5: Search and Sort ===');

const employees = [
    { id: 1, name: 'Alice', department: 'Engineering', salary: 75000, experience: 3 },
    { id: 2, name: 'Bob', department: 'Marketing', salary: 65000, experience: 5 },
    { id: 3, name: 'Charlie', department: 'Engineering', salary: 90000, experience: 7 },
    { id: 4, name: 'Diana', department: 'Sales', salary: 55000, experience: 2 },
    { id: 5, name: 'Eve', department: 'Engineering', salary: 80000, experience: 4 }
];

// Find senior engineer
const seniorEngineer = employees.find(emp => 
    emp.department === 'Engineering' && emp.experience >= 5
);
console.log('Senior engineer:', seniorEngineer);

// Find all engineers
const engineers = employees.filter(emp => emp.department === 'Engineering');
console.log('All engineers:', engineers);

// Sort engineers by salary (descending)
const sortedEngineers = [...engineers].sort((a, b) => b.salary - a.salary);
console.log('Engineers sorted by salary:', sortedEngineers);

// Find highest paid employee
const highestPaid = [...employees].sort((a, b) => b.salary - a.salary)[0];
console.log('Highest paid:', highestPaid);

// Example 6: Complex Sorting
console.log('\n=== Example 6: Complex Sorting ===');

const students = [
    { name: 'Alice', grade: 'A', score: 95, age: 20 },
    { name: 'Bob', grade: 'B', score: 85, age: 19 },
    { name: 'Charlie', grade: 'A', score: 95, age: 21 },
    { name: 'Diana', grade: 'C', score: 75, age: 20 }
];

// Sort by grade, then by score (descending), then by age
const complexSort = [...students].sort((a, b) => {
    // First by grade
    if (a.grade !== b.grade) {
        return a.grade.localeCompare(b.grade);
    }
    // Then by score (descending)
    if (a.score !== b.score) {
        return b.score - a.score;
    }
    // Finally by age
    return a.age - b.age;
});

console.log('Complex sorted:', complexSort);

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Find and Sort</h4>
        <p><strong>Numbers:</strong> [${numbers.join(', ')}]</p>
        <p><strong>First Even:</strong> ${firstEven}</p>
        <p><strong>First > 5:</strong> ${firstGreaterThan5}</p>
        <p><strong>Sorted Numbers:</strong> [${correctSort.join(', ')}]</p>
        <p><strong>Products by Price:</strong></p>
        <ul>
            ${byPrice.map(p => `<li>${p.name}: $${p.price}</li>`).join('')}
        </ul>
        <p><strong>Senior Engineer:</strong> ${seniorEngineer.name} ($${seniorEngineer.salary.toLocaleString()})</p>
    `;
    domOutput.appendChild(demoDiv);
}

