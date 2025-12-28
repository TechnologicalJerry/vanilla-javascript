/*
Topic: Array Destructuring
Description: Destructuring allows extracting values from arrays into distinct variables.
Provides a clean way to access array elements and swap values.
*/

// Example 1: Basic Array Destructuring
console.log('=== Example 1: Basic Array Destructuring ===');

const colors = ['red', 'green', 'blue'];

// Extract first element
const [first] = colors;
console.log('First color:', first);

// Extract multiple elements
const [firstColor, secondColor, thirdColor] = colors;
console.log('First:', firstColor);
console.log('Second:', secondColor);
console.log('Third:', thirdColor);

// Skip elements
const [, , third] = colors;
console.log('Third (skipped first two):', third);

// Example 2: Default Values
console.log('\n=== Example 2: Default Values ===');

const numbers = [1, 2];

// With defaults
const [a = 0, b = 0, c = 0] = numbers;
console.log('a:', a);
console.log('b:', b);
console.log('c:', c); // Uses default

// Mixed with existing values
const [x, y = 10, z = 20] = [5];
console.log('x:', x);
console.log('y:', y); // Uses default
console.log('z:', z); // Uses default

// Example 3: Rest in Destructuring
console.log('\n=== Example 3: Rest in Destructuring ===');

const numbers2 = [1, 2, 3, 4, 5];

// Extract first, rest goes to 'others'
const [firstNum, ...others] = numbers2;
console.log('First:', firstNum);
console.log('Others:', others);

// Extract first two, rest goes to 'remaining'
const [one, two, ...remaining] = numbers2;
console.log('One:', one);
console.log('Two:', two);
console.log('Remaining:', remaining);

// Example 4: Swapping Variables
console.log('\n=== Example 4: Swapping Variables ===');

let a1 = 10;
let b1 = 20;

console.log('Before swap - a:', a1, 'b:', b1);

// Swap using destructuring
[a1, b1] = [b1, a1];

console.log('After swap - a:', a1, 'b:', b1);

// Multiple swaps
let x1 = 1, y1 = 2, z1 = 3;
console.log('Before - x:', x1, 'y:', y1, 'z:', z1);

[x1, y1, z1] = [z1, x1, y1];
console.log('After - x:', x1, 'y:', y1, 'z:', z1);

// Example 5: Nested Array Destructuring
console.log('\n=== Example 5: Nested Array Destructuring ===');

const nested = [1, [2, 3], 4];

const [firstItem, [secondItem, thirdItem], fourthItem] = nested;
console.log('First:', firstItem);
console.log('Second:', secondItem);
console.log('Third:', thirdItem);
console.log('Fourth:', fourthItem);

// Example 6: Function Return Values
console.log('\n=== Example 6: Function Return Values ===');

function getCoordinates() {
    return [10, 20, 30];
}

const [xCoord, yCoord, zCoord] = getCoordinates();
console.log('Coordinates:', xCoord, yCoord, zCoord);

// Ignore some return values
const [x2, , z2] = getCoordinates();
console.log('X and Z only:', x2, z2);

// Example 7: Real-world Example - API Response
console.log('\n=== Example 7: API Response ===');

// Simulate API response
function fetchUserData() {
    return {
        status: 'success',
        data: {
            users: [
                ['Alice', 'alice@example.com', 25],
                ['Bob', 'bob@example.com', 30],
                ['Charlie', 'charlie@example.com', 35]
            ]
        }
    };
}

const response = fetchUserData();
const { data: { users } } = response;

// Destructure user arrays
users.forEach(([name, email, age]) => {
    console.log(`${name} (${email}): ${age} years old`);
});

// Example 8: Destructuring with Methods
console.log('\n=== Example 8: Destructuring with Methods ===');

const coordinates = [10, 20, 30];

// Destructure from method return
const [firstCoord] = coordinates.slice(0, 1);
console.log('First coordinate:', firstCoord);

// Destructure from split
const dateString = '2024-01-15';
const [year, month, day] = dateString.split('-');
console.log(`Date: ${month}/${day}/${year}`);

// Destructure from match
const url = 'https://example.com/users/123';
const match = url.match(/\/(\d+)$/);
if (match) {
    const [, userId] = match;
    console.log('User ID:', userId);
}

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Array Destructuring</h4>
        <p><strong>Colors:</strong> [${colors.join(', ')}]</p>
        <p><strong>First:</strong> ${firstColor}</p>
        <p><strong>Second:</strong> ${secondColor}</p>
        <p><strong>Third:</strong> ${thirdColor}</p>
        <p><strong>Swapped Values:</strong> a=${a1}, b=${b1}</p>
        <p><strong>Coordinates:</strong> x=${xCoord}, y=${yCoord}, z=${zCoord}</p>
        <p><strong>Date:</strong> ${month}/${day}/${year}</p>
    `;
    domOutput.appendChild(demoDiv);
}

