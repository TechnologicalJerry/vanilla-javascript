/*
Topic: Object Destructuring
Description: Destructuring allows extracting values from objects and arrays
into distinct variables. Makes code cleaner and more readable.
*/

// Example 1: Basic Object Destructuring
console.log('=== Example 1: Basic Object Destructuring ===');

const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    email: 'john@example.com'
};

// Extract specific properties
const { name, age } = person;
console.log('Name:', name);
console.log('Age:', age);

// Extract with different variable names
const { name: personName, age: personAge } = person;
console.log('Person Name:', personName);
console.log('Person Age:', personAge);

// Extract with default values
const { name: userName, country = 'USA' } = person;
console.log('User Name:', userName);
console.log('Country:', country); // Uses default

// Example 2: Nested Destructuring
console.log('\n=== Example 2: Nested Destructuring ===');

const company = {
    name: 'Tech Corp',
    address: {
        street: '123 Main St',
        city: 'San Francisco',
        zip: '94102'
    },
    employees: {
        count: 100,
        departments: ['Engineering', 'Sales', 'Marketing']
    }
};

// Nested destructuring
const { 
    name: companyName,
    address: { city: companyCity, street },
    employees: { count: employeeCount }
} = company;

console.log('Company:', companyName);
console.log('City:', companyCity);
console.log('Street:', street);
console.log('Employee Count:', employeeCount);

// Example 3: Destructuring in Function Parameters
console.log('\n=== Example 3: Function Parameters ===');

// Traditional way
function greetTraditional(person) {
    return `Hello, ${person.name}! You are ${person.age} years old.`;
}

// With destructuring
function greetDestructured({ name, age }) {
    return `Hello, ${name}! You are ${age} years old.`;
}

// With defaults
function greetWithDefaults({ name = 'Guest', age = 0, city = 'Unknown' }) {
    return `Hello, ${name}! Age: ${age}, City: ${city}`;
}

console.log(greetTraditional(person));
console.log(greetDestructured(person));
console.log(greetWithDefaults({ name: 'Alice' })); // Uses defaults for age and city

// Example 4: Rest in Destructuring
console.log('\n=== Example 4: Rest in Destructuring ===');

const user = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
    role: 'admin',
    isActive: true,
    createdAt: '2024-01-01'
};

// Extract some properties, rest goes to 'other'
const { id, name: userName, ...other } = user;
console.log('ID:', id);
console.log('Name:', userName);
console.log('Other properties:', other);

// Example 5: Real-world Example - API Response Handling
console.log('\n=== Example 5: API Response Handling ===');

// Simulate API response
function fetchUserData(userId) {
    return {
        success: true,
        data: {
            user: {
                id: userId,
                name: 'John Smith',
                email: 'john@example.com',
                profile: {
                    avatar: 'https://example.com/avatar.jpg',
                    bio: 'Software Developer',
                    location: 'New York'
                },
                preferences: {
                    theme: 'dark',
                    notifications: true
                }
            },
            metadata: {
                timestamp: new Date().toISOString(),
                version: '1.0'
            }
        }
    };
}

// Destructure API response
const response = fetchUserData(123);
const {
    success,
    data: {
        user: {
            id: userId,
            name: fullName,
            email: userEmail,
            profile: { avatar, bio, location },
            preferences: { theme, notifications }
        },
        metadata: { timestamp }
    }
} = response;

console.log('User Data:');
console.log('ID:', userId);
console.log('Name:', fullName);
console.log('Email:', userEmail);
console.log('Bio:', bio);
console.log('Location:', location);
console.log('Theme:', theme);
console.log('Timestamp:', timestamp);

// Practical: Function that uses destructuring
function updateUserProfile({ user: { id }, profile: { bio }, preferences }) {
    console.log(`Updating user ${id} with bio: "${bio}" and preferences:`, preferences);
}

updateUserProfile(response.data);

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Object Destructuring</h4>
        <p><strong>Basic:</strong></p>
        <p>Name: ${name}, Age: ${age}</p>
        <p><strong>Nested:</strong></p>
        <p>Company: ${companyName}</p>
        <p>City: ${companyCity}</p>
        <p><strong>Function Parameters:</strong></p>
        <p>${greetDestructured(person)}</p>
        <p><strong>API Response:</strong></p>
        <p>User: ${fullName} (${userEmail})</p>
        <p>Location: ${location}</p>
        <p>Theme: ${theme}</p>
    `;
    domOutput.appendChild(demoDiv);
}

