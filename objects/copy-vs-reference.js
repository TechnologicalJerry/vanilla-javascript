/*
Topic: Copy vs Reference
Description: In JavaScript, primitive values are copied, but objects are passed by reference.
Understanding this is crucial for avoiding bugs when working with objects and arrays.
*/

// Example 1: Primitive Values - Copy
console.log('=== Example 1: Primitive Values (Copy) ===');

let a = 10;
let b = a; // b gets a copy of the value
b = 20;

console.log('a:', a); // 10 (unchanged)
console.log('b:', b); // 20

let str1 = 'Hello';
let str2 = str1; // str2 gets a copy
str2 = 'World';

console.log('str1:', str1); // 'Hello' (unchanged)
console.log('str2:', str2); // 'World'

// Example 2: Objects - Reference
console.log('\n=== Example 2: Objects (Reference) ===');

const obj1 = { name: 'John', age: 30 };
const obj2 = obj1; // obj2 references the same object

obj2.age = 31; // Modifying obj2 also modifies obj1

console.log('obj1:', obj1); // { name: 'John', age: 31 }
console.log('obj2:', obj2); // { name: 'John', age: 31 }
console.log('Same object?', obj1 === obj2); // true

// Example 3: Shallow Copy Methods
console.log('\n=== Example 3: Shallow Copy Methods ===');

const original = {
    name: 'Alice',
    age: 25,
    hobbies: ['reading', 'coding']
};

// Method 1: Object.assign()
const copy1 = Object.assign({}, original);
copy1.age = 26;
copy1.hobbies.push('gaming'); // Modifies original's hobbies array!

console.log('Original:', original);
console.log('Copy 1:', copy1);
console.log('Same hobbies array?', original.hobbies === copy1.hobbies); // true

// Method 2: Spread operator
const copy2 = { ...original };
copy2.name = 'Bob';
copy2.hobbies.push('swimming'); // Still modifies original!

console.log('Original hobbies:', original.hobbies);
console.log('Copy 2 hobbies:', copy2.hobbies);

// Example 4: Deep Copy
console.log('\n=== Example 4: Deep Copy ===');

// Method 1: JSON.parse(JSON.stringify()) - has limitations
const original2 = {
    name: 'Charlie',
    age: 30,
    nested: {
        value: 100,
        array: [1, 2, 3]
    },
    date: new Date() // Will become string
};

const deepCopy1 = JSON.parse(JSON.stringify(original2));
deepCopy1.nested.value = 200;
deepCopy1.nested.array.push(4);

console.log('Original nested value:', original2.nested.value); // 100 (unchanged)
console.log('Deep copy nested value:', deepCopy1.nested.value); // 200
console.log('Original array:', original2.nested.array); // [1, 2, 3]
console.log('Deep copy array:', deepCopy1.nested.array); // [1, 2, 3, 4]

// Method 2: Custom deep clone function
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

const original3 = {
    name: 'Diana',
    nested: { value: 50 },
    array: [1, 2, { inner: 'test' }]
};

const deepCopy2 = deepClone(original3);
deepCopy2.nested.value = 75;
deepCopy2.array[2].inner = 'modified';

console.log('Original nested:', original3.nested.value); // 50
console.log('Deep copy nested:', deepCopy2.nested.value); // 75
console.log('Original array inner:', original3.array[2].inner); // 'test'
console.log('Deep copy array inner:', deepCopy2.array[2].inner); // 'modified'

// Example 5: Real-world Example - State Management
console.log('\n=== Example 5: State Management ===');

// Bad: Mutating state directly
function updateUserBad(user, newAge) {
    user.age = newAge; // Mutates original
    return user;
}

// Good: Creating new object
function updateUserGood(user, newAge) {
    return { ...user, age: newAge }; // Creates new object
}

const user1 = { name: 'Alice', age: 25 };
const user2 = { name: 'Bob', age: 30 };

const updated1 = updateUserBad(user1, 26);
console.log('Original user1:', user1); // Modified!
console.log('Updated1:', updated1);
console.log('Same object?', user1 === updated1); // true

const updated2 = updateUserGood(user2, 31);
console.log('Original user2:', user2); // Unchanged
console.log('Updated2:', updated2);
console.log('Same object?', user2 === updated2); // false

// Array example
const numbers1 = [1, 2, 3];
const numbers2 = numbers1; // Reference
numbers2.push(4);

console.log('numbers1:', numbers1); // [1, 2, 3, 4] - modified!
console.log('numbers2:', numbers2); // [1, 2, 3, 4]

// Copy array
const numbers3 = [...numbers1]; // Shallow copy
numbers3.push(5);

console.log('numbers1:', numbers1); // [1, 2, 3, 4] - unchanged
console.log('numbers3:', numbers3); // [1, 2, 3, 4, 5]

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Copy vs Reference</h4>
        <p><strong>Primitives (Copy):</strong></p>
        <p>a = ${a}, b = ${b}</p>
        <p><strong>Objects (Reference):</strong></p>
        <p>obj1.age: ${obj1.age}, obj2.age: ${obj2.age}</p>
        <p><strong>Shallow Copy:</strong></p>
        <p>Original hobbies: [${original.hobbies.join(', ')}]</p>
        <p>Copy hobbies: [${copy1.hobbies.join(', ')}]</p>
        <p><strong>Deep Copy:</strong></p>
        <p>Original nested: ${original2.nested.value}</p>
        <p>Deep copy nested: ${deepCopy1.nested.value}</p>
        <p><strong>Key Takeaway:</strong> Use spread operator or Object.assign() for shallow copy, deepClone() for deep copy!</p>
    `;
    domOutput.appendChild(demoDiv);
}

