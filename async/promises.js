/*
Topic: Promises
Description: Promises represent the eventual completion (or failure) of an async operation.
They provide a cleaner alternative to callbacks and help avoid callback hell.
*/

// Example 1: Creating Promises
console.log('=== Example 1: Creating Promises ===');

// Resolved promise
const resolvedPromise = new Promise((resolve, reject) => {
    resolve('Success!');
});

resolvedPromise.then(result => {
    console.log('Resolved:', result);
});

// Rejected promise
const rejectedPromise = new Promise((resolve, reject) => {
    reject(new Error('Failed!'));
});

rejectedPromise.catch(error => {
    console.error('Rejected:', error.message);
});

// Promise with condition
function createPromise(shouldResolve) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve('Operation successful!');
            } else {
                reject(new Error('Operation failed!'));
            }
        }, 1000);
    });
}

createPromise(true).then(result => {
    console.log('Result:', result);
}).catch(error => {
    console.error('Error:', error.message);
});

// Example 2: Promise Chaining
console.log('\n=== Example 2: Promise Chaining ===');

function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: 'John Doe', email: 'john@example.com' });
        }, 1000);
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: 'Post 1', userId },
                { id: 2, title: 'Post 2', userId }
            ]);
        }, 1000);
    });
}

fetchUser(1)
    .then(user => {
        console.log('User:', user);
        return fetchUserPosts(user.id);
    })
    .then(posts => {
        console.log('Posts:', posts);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Example 3: Promise.all()
console.log('\n=== Example 3: Promise.all() ===');

const promise1 = new Promise(resolve => setTimeout(() => resolve('Result 1'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Result 2'), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve('Result 3'), 1500));

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log('All promises resolved:', results);
    })
    .catch(error => {
        console.error('One promise rejected:', error);
    });

// Example 4: Promise.race()
console.log('\n=== Example 4: Promise.race() ===');

const fastPromise = new Promise(resolve => setTimeout(() => resolve('Fast'), 500));
const slowPromise = new Promise(resolve => setTimeout(() => resolve('Slow'), 2000));

Promise.race([fastPromise, slowPromise])
    .then(result => {
        console.log('First to resolve:', result);
    });

// Example 5: Promise.allSettled()
console.log('\n=== Example 5: Promise.allSettled() ===');

const successPromise = Promise.resolve('Success');
const failurePromise = Promise.reject(new Error('Failure'));

Promise.allSettled([successPromise, failurePromise])
    .then(results => {
        console.log('All settled:', results);
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index}:`, result.value);
            } else {
                console.log(`Promise ${index}:`, result.reason.message);
            }
        });
    });

// Example 6: Real-world Example - API Calls
console.log('\n=== Example 6: API Simulation ===');

function simulateApiCall(endpoint, delay = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) { // 90% success rate
                resolve({ endpoint, data: `Data from ${endpoint}`, timestamp: new Date() });
            } else {
                reject(new Error(`Failed to fetch ${endpoint}`));
            }
        }, delay);
    });
}

// Sequential calls
simulateApiCall('/users', 1000)
    .then(userData => {
        console.log('User data:', userData);
        return simulateApiCall('/posts', 1000);
    })
    .then(postData => {
        console.log('Post data:', postData);
    })
    .catch(error => {
        console.error('API error:', error.message);
    });

// Parallel calls
Promise.all([
    simulateApiCall('/users', 1000),
    simulateApiCall('/posts', 1200),
    simulateApiCall('/comments', 800)
])
    .then(([users, posts, comments]) => {
        console.log('All data fetched:', { users, posts, comments });
    })
    .catch(error => {
        console.error('One API call failed:', error.message);
    });

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Promises</h4>
        <p><strong>Promise States:</strong></p>
        <ul>
            <li>Pending: Initial state</li>
            <li>Fulfilled: Operation successful</li>
            <li>Rejected: Operation failed</li>
        </ul>
        <p><strong>Methods:</strong></p>
        <ul>
            <li><strong>then():</strong> Handle success</li>
            <li><strong>catch():</strong> Handle errors</li>
            <li><strong>finally():</strong> Always executes</li>
            <li><strong>Promise.all():</strong> Wait for all</li>
            <li><strong>Promise.race():</strong> First to resolve</li>
            <li><strong>Promise.allSettled():</strong> All settled</li>
        </ul>
        <p>Check console for async results...</p>
    `;
    domOutput.appendChild(demoDiv);
}

console.log('Promise examples - check console for async results');

