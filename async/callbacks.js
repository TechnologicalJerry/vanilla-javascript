/*
Topic: Callbacks
Description: Callbacks are functions passed as arguments to other functions.
They are executed after a certain operation completes. Foundation of async JavaScript.
*/

// Example 1: Basic Callbacks
console.log('=== Example 1: Basic Callbacks ===');

function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    if (callback) {
        callback();
    }
}

greet('John', function() {
    console.log('Callback executed!');
});

// Example 2: Callbacks with Parameters
console.log('\n=== Example 2: Callbacks with Parameters ===');

function processData(data, callback) {
    console.log('Processing data:', data);
    const result = data * 2;
    callback(result);
}

processData(5, function(result) {
    console.log('Result:', result);
});

// Example 3: Error-First Callbacks
console.log('\n=== Example 3: Error-First Callbacks ===');

function divide(a, b, callback) {
    if (b === 0) {
        callback(new Error('Cannot divide by zero'), null);
        return;
    }
    callback(null, a / b);
}

divide(10, 2, function(error, result) {
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('Result:', result);
    }
});

divide(10, 0, function(error, result) {
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('Result:', result);
    }
});

// Example 4: Async Callbacks (setTimeout)
console.log('\n=== Example 4: Async Callbacks ===');

function fetchData(callback) {
    console.log('Fetching data...');
    setTimeout(function() {
        const data = { id: 1, name: 'John', age: 30 };
        console.log('Data fetched!');
        callback(null, data);
    }, 2000);
}

console.log('Before fetchData');
fetchData(function(error, data) {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Received data:', data);
    }
});
console.log('After fetchData (this runs immediately)');

// Example 5: Callback Hell
console.log('\n=== Example 5: Callback Hell ===');

function step1(callback) {
    setTimeout(() => {
        console.log('Step 1 complete');
        callback(null, 'Step 1 result');
    }, 1000);
}

function step2(data, callback) {
    setTimeout(() => {
        console.log('Step 2 complete with:', data);
        callback(null, 'Step 2 result');
    }, 1000);
}

function step3(data, callback) {
    setTimeout(() => {
        console.log('Step 3 complete with:', data);
        callback(null, 'All steps complete!');
    }, 1000);
}

// Callback hell (nested callbacks)
step1(function(error, result1) {
    if (error) {
        console.error('Error in step 1:', error);
        return;
    }
    step2(result1, function(error, result2) {
        if (error) {
            console.error('Error in step 2:', error);
            return;
        }
        step3(result2, function(error, result3) {
            if (error) {
                console.error('Error in step 3:', error);
                return;
            }
            console.log('Final result:', result3);
        });
    });
});

// Example 6: Real-world Example - User Authentication
console.log('\n=== Example 6: User Authentication ===');

function validateUser(username, password, callback) {
    setTimeout(() => {
        if (!username || !password) {
            callback(new Error('Username and password required'), null);
            return;
        }
        if (username === 'admin' && password === 'admin123') {
            callback(null, { id: 1, username: 'admin', role: 'administrator' });
        } else {
            callback(new Error('Invalid credentials'), null);
        }
    }, 1000);
}

function getUserProfile(userId, callback) {
    setTimeout(() => {
        callback(null, {
            id: userId,
            name: 'John Doe',
            email: 'john@example.com',
            preferences: { theme: 'dark', notifications: true }
        });
    }, 1000);
}

// Nested callbacks for authentication flow
validateUser('admin', 'admin123', function(error, user) {
    if (error) {
        console.error('Authentication failed:', error.message);
        return;
    }
    console.log('User authenticated:', user);
    
    getUserProfile(user.id, function(error, profile) {
        if (error) {
            console.error('Failed to get profile:', error);
            return;
        }
        console.log('User profile:', profile);
    });
});

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Callbacks</h4>
        <p><strong>Basic Callback:</strong> Function passed as argument</p>
        <p><strong>Error-First:</strong> First parameter is error (if any)</p>
        <p><strong>Async Callbacks:</strong> Executed after async operation</p>
        <p><strong>Callback Hell:</strong> Nested callbacks (hard to read)</p>
        <p><strong>Note:</strong> Promises and async/await solve callback hell!</p>
        <p>Check console for async operations...</p>
    `;
    domOutput.appendChild(demoDiv);
}

console.log('Callback examples - check console for async results');

