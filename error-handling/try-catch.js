/*
Topic: Error Handling - Try/Catch
Description: Try/catch blocks allow graceful error handling.
Prevents application crashes and provides better user experience.
*/

// Example 1: Basic Try/Catch
console.log('=== Example 1: Basic Try/Catch ===');

try {
    // Code that might throw an error
    const result = 10 / 0;
    console.log('Result:', result);
    
    // Intentionally throw error
    throw new Error('Something went wrong!');
} catch (error) {
    console.error('Error caught:', error.message);
}

console.log('Code continues after error handling');

// Example 2: Try/Catch/Finally
console.log('\n=== Example 2: Try/Catch/Finally ===');

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    } catch (error) {
        console.error('Division error:', error.message);
        return null;
    } finally {
        console.log('Division operation completed');
    }
}

console.log('10 / 2:', divide(10, 2));
console.log('10 / 0:', divide(10, 0));

// Example 3: Error Types
console.log('\n=== Example 3: Error Types ===');

try {
    // ReferenceError
    console.log(undefinedVariable);
} catch (error) {
    if (error instanceof ReferenceError) {
        console.error('ReferenceError:', error.message);
    } else {
        console.error('Other error:', error);
    }
}

try {
    // TypeError
    const obj = null;
    console.log(obj.property);
} catch (error) {
    if (error instanceof TypeError) {
        console.error('TypeError:', error.message);
    }
}

try {
    // SyntaxError (caught at parse time, not runtime)
    // eval('invalid syntax here');
} catch (error) {
    console.error('SyntaxError:', error.message);
}

// Example 4: Custom Error Classes
console.log('\n=== Example 4: Custom Error Classes ===');

class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'NetworkError';
        this.statusCode = statusCode;
    }
}

function validateEmail(email) {
    if (!email) {
        throw new ValidationError('Email is required', 'email');
    }
    if (!email.includes('@')) {
        throw new ValidationError('Invalid email format', 'email');
    }
    return true;
}

try {
    validateEmail('invalid-email');
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Validation error in ${error.field}:`, error.message);
    } else {
        console.error('Unknown error:', error);
    }
}

// Example 5: Error Handling in Async Functions
console.log('\n=== Example 5: Async Error Handling ===');

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error.message);
        throw error; // Re-throw to let caller handle
    }
}

fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log('Data:', data))
    .catch(error => console.error('Failed:', error.message));

// Example 6: Nested Try/Catch
console.log('\n=== Example 6: Nested Try/Catch ===');

function processUserData(userData) {
    try {
        // Outer try
        if (!userData) {
            throw new Error('User data is required');
        }
        
        try {
            // Inner try
            const email = userData.email;
            if (!email) {
                throw new ValidationError('Email is required', 'email');
            }
            console.log('Email:', email);
        } catch (error) {
            if (error instanceof ValidationError) {
                console.error('Validation failed:', error.message);
                // Handle validation error, continue with outer try
            } else {
                throw error; // Re-throw other errors
            }
        }
        
        console.log('User data processed successfully');
    } catch (error) {
        console.error('Processing failed:', error.message);
    }
}

processUserData({ email: 'test@example.com' });
processUserData({});
processUserData(null);

// Example 7: Real-world Example - Form Validation
console.log('\n=== Example 7: Form Validation ===');

class FormValidator {
    static validate(formData) {
        const errors = [];
        
        try {
            // Validate name
            if (!formData.name || formData.name.trim().length < 2) {
                errors.push(new ValidationError('Name must be at least 2 characters', 'name'));
            }
            
            // Validate email
            if (!formData.email) {
                errors.push(new ValidationError('Email is required', 'email'));
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                errors.push(new ValidationError('Invalid email format', 'email'));
            }
            
            // Validate age
            const age = parseInt(formData.age);
            if (isNaN(age) || age < 18 || age > 100) {
                errors.push(new ValidationError('Age must be between 18 and 100', 'age'));
            }
            
            if (errors.length > 0) {
                throw errors;
            }
            
            return { valid: true, data: formData };
        } catch (error) {
            if (Array.isArray(error)) {
                return { valid: false, errors: error };
            }
            throw error;
        }
    }
}

const result1 = FormValidator.validate({
    name: 'John',
    email: 'john@example.com',
    age: 25
});
console.log('Valid form:', result1);

const result2 = FormValidator.validate({
    name: 'J',
    email: 'invalid',
    age: 15
});
console.log('Invalid form:', result2);

// Example 8: DOM Example - Error Handling UI
console.log('\n=== Example 8: Error Handling UI ===');

const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const container = document.createElement('div');
    container.className = 'demo-box';
    
    const title = document.createElement('h4');
    title.textContent = 'Error Handling Demo';
    container.appendChild(title);
    
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Enter a number (0 will cause error)';
    input.className = 'input-demo';
    input.style.width = '70%';
    input.style.marginRight = '10px';
    
    const calculateBtn = document.createElement('button');
    calculateBtn.textContent = 'Calculate (10 / input)';
    calculateBtn.className = 'demo-button';
    
    const resultDiv = document.createElement('div');
    resultDiv.id = 'calculation-result';
    resultDiv.style.marginTop = '10px';
    resultDiv.style.padding = '10px';
    resultDiv.style.borderRadius = '4px';
    resultDiv.style.minHeight = '30px';
    
    calculateBtn.addEventListener('click', function() {
        try {
            const value = parseFloat(input.value);
            
            if (isNaN(value)) {
                throw new ValidationError('Please enter a valid number', 'input');
            }
            
            if (value === 0) {
                throw new Error('Cannot divide by zero');
            }
            
            const result = 10 / value;
            resultDiv.textContent = `Result: ${result}`;
            resultDiv.style.backgroundColor = '#e8f5e9';
            resultDiv.style.color = '#2e7d32';
            
        } catch (error) {
            resultDiv.textContent = `Error: ${error.message}`;
            resultDiv.style.backgroundColor = '#ffebee';
            resultDiv.style.color = '#c62828';
        }
    });
    
    container.appendChild(input);
    container.appendChild(calculateBtn);
    container.appendChild(resultDiv);
    
    domOutput.appendChild(container);
}

console.log('Error handling examples created');

