/*
Topic: String Methods
Description: Strings have many built-in methods for manipulation, searching, and transformation.
Understanding these methods is essential for text processing.
*/

// Example 1: Basic String Methods
console.log('=== Example 1: Basic String Methods ===');

const str = 'Hello World';

// Length
console.log('Length:', str.length);

// Uppercase and lowercase
console.log('Uppercase:', str.toUpperCase());
console.log('Lowercase:', str.toLowerCase());

// Character access
console.log('First character:', str[0]);
console.log('Char at index 6:', str.charAt(6));

// Example 2: String Search Methods
console.log('\n=== Example 2: String Search Methods ===');

const text = 'JavaScript is awesome! JavaScript is powerful.';

// indexOf() - first occurrence
console.log('Index of "JavaScript":', text.indexOf('JavaScript'));
console.log('Index of "Python":', text.indexOf('Python')); // -1 if not found

// lastIndexOf() - last occurrence
console.log('Last index of "JavaScript":', text.lastIndexOf('JavaScript'));

// includes() - check if string contains substring
console.log('Includes "awesome":', text.includes('awesome'));
console.log('Includes "Python":', text.includes('Python'));

// startsWith() and endsWith()
console.log('Starts with "JavaScript":', text.startsWith('JavaScript'));
console.log('Ends with ".":', text.endsWith('.'));

// search() - regex search
console.log('Search for /is/g:', text.search(/is/g));

// Example 3: String Extraction Methods
console.log('\n=== Example 3: String Extraction Methods ===');

const sentence = 'The quick brown fox jumps over the lazy dog';

// slice() - extract portion
console.log('Slice(4, 9):', sentence.slice(4, 9)); // 'quick'
console.log('Slice(-9):', sentence.slice(-9)); // 'lazy dog'

// substring() - similar to slice
console.log('Substring(4, 9):', sentence.substring(4, 9));

// substr() - deprecated, use slice instead
console.log('Substr(4, 5):', sentence.substr(4, 5));

// split() - split into array
const words = sentence.split(' ');
console.log('Split by space:', words);

const csv = 'apple,banana,cherry,date';
const fruits = csv.split(',');
console.log('Split CSV:', fruits);

// Example 4: String Modification Methods
console.log('\n=== Example 4: String Modification Methods ===');

const original = '  Hello World  ';

// trim() - remove whitespace
console.log('Trimmed:', original.trim());
console.log('Trim start:', original.trimStart());
console.log('Trim end:', original.trimEnd());

// replace() - replace first occurrence
const replaced = 'Hello World'.replace('World', 'JavaScript');
console.log('Replaced:', replaced);

// replaceAll() - replace all occurrences
const text2 = 'cat dog cat dog';
const replacedAll = text2.replaceAll('cat', 'bird');
console.log('Replace all:', replacedAll);

// repeat() - repeat string
console.log('Repeat "Hi" 3 times:', 'Hi'.repeat(3));

// padStart() and padEnd()
console.log('Pad start:', '5'.padStart(3, '0')); // '005'
console.log('Pad end:', '5'.padEnd(3, '0')); // '500'

// Example 5: Real-world Example - Text Processing
console.log('\n=== Example 5: Text Processing ===');

function formatPhoneNumber(phone) {
    // Remove all non-digits
    const digits = phone.replace(/\D/g, '');

    // Format as (XXX) XXX-XXXX
    if (digits.length === 10) {
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    return phone;
}

console.log('Phone format:', formatPhoneNumber('1234567890'));
console.log('Phone format:', formatPhoneNumber('(123) 456-7890'));

function extractEmailDomain(email) {
    if (email.includes('@')) {
        return email.split('@')[1];
    }
    return null;
}

console.log('Email domain:', extractEmailDomain('user@example.com'));

function capitalizeWords(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

console.log('Capitalized:', capitalizeWords('hello world javascript'));

function validatePassword(password) {
    const checks = {
        length: password.length >= 8,
        hasUpper: /[A-Z]/.test(password),
        hasLower: /[a-z]/.test(password),
        hasNumber: /\d/.test(password),
        hasSpecial: /[!@#$%^&*]/.test(password)
    };

    return checks;
}

const passwordCheck = validatePassword('MyP@ssw0rd');
console.log('Password validation:', passwordCheck);

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>String Methods</h4>
        <p><strong>Original:</strong> "${str}"</p>
        <p><strong>Uppercase:</strong> ${str.toUpperCase()}</p>
        <p><strong>Lowercase:</strong> ${str.toLowerCase()}</p>
        <p><strong>Length:</strong> ${str.length}</p>
        <p><strong>Includes "World":</strong> ${str.includes('World')}</p>
        <p><strong>Phone Format:</strong> ${formatPhoneNumber('1234567890')}</p>
        <p><strong>Capitalized:</strong> ${capitalizeWords('hello world')}</p>
    `;
    domOutput.appendChild(demoDiv);
}

