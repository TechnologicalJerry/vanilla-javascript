/*
Topic: DOM Selectors
Description: Methods to select and access DOM elements.
querySelector, getElementById, getElementsByClassName, etc.
*/

// Example 1: Basic Selectors
console.log('=== Example 1: Basic Selectors ===');

// getElementById - selects single element by ID
const elementById = document.getElementById('output');
console.log('Element by ID:', elementById);

// getElementsByClassName - returns HTMLCollection
const elementsByClass = document.getElementsByClassName('demo-box');
console.log('Elements by class:', elementsByClass);

// getElementsByTagName - returns HTMLCollection
const elementsByTag = document.getElementsByTagName('button');
console.log('Elements by tag:', elementsByTag);

// querySelector - selects first matching element
const firstButton = document.querySelector('button');
console.log('First button:', firstButton);

// querySelectorAll - returns NodeList
const allButtons = document.querySelectorAll('button');
console.log('All buttons:', allButtons);

// Example 2: Advanced Selectors
console.log('\n=== Example 2: Advanced Selectors ===');

// CSS selector syntax
const navButtons = document.querySelectorAll('nav button');
console.log('Nav buttons:', navButtons.length);

// Attribute selectors
const buttonsWithOnclick = document.querySelectorAll('button[onclick]');
console.log('Buttons with onclick:', buttonsWithOnclick.length);

// Pseudo-selectors
const firstNavSection = document.querySelector('.nav-section:first-child');
console.log('First nav section:', firstNavSection);

// Example 3: Traversing DOM
console.log('\n=== Example 3: DOM Traversal ===');

const output = document.getElementById('output');
if (output) {
    // Parent
    console.log('Parent:', output.parentElement);
    
    // Children
    console.log('Children:', output.children);
    
    // First and last child
    console.log('First child:', output.firstElementChild);
    console.log('Last child:', output.lastElementChild);
    
    // Siblings
    console.log('Next sibling:', output.nextElementSibling);
    console.log('Previous sibling:', output.previousElementSibling);
}

// Example 4: Real-world Example - Dynamic Selection
console.log('\n=== Example 4: Dynamic Selection ===');

function selectByDataAttribute(attribute, value) {
    return document.querySelector(`[data-${attribute}="${value}"]`);
}

function selectAllByDataAttribute(attribute, value) {
    return document.querySelectorAll(`[data-${attribute}="${value}"]`);
}

// Create demo elements
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    // Clear and create demo
    domOutput.innerHTML = '';
    
    const container = document.createElement('div');
    container.className = 'demo-box';
    container.innerHTML = `
        <h4>DOM Selectors Demo</h4>
        <div data-section="demo" data-id="1">Section 1</div>
        <div data-section="demo" data-id="2">Section 2</div>
        <div data-section="test" data-id="3">Section 3</div>
        <button class="demo-button" onclick="console.log('Clicked!')">Click Me</button>
        <p class="info">This is a paragraph</p>
    `;
    domOutput.appendChild(container);
    
    // Select by data attribute
    const demoSections = document.querySelectorAll('[data-section="demo"]');
    console.log('Demo sections:', demoSections.length);
    
    // Select by class
    const buttons = container.querySelectorAll('.demo-button');
    console.log('Demo buttons:', buttons.length);
    
    // Select by tag
    const paragraphs = container.querySelectorAll('p');
    console.log('Paragraphs:', paragraphs.length);
}

// DOM Output
if (domOutput) {
    const infoDiv = document.createElement('div');
    infoDiv.className = 'demo-box';
    infoDiv.style.marginTop = '20px';
    infoDiv.innerHTML = `
        <h4>Selector Methods</h4>
        <ul>
            <li><strong>getElementById:</strong> Select by ID</li>
            <li><strong>getElementsByClassName:</strong> Select by class</li>
            <li><strong>querySelector:</strong> CSS selector (first match)</li>
            <li><strong>querySelectorAll:</strong> CSS selector (all matches)</li>
            <li><strong>getElementsByTagName:</strong> Select by tag name</li>
        </ul>
        <p><strong>Best Practice:</strong> Use querySelector/querySelectorAll for flexibility!</p>
    `;
    domOutput.appendChild(infoDiv);
}

