/*
Topic: Parameters vs Arguments
Description: 
- Parameters: Variables listed in the function definition
- Arguments: Actual values passed to the function when calling it
JavaScript functions are flexible with argument handling.
*/

// Example 1: Basic Parameters and Arguments
console.log('=== Example 1: Parameters vs Arguments ===');

// Parameters: name and age are parameters
function introduce(name, age) {
    return `Hi, I'm ${name} and I'm ${age} years old.`;
}

// Arguments: 'Alice' and 25 are arguments
console.log(introduce('Alice', 25));
console.log(introduce('Bob', 30));

// Example 2: Default Parameters
console.log('\n=== Example 2: Default Parameters ===');

function greet(name = 'Guest', greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}

console.log(greet()); // Uses both defaults
console.log(greet('John')); // Uses default greeting
console.log(greet('Jane', 'Hi')); // Uses both provided

// Example 3: Rest Parameters
console.log('\n=== Example 3: Rest Parameters ===');

function sum(...numbers) {
    // numbers is an array of all arguments
    return numbers.reduce((total, num) => total + num, 0);
}

console.log('Sum of 1, 2, 3:', sum(1, 2, 3));
console.log('Sum of 1, 2, 3, 4, 5:', sum(1, 2, 3, 4, 5));

function createFullName(firstName, lastName, ...middleNames) {
    const middle = middleNames.length > 0 ? middleNames.join(' ') + ' ' : '';
    return `${firstName} ${middle}${lastName}`;
}

console.log(createFullName('John', 'Doe'));
console.log(createFullName('Mary', 'Jane', 'Elizabeth', 'Watson'));

// Example 4: Arguments Object (Legacy)
console.log('\n=== Example 4: Arguments Object (Legacy) ===');

function legacySum() {
    // arguments is array-like object (not a real array)
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log('Legacy sum 1, 2, 3:', legacySum(1, 2, 3));

// Example 5: Real-world Example - Flexible Function
console.log('\n=== Example 5: Flexible Shopping Cart ===');

function calculateTotal(item, quantity = 1, discount = 0, tax = 0.1) {
    const basePrice = item.price * quantity;
    const discountAmount = basePrice * discount;
    const subtotal = basePrice - discountAmount;
    const taxAmount = subtotal * tax;
    const total = subtotal + taxAmount;
    
    return {
        item: item.name,
        quantity,
        basePrice: basePrice.toFixed(2),
        discount: (discount * 100) + '%',
        discountAmount: discountAmount.toFixed(2),
        tax: (tax * 100) + '%',
        taxAmount: taxAmount.toFixed(2),
        total: total.toFixed(2)
    };
}

const products = [
    { name: 'Laptop', price: 999.99 },
    { name: 'Mouse', price: 29.99 },
    { name: 'Keyboard', price: 79.99 }
];

console.log('Shopping Cart:');
console.log(calculateTotal(products[0], 1, 0.1, 0.08)); // 10% discount, 8% tax
console.log(calculateTotal(products[1], 2)); // Default discount and tax
console.log(calculateTotal(products[2], 1, 0.15)); // 15% discount, default tax

// Example 6: Destructured Parameters
console.log('\n=== Example 6: Destructured Parameters ===');

function processUser({ name, age, email, isActive = true }) {
    return {
        displayName: name.toUpperCase(),
        ageGroup: age >= 18 ? 'Adult' : 'Minor',
        emailDomain: email.split('@')[1],
        status: isActive ? 'Active' : 'Inactive'
    };
}

const user = {
    name: 'john doe',
    age: 25,
    email: 'john@example.com',
    isActive: true
};

console.log('Processed User:', processUser(user));

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Parameters vs Arguments</h4>
        <p><strong>Basic:</strong> ${introduce('Alice', 25)}</p>
        <p><strong>Default Parameters:</strong> ${greet()}</p>
        <p><strong>Rest Parameters:</strong> Sum(1,2,3,4,5) = ${sum(1, 2, 3, 4, 5)}</p>
        <p><strong>Full Name:</strong> ${createFullName('John', 'Doe', 'Michael', 'Smith')}</p>
        <p><strong>Cart Total:</strong></p>
        <pre>${JSON.stringify(calculateTotal(products[0], 1, 0.1, 0.08), null, 2)}</pre>
    `;
    domOutput.appendChild(demoDiv);
}

