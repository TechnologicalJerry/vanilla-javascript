/*
Topic: Loops
Description: Loops allow you to execute code repeatedly.
JavaScript has several loop types: for, while, do-while, for...in, for...of
*/

// Example 1: For Loop
console.log('=== Example 1: For Loop ===');

console.log('Counting 1 to 5:');
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}`);
}

console.log('\nIterating over array:');
const fruits = ['apple', 'banana', 'cherry', 'date'];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Index ${i}: ${fruits[i]}`);
}

// Example 2: While and Do-While Loops
console.log('\n=== Example 2: While and Do-While Loops ===');

console.log('While loop - Countdown:');
let countdown = 5;
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log('Blast off!');

console.log('\nDo-While loop (executes at least once):');
let userInput = 0;
do {
    console.log(`Attempt: ${userInput}`);
    userInput++;
} while (userInput < 3);

// Example 3: For...of and For...in Loops
console.log('\n=== Example 3: For...of and For...in ===');

console.log('For...of (iterates over values):');
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
    console.log(color);
}

console.log('\nFor...in (iterates over object keys):');
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Example 4: Real-world Example - Processing User Data
console.log('\n=== Example 4: Processing User Data ===');

const users = [
    { id: 1, name: 'Alice', score: 85 },
    { id: 2, name: 'Bob', score: 92 },
    { id: 3, name: 'Charlie', score: 78 },
    { id: 4, name: 'Diana', score: 95 }
];

// Calculate average score
let totalScore = 0;
for (const user of users) {
    totalScore += user.score;
}
const averageScore = totalScore / users.length;
console.log(`Average Score: ${averageScore.toFixed(2)}`);

// Find users above average
console.log('\nUsers above average:');
for (const user of users) {
    if (user.score > averageScore) {
        console.log(`${user.name}: ${user.score}`);
    }
}

// Loop control: break and continue
console.log('\nUsing break (stop at first match):');
for (const user of users) {
    if (user.score > 90) {
        console.log(`First high scorer: ${user.name}`);
        break;
    }
}

console.log('\nUsing continue (skip certain items):');
for (const user of users) {
    if (user.score < 80) {
        continue; // Skip users with score < 80
    }
    console.log(`${user.name} passed: ${user.score}`);
}

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Loop Examples</h4>
        <p><strong>Fruits Array:</strong></p>
        <ul>
            ${fruits.map((fruit, i) => `<li>Index ${i}: ${fruit}</li>`).join('')}
        </ul>
        <p><strong>User Scores:</strong></p>
        <ul>
            ${users.map(user => `<li>${user.name}: ${user.score}</li>`).join('')}
        </ul>
        <p><strong>Average Score:</strong> ${averageScore.toFixed(2)}</p>
        <p><strong>Person Object:</strong></p>
        <ul>
            ${Object.keys(person).map(key => `<li>${key}: ${person[key]}</li>`).join('')}
        </ul>
    `;
    domOutput.appendChild(demoDiv);
}

