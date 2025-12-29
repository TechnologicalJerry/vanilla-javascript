/*
Topic: Object Basics
Description: Objects are collections of key-value pairs. They are fundamental
data structures in JavaScript used to represent real-world entities.
*/

// Example 1: Creating Objects
console.log('=== Example 1: Creating Objects ===');

// Object literal
const person1 = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};

// Using new Object()
const person2 = new Object();
person2.name = 'Jane Smith';
person2.age = 25;
person2.city = 'Los Angeles';

// Using Object.create()
const person3 = Object.create({});
person3.name = 'Bob Johnson';
person3.age = 35;
person3.city = 'Chicago';

console.log('Person 1:', person1);
console.log('Person 2:', person2);
console.log('Person 3:', person3);

// Example 2: Accessing Object Properties
console.log('\n=== Example 2: Accessing Object Properties ===');

const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2023,
    'color': 'blue', // Can use quotes for keys
    'has-warranty': true // Required for keys with special characters
};

// Dot notation
console.log('Brand:', car.brand);
console.log('Model:', car.model);

// Bracket notation
console.log('Year:', car['year']);
console.log('Color:', car['color']);
console.log('Has Warranty:', car['has-warranty']);

// Dynamic property access
const property = 'brand';
console.log('Dynamic access:', car[property]);

// Example 3: Adding and Modifying Properties
console.log('\n=== Example 3: Adding and Modifying Properties ===');

const user = {
    name: 'Alice',
    email: 'alice@example.com'
};

// Add new property
user.age = 28;
user.isActive = true;

// Modify existing property
user.email = 'alice.new@example.com';

console.log('Updated user:', user);

// Delete property
delete user.isActive;
console.log('After deletion:', user);

// Example 4: Object Methods
console.log('\n=== Example 4: Object Methods ===');

const calculator = {
    value: 0,
    
    // Method shorthand (ES6)
    add(num) {
        this.value += num;
        return this.value;
    },
    
    // Traditional method
    subtract: function(num) {
        this.value -= num;
        return this.value;
    },
    
    // Arrow function (be careful with 'this')
    multiply: (num) => {
        // this.value won't work here - arrow functions don't bind 'this'
        console.log('Arrow function - this context issue');
    },
    
    getValue() {
        return this.value;
    },
    
    reset() {
        this.value = 0;
    }
};

calculator.add(10);
calculator.subtract(3);
console.log('Calculator value:', calculator.getValue());
calculator.reset();
console.log('After reset:', calculator.getValue());

// Example 5: Real-world Example - Product Catalog
console.log('\n=== Example 5: Product Catalog ===');

const products = [
    {
        id: 1,
        name: 'Laptop',
        price: 999.99,
        category: 'Electronics',
        inStock: true,
        getPriceWithTax: function(taxRate = 0.1) {
            return (this.price * (1 + taxRate)).toFixed(2);
        }
    },
    {
        id: 2,
        name: 'Book',
        price: 19.99,
        category: 'Education',
        inStock: true,
        getPriceWithTax: function(taxRate = 0.1) {
            return (this.price * (1 + taxRate)).toFixed(2);
        }
    },
    {
        id: 3,
        name: 'Headphones',
        price: 149.99,
        category: 'Electronics',
        inStock: false,
        getPriceWithTax: function(taxRate = 0.1) {
            return (this.price * (1 + taxRate)).toFixed(2);
        }
    }
];

products.forEach(product => {
    console.log(`${product.name}: $${product.price} (with tax: $${product.getPriceWithTax()})`);
});

// Object.keys(), Object.values(), Object.entries()
console.log('\n=== Object Methods ===');
console.log('Keys:', Object.keys(products[0]));
console.log('Values:', Object.values(products[0]));
console.log('Entries:', Object.entries(products[0]));

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Object Basics</h4>
        <p><strong>Person 1:</strong></p>
        <ul>
            <li>Name: ${person1.name}</li>
            <li>Age: ${person1.age}</li>
            <li>City: ${person1.city}</li>
        </ul>
        <p><strong>Car:</strong> ${car.brand} ${car.model} (${car.year})</p>
        <p><strong>Products:</strong></p>
        <ul>
            ${products.map(p => `<li>${p.name}: $${p.price} (Tax: $${p.getPriceWithTax()})</li>`).join('')}
        </ul>
    `;
    domOutput.appendChild(demoDiv);
}

