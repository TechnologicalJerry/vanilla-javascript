/*
Topic: Template Literals
Description: Template literals (template strings) provide an easy way to create
multiline strings and perform string interpolation using backticks.
*/

// Example 1: Basic Template Literals
console.log('=== Example 1: Basic Template Literals ===');

const name = 'John';
const age = 30;

// Traditional concatenation
const traditional = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';
console.log('Traditional:', traditional);

// Template literal
const template = `Hello, my name is ${name} and I am ${age} years old.`;
console.log('Template:', template);

// Example 2: Multiline Strings
console.log('\n=== Example 2: Multiline Strings ===');

// Traditional way (using \n)
const traditionalMultiline = 'Line 1\nLine 2\nLine 3';
console.log('Traditional multiline:', traditionalMultiline);

// Template literal (preserves formatting)
const templateMultiline = `
Line 1
Line 2
Line 3
`;
console.log('Template multiline:', templateMultiline);

// HTML template
const htmlTemplate = `
<div class="container">
    <h1>Welcome</h1>
    <p>This is a paragraph</p>
</div>
`;
console.log('HTML template:', htmlTemplate);

// Example 3: Expression Interpolation
console.log('\n=== Example 3: Expression Interpolation ===');

const a = 10;
const b = 5;

// Mathematical expressions
console.log(`Sum: ${a + b}`);
console.log(`Product: ${a * b}`);
console.log(`Division: ${a / b}`);

// Function calls
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(`Function call: ${greet('Alice')}`);

// Ternary operator
const isActive = true;
console.log(`Status: ${isActive ? 'Active' : 'Inactive'}`);

// Object properties
const person = { name: 'Bob', age: 25 };
console.log(`Person: ${person.name} is ${person.age} years old`);

// Example 4: Tagged Template Literals
console.log('\n=== Example 4: Tagged Template Literals ===');

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i] ? `<strong>${values[i]}</strong>` : '';
        return result + str + value;
    }, '');
}

const name2 = 'Alice';
const age2 = 28;
const highlighted = highlight`Hello, ${name2}! You are ${age2} years old.`;
console.log('Highlighted:', highlighted);

// Sanitize function
function sanitize(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i] ? String(values[i]).replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
        return result + str + value;
    }, '');
}

const userInput = '<script>alert("XSS")</script>';
const safe = sanitize`User input: ${userInput}`;
console.log('Sanitized:', safe);

// Example 5: Real-world Example - Dynamic Content
console.log('\n=== Example 5: Dynamic Content ===');

function createEmailTemplate(user, order) {
    return `
Dear ${user.name},

Thank you for your order #${order.id}!

Order Details:
- Items: ${order.items.join(', ')}
- Total: $${order.total.toFixed(2)}
- Shipping Address: ${user.address}

We'll send you a confirmation email once your order ships.

Best regards,
The Team
    `.trim();
}

const user = {
    name: 'John Doe',
    address: '123 Main St, New York, NY 10001'
};

const order = {
    id: 'ORD-12345',
    items: ['Laptop', 'Mouse', 'Keyboard'],
    total: 1299.99
};

const email = createEmailTemplate(user, order);
console.log('Email template:', email);

// SQL query template
function createQuery(table, conditions) {
    let query = `SELECT * FROM ${table}`;
    
    if (conditions.length > 0) {
        const whereClause = conditions
            .map(([key, value]) => `${key} = '${value}'`)
            .join(' AND ');
        query += ` WHERE ${whereClause}`;
    }
    
    return query;
}

const conditions = [['status', 'active'], ['role', 'admin']];
const sqlQuery = createQuery('users', conditions);
console.log('SQL Query:', sqlQuery);

// URL template
function createApiUrl(endpoint, params) {
    const queryString = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
    return `https://api.example.com/${endpoint}?${queryString}`;
}

const apiUrl = createApiUrl('users', { page: 1, limit: 10, sort: 'name' });
console.log('API URL:', apiUrl);

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Template Literals</h4>
        <p><strong>Basic:</strong> ${template}</p>
        <p><strong>Expression:</strong> Sum of ${a} + ${b} = ${a + b}</p>
        <p><strong>Status:</strong> ${isActive ? 'Active' : 'Inactive'}</p>
        <p><strong>Email Preview:</strong></p>
        <pre style="background: #f0f0f0; padding: 10px; border-radius: 4px;">${email}</pre>
    `;
    domOutput.appendChild(demoDiv);
}

