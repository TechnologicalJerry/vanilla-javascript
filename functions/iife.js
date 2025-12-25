/*
Topic: IIFE (Immediately Invoked Function Expression)
Description: IIFE is a function that runs as soon as it is defined.
Used to create private scope and avoid polluting the global namespace.
*/

// Example 1: Basic IIFE
console.log('=== Example 1: Basic IIFE ===');

// Syntax: (function() { ... })();
(function() {
    console.log('IIFE executed immediately!');
})();

// With arrow function
(() => {
    console.log('Arrow function IIFE executed!');
})();

// Example 2: IIFE with Parameters
console.log('\n=== Example 2: IIFE with Parameters ===');

(function(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
})('Alice', 25);

// Passing global variables
const globalVar = 'Global Value';
(function(value) {
    console.log('Received:', value);
})(globalVar);

// Example 3: IIFE for Module Pattern
console.log('\n=== Example 3: Module Pattern ===');

const UserModule = (function() {
    // Private variables
    let users = [];
    let userIdCounter = 0;
    
    // Private function
    function generateId() {
        return `USER-${++userIdCounter}`;
    }
    
    // Public API
    return {
        addUser(name, email) {
            const user = {
                id: generateId(),
                name,
                email,
                createdAt: new Date().toISOString()
            };
            users.push(user);
            return user;
        },
        
        getUsers() {
            return [...users]; // Return copy to prevent external modification
        },
        
        getUserById(id) {
            return users.find(user => user.id === id);
        },
        
        getUserCount() {
            return users.length;
        }
    };
})();

// Usage
UserModule.addUser('John Doe', 'john@example.com');
UserModule.addUser('Jane Smith', 'jane@example.com');
console.log('All users:', UserModule.getUsers());
console.log('User count:', UserModule.getUserCount());

// Example 4: IIFE for Avoiding Variable Collisions
console.log('\n=== Example 4: Avoiding Variable Collisions ===');

// Without IIFE - variables pollute global scope
let count = 0;
function increment() {
    count++;
    return count;
}

// With IIFE - variables are scoped
(function() {
    let count = 0; // This 'count' doesn't conflict with outer 'count'
    function increment() {
        count++;
        return count;
    }
    console.log('IIFE count:', increment());
    console.log('IIFE count:', increment());
})();

console.log('Global count:', increment());
console.log('Global count:', increment());

// Example 5: Real-world Example - Configuration Module
console.log('\n=== Example 5: Configuration Module ===');

const AppConfig = (function() {
    // Private configuration
    const config = {
        apiUrl: 'https://api.example.com',
        timeout: 5000,
        retries: 3,
        debug: false
    };
    
    return {
        get(key) {
            return config[key];
        },
        
        set(key, value) {
            if (key in config) {
                config[key] = value;
                console.log(`Config updated: ${key} = ${value}`);
            } else {
                console.warn(`Unknown config key: ${key}`);
            }
        },
        
        getAll() {
            return { ...config }; // Return copy
        },
        
        reset() {
            config.apiUrl = 'https://api.example.com';
            config.timeout = 5000;
            config.retries = 3;
            config.debug = false;
            console.log('Config reset to defaults');
        }
    };
})();

console.log('Initial API URL:', AppConfig.get('apiUrl'));
AppConfig.set('timeout', 10000);
console.log('Updated timeout:', AppConfig.get('timeout'));
console.log('All config:', AppConfig.getAll());

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>IIFE Examples</h4>
        <p><strong>User Module:</strong></p>
        <p>Users added: ${UserModule.getUserCount()}</p>
        <ul>
            ${UserModule.getUsers().map(u => `<li>${u.name} (${u.id})</li>`).join('')}
        </ul>
        <p><strong>App Config:</strong></p>
        <p>API URL: ${AppConfig.get('apiUrl')}</p>
        <p>Timeout: ${AppConfig.get('timeout')}ms</p>
        <p>Retries: ${AppConfig.get('retries')}</p>
    `;
    domOutput.appendChild(demoDiv);
}

