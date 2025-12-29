/*
Topic: Object Methods
Description: Built-in Object methods for working with objects:
Object.keys(), Object.values(), Object.entries(), Object.assign(), etc.
*/

// Example 1: Object.keys(), Object.values(), Object.entries()
console.log('=== Example 1: Object.keys(), values(), entries() ===');

const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    email: 'john@example.com'
};

console.log('Keys:', Object.keys(person));
console.log('Values:', Object.values(person));
console.log('Entries:', Object.entries(person));

// Iterate over entries
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// Example 2: Object.assign() - Copying and Merging
console.log('\n=== Example 2: Object.assign() ===');

const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { d: 5 };

// Merge objects (modifies target)
const merged = Object.assign(target, source1, source2);
console.log('Merged:', merged);
console.log('Target modified:', target);

// Create new object (don't modify original)
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 });
console.log('Original:', original);
console.log('Copy:', copy);

// Example 3: Object.freeze(), Object.seal(), Object.preventExtensions()
console.log('\n=== Example 3: Object Protection ===');

// Object.freeze() - prevents all modifications
const frozen = { name: 'Alice', age: 25 };
Object.freeze(frozen);
// frozen.age = 30; // Won't work in strict mode
// frozen.newProp = 'test'; // Won't work
console.log('Frozen object:', frozen);
console.log('Is frozen:', Object.isFrozen(frozen));

// Object.seal() - prevents adding/removing properties, but allows modification
const sealed = { name: 'Bob', age: 30 };
Object.seal(sealed);
sealed.age = 31; // Allowed
// sealed.newProp = 'test'; // Not allowed
console.log('Sealed object:', sealed);
console.log('Is sealed:', Object.isSealed(sealed));

// Object.preventExtensions() - prevents adding new properties
const prevented = { name: 'Charlie' };
Object.preventExtensions(prevented);
prevented.name = 'Charlie Updated'; // Allowed
// prevented.newProp = 'test'; // Not allowed
console.log('Prevented extensions:', prevented);
console.log('Is extensible:', Object.isExtensible(prevented));

// Example 4: Object.hasOwnProperty() and in operator
console.log('\n=== Example 4: Property Checking ===');

const obj = {
    ownProp: 'value',
    inherited: 'inherited'
};

// hasOwnProperty() - checks only own properties
console.log('hasOwnProperty("ownProp"):', obj.hasOwnProperty('ownProp'));
console.log('hasOwnProperty("toString"):', obj.hasOwnProperty('toString')); // false

// in operator - checks own and inherited properties
console.log('"ownProp" in obj:', 'ownProp' in obj);
console.log('"toString" in obj:', 'toString' in obj); // true

// Example 5: Real-world Example - Object Utilities
console.log('\n=== Example 5: Object Utilities ===');

function createUserProfile(data) {
    const defaults = {
        role: 'user',
        isActive: true,
        createdAt: new Date().toISOString()
    };
    
    // Merge with defaults
    const profile = Object.assign({}, defaults, data);
    return profile;
}

const user1 = createUserProfile({ name: 'Alice', email: 'alice@example.com' });
const user2 = createUserProfile({ 
    name: 'Bob', 
    email: 'bob@example.com', 
    role: 'admin',
    isActive: false 
});

console.log('User 1:', user1);
console.log('User 2:', user2);

// Deep clone function
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (obj instanceof Date) {
        return new Date(obj);
    }
    
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }
    
    const cloned = {};
    Object.keys(obj).forEach(key => {
        cloned[key] = deepClone(obj[key]);
    });
    
    return cloned;
}

const original = {
    name: 'Test',
    nested: { value: 123 },
    array: [1, 2, 3]
};

const cloned = deepClone(original);
cloned.nested.value = 456;
console.log('Original nested value:', original.nested.value); // Still 123
console.log('Cloned nested value:', cloned.nested.value); // 456

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Object Methods</h4>
        <p><strong>Object.keys():</strong> [${Object.keys(person).join(', ')}]</p>
        <p><strong>Object.values():</strong> [${Object.values(person).join(', ')}]</p>
        <p><strong>Object Protection:</strong></p>
        <ul>
            <li>Frozen: ${Object.isFrozen(frozen)}</li>
            <li>Sealed: ${Object.isSealed(sealed)}</li>
            <li>Extensible: ${Object.isExtensible(prevented)}</li>
        </ul>
        <p><strong>User Profiles:</strong></p>
        <ul>
            <li>User 1: ${user1.name} (${user1.role})</li>
            <li>User 2: ${user2.name} (${user2.role})</li>
        </ul>
    `;
    domOutput.appendChild(demoDiv);
}

