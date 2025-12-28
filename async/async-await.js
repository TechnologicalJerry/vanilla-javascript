/*
Topic: Async/Await
Description: Async/await provides a cleaner syntax for working with promises.
Makes asynchronous code look and behave more like synchronous code.
*/

// Example 1: Basic Async/Await
console.log('=== Example 1: Basic Async/Await ===');

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'John', age: 30 });
        }, 1000);
    });
}

async function getData() {
    console.log('Fetching data...');
    const data = await fetchData();
    console.log('Data received:', data);
    return data;
}

getData();

// Example 2: Error Handling with Try/Catch
console.log('\n=== Example 2: Error Handling ===');

function mightFail(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error('Operation failed!'));
            } else {
                resolve('Operation successful!');
            }
        }, 1000);
    });
}

async function handleOperation(shouldFail) {
    try {
        const result = await mightFail(shouldFail);
        console.log('Success:', result);
        return result;
    } catch (error) {
        console.error('Error caught:', error.message);
        throw error;
    }
}

handleOperation(false);
handleOperation(true);

// Example 3: Sequential vs Parallel Execution
console.log('\n=== Example 3: Sequential vs Parallel ===');

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sequential() {
    console.log('Sequential start');
    await delay(1000);
    console.log('After 1 second');
    await delay(1000);
    console.log('After 2 seconds');
    console.log('Sequential end');
}

async function parallel() {
    console.log('Parallel start');
    await Promise.all([
        delay(1000).then(() => console.log('Task 1 done')),
        delay(1000).then(() => console.log('Task 2 done')),
        delay(1000).then(() => console.log('Task 3 done'))
    ]);
    console.log('Parallel end');
}

sequential();
setTimeout(() => parallel(), 3000);

// Example 4: Real-world Example - User Flow
console.log('\n=== Example 4: User Flow ===');

function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'admin' && password === 'admin123') {
                resolve({ id: 1, username: 'admin', token: 'abc123' });
            } else {
                reject(new Error('Invalid credentials'));
            }
        }, 1000);
    });
}

function getUserProfile(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: userId,
                name: 'John Doe',
                email: 'john@example.com',
                preferences: { theme: 'dark' }
            });
        }, 1000);
    });
}

function getUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: 'Post 1', userId },
                { id: 2, title: 'Post 2', userId }
            ]);
        }, 1000);
    });
}

async function userLoginFlow(username, password) {
    try {
        // Step 1: Login
        const user = await login(username, password);
        console.log('User logged in:', user);
        
        // Step 2: Fetch profile and posts in parallel
        const [profile, posts] = await Promise.all([
            getUserProfile(user.id),
            getUserPosts(user.id)
        ]);
        
        console.log('Profile:', profile);
        console.log('Posts:', posts);
        
        return { user, profile, posts };
    } catch (error) {
        console.error('Login flow error:', error.message);
        throw error;
    }
}

userLoginFlow('admin', 'admin123');

// Example 5: Async Functions in Loops
console.log('\n=== Example 5: Async in Loops ===');

async function processItems(items) {
    // Sequential processing
    console.log('Sequential processing:');
    for (const item of items) {
        await delay(500);
        console.log('Processed:', item);
    }
    
    // Parallel processing
    console.log('\nParallel processing:');
    await Promise.all(
        items.map(async (item) => {
            await delay(500);
            console.log('Processed:', item);
        })
    );
}

processItems(['item1', 'item2', 'item3']);

// Example 6: Async IIFE
console.log('\n=== Example 6: Async IIFE ===');

(async function() {
    try {
        const data = await fetchData();
        console.log('IIFE result:', data);
    } catch (error) {
        console.error('IIFE error:', error);
    }
})();

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Async/Await</h4>
        <p><strong>Benefits:</strong></p>
        <ul>
            <li>Cleaner syntax than promises</li>
            <li>Easier error handling (try/catch)</li>
            <li>More readable code</li>
            <li>Looks like synchronous code</li>
        </ul>
        <p><strong>Key Points:</strong></p>
        <ul>
            <li><strong>async</strong> function returns a promise</li>
            <li><strong>await</strong> pauses execution until promise resolves</li>
            <li>Use <strong>try/catch</strong> for error handling</li>
            <li>Use <strong>Promise.all()</strong> for parallel execution</li>
        </ul>
        <p>Check console for async results...</p>
    `;
    domOutput.appendChild(demoDiv);
}

console.log('Async/await examples - check console for results');

