/*
Topic: If/Else Statements
Description: Conditional statements allow code to execute based on conditions.
if, else if, and else provide branching logic in JavaScript.
*/

// Example 1: Basic If/Else
console.log('=== Example 1: Basic If/Else ===');

function checkAge(age) {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}

console.log('Age 25:', checkAge(25));
console.log('Age 15:', checkAge(15));

// Example 2: If/Else If/Else Chain
console.log('\n=== Example 2: If/Else If/Else Chain ===');

function getGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

const scores = [95, 85, 75, 65, 45];
scores.forEach(score => {
    console.log(`Score ${score}: Grade ${getGrade(score)}`);
});

// Example 3: Real-world Example - User Authentication
console.log('\n=== Example 3: User Authentication ===');

function authenticateUser(user) {
    if (!user) {
        return { success: false, message: 'User not provided' };
    } else if (!user.email) {
        return { success: false, message: 'Email is required' };
    } else if (!user.password) {
        return { success: false, message: 'Password is required' };
    } else if (user.email === 'admin@example.com' && user.password === 'admin123') {
        return { success: true, message: 'Login successful', role: 'admin' };
    } else if (user.email === 'user@example.com' && user.password === 'user123') {
        return { success: true, message: 'Login successful', role: 'user' };
    } else {
        return { success: false, message: 'Invalid credentials' };
    }
}

const users = [
    { email: 'admin@example.com', password: 'admin123' },
    { email: 'user@example.com', password: 'user123' },
    { email: 'test@example.com', password: 'wrong' },
    { email: '', password: 'test' }
];

users.forEach((user, index) => {
    const result = authenticateUser(user);
    console.log(`User ${index + 1}:`, result);
});

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>If/Else Examples</h4>
        <p><strong>Age Check:</strong></p>
        <p>Age 25: ${checkAge(25)}</p>
        <p>Age 15: ${checkAge(15)}</p>
        <p><strong>Grade System:</strong></p>
        <ul>
            ${scores.map(score => `<li>Score ${score}: Grade ${getGrade(score)}</li>`).join('')}
        </ul>
        <p><strong>Authentication:</strong></p>
        <p>Admin Login: ${authenticateUser({email: 'admin@example.com', password: 'admin123'}).message}</p>
    `;
    domOutput.appendChild(demoDiv);
}

