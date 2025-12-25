/*
Topic: Higher-Order Functions
Description: Higher-order functions are functions that either:
1. Take other functions as arguments, or
2. Return functions as their result
Common examples: map, filter, reduce, forEach, etc.
*/

// Example 1: Functions as Arguments
console.log('=== Example 1: Functions as Arguments ===');

function calculate(operation, a, b) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const power = (x, y) => x ** y;

console.log('Add:', calculate(add, 5, 3));
console.log('Multiply:', calculate(multiply, 5, 3));
console.log('Power:', calculate(power, 2, 8));

// Example 2: Functions Returning Functions
console.log('\n=== Example 2: Functions Returning Functions ===');

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

// Arrow function version
const createAdder = base => num => base + num;
const add10 = createAdder(10);
console.log('Add 10 to 5:', add10(5));

// Example 3: Array Higher-Order Functions
console.log('\n=== Example 3: Array Higher-Order Functions ===');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach - executes function for each element
console.log('forEach - logging each number:');
numbers.forEach(num => console.log(`Number: ${num}`));

// map - transforms each element
const squared = numbers.map(n => n * n);
console.log('Squared:', squared);

// filter - selects elements based on condition
const evens = numbers.filter(n => n % 2 === 0);
console.log('Evens:', evens);

// reduce - reduces array to single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('Sum:', sum);

// find - finds first matching element
const firstEven = numbers.find(n => n % 2 === 0);
console.log('First even:', firstEven);

// some - checks if any element matches
const hasEven = numbers.some(n => n % 2 === 0);
console.log('Has even:', hasEven);

// every - checks if all elements match
const allPositive = numbers.every(n => n > 0);
console.log('All positive:', allPositive);

// Example 4: Real-world Example - Data Processing Pipeline
console.log('\n=== Example 4: Data Processing Pipeline ===');

const employees = [
    { id: 1, name: 'Alice', department: 'Engineering', salary: 75000, experience: 3 },
    { id: 2, name: 'Bob', department: 'Marketing', salary: 65000, experience: 5 },
    { id: 3, name: 'Charlie', department: 'Engineering', salary: 90000, experience: 7 },
    { id: 4, name: 'Diana', department: 'Sales', salary: 55000, experience: 2 },
    { id: 5, name: 'Eve', department: 'Engineering', salary: 80000, experience: 4 }
];

// Pipeline: Filter -> Map -> Reduce
const engineeringTotalSalary = employees
    .filter(emp => emp.department === 'Engineering')
    .map(emp => emp.salary)
    .reduce((total, salary) => total + salary, 0);

console.log('Engineering total salary:', engineeringTotalSalary);

// Average experience by department
const avgExperienceByDept = employees.reduce((acc, emp) => {
    if (!acc[emp.department]) {
        acc[emp.department] = { total: 0, count: 0 };
    }
    acc[emp.department].total += emp.experience;
    acc[emp.department].count += 1;
    return acc;
}, {});

Object.keys(avgExperienceByDept).forEach(dept => {
    const avg = avgExperienceByDept[dept].total / avgExperienceByDept[dept].count;
    console.log(`${dept} average experience: ${avg.toFixed(1)} years`);
});

// Example 5: Custom Higher-Order Function
console.log('\n=== Example 5: Custom Higher-Order Function ===');

function withLogging(fn, name) {
    return function(...args) {
        console.log(`Calling ${name} with arguments:`, args);
        const result = fn(...args);
        console.log(`${name} returned:`, result);
        return result;
    };
}

const loggedAdd = withLogging(add, 'add');
const result = loggedAdd(10, 20);

// Retry function
function withRetry(fn, maxRetries = 3) {
    return async function(...args) {
        let lastError;
        for (let i = 0; i < maxRetries; i++) {
            try {
                return await fn(...args);
            } catch (error) {
                lastError = error;
                console.log(`Attempt ${i + 1} failed, retrying...`);
            }
        }
        throw lastError;
    };
}

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Higher-Order Functions</h4>
        <p><strong>Calculations:</strong></p>
        <p>Add(5, 3) = ${calculate(add, 5, 3)}</p>
        <p>Multiply(5, 3) = ${calculate(multiply, 5, 3)}</p>
        <p><strong>Multipliers:</strong></p>
        <p>Double(5) = ${double(5)}</p>
        <p>Triple(5) = ${triple(5)}</p>
        <p><strong>Array Operations:</strong></p>
        <p>Squared: [${squared.slice(0, 5).join(', ')}...]</p>
        <p>Evens: [${evens.join(', ')}]</p>
        <p>Sum: ${sum}</p>
        <p><strong>Engineering Total Salary:</strong> $${engineeringTotalSalary.toLocaleString()}</p>
    `;
    domOutput.appendChild(demoDiv);
}

