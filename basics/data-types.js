/*
Topic: Data Types
Description: JavaScript has 8 data types: 7 primitives and 1 object type.
Primitives: string, number, bigint, boolean, undefined, null, symbol
Object: object (arrays, functions, dates, etc. are objects)
*/

// Example 1: Primitive Data Types
console.log('=== Example 1: Primitive Data Types ===');

const stringType = 'Hello, World!';
const numberType = 42;
const bigIntType = 9007199254740991n;
const booleanType = true;
const undefinedType = undefined;
const nullType = null;
const symbolType = Symbol('unique');

console.log('String:', stringType, typeof stringType);
console.log('Number:', numberType, typeof numberType);
console.log('BigInt:', bigIntType, typeof bigIntType);
console.log('Boolean:', booleanType, typeof booleanType);
console.log('Undefined:', undefinedType, typeof undefinedType);
console.log('Null:', nullType, typeof nullType);
console.log('Symbol:', symbolType, typeof symbolType);

// Example 2: Object Types
console.log('\n=== Example 2: Object Types ===');

const objectType = { name: 'John', age: 30 };
const arrayType = [1, 2, 3, 4, 5];
const functionType = function() { return 'I am a function'; };
const dateType = new Date();

console.log('Object:', objectType, typeof objectType);
console.log('Array:', arrayType, typeof arrayType);
console.log('Function:', functionType, typeof functionType);
console.log('Date:', dateType, typeof dateType);

// Example 3: Type Checking in Real-world Scenario
console.log('\n=== Example 3: Type Checking - Form Validation ===');

function validateFormData(data) {
    const errors = [];
    
    if (typeof data.name !== 'string' || data.name.trim() === '') {
        errors.push('Name must be a non-empty string');
    }
    
    if (typeof data.age !== 'number' || data.age < 0) {
        errors.push('Age must be a positive number');
    }
    
    if (typeof data.email !== 'string' || !data.email.includes('@')) {
        errors.push('Email must be a valid string');
    }
    
    if (typeof data.isSubscribed !== 'boolean') {
        errors.push('Subscription status must be a boolean');
    }
    
    return errors.length === 0 ? 'Valid' : errors;
}

const formData1 = {
    name: 'Jane Doe',
    age: 25,
    email: 'jane@example.com',
    isSubscribed: true
};

const formData2 = {
    name: '',
    age: -5,
    email: 'invalid-email',
    isSubscribed: 'yes'
};

console.log('Form 1 Validation:', validateFormData(formData1));
console.log('Form 2 Validation:', validateFormData(formData2));

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Data Types Summary</h4>
        <p><strong>Primitives:</strong></p>
        <ul>
            <li>String: "${stringType}" (${typeof stringType})</li>
            <li>Number: ${numberType} (${typeof numberType})</li>
            <li>Boolean: ${booleanType} (${typeof booleanType})</li>
            <li>Undefined: ${undefinedType} (${typeof undefinedType})</li>
            <li>Null: ${nullType} (${typeof nullType})</li>
        </ul>
        <p><strong>Objects:</strong></p>
        <ul>
            <li>Object: ${JSON.stringify(objectType)} (${typeof objectType})</li>
            <li>Array: [${arrayType.join(', ')}] (${typeof arrayType})</li>
            <li>Function: ${typeof functionType}</li>
        </ul>
        <p><strong>Form Validation:</strong></p>
        <p>Form 1: ${validateFormData(formData1)}</p>
        <p>Form 2: ${Array.isArray(validateFormData(formData2)) ? validateFormData(formData2).join(', ') : validateFormData(formData2)}</p>
    `;
    domOutput.appendChild(demoDiv);
}

