/*
Topic: ES6 Modules - Export
Description: ES6 modules allow you to export functions, classes, and variables
from one file and import them in another. This file demonstrates exports.
*/

// Named exports
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

// Export constants
export const PI = 3.14159;
export const E = 2.71828;

// Export class
export class Calculator {
    constructor() {
        this.history = [];
    }
    
    add(a, b) {
        const result = a + b;
        this.history.push({ operation: 'add', a, b, result });
        return result;
    }
    
    subtract(a, b) {
        const result = a - b;
        this.history.push({ operation: 'subtract', a, b, result });
        return result;
    }
    
    getHistory() {
        return this.history;
    }
    
    clearHistory() {
        this.history = [];
    }
}

// Default export
export default function power(base, exponent) {
    return base ** exponent;
}

// Export all at once
// export { add, subtract, multiply, divide, PI, E, Calculator };

