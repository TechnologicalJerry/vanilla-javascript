/*
Topic: Creating DOM Elements
Description: Methods to create, append, and remove DOM elements dynamically.
Essential for building interactive web applications.
*/

// Example 1: Creating Elements
console.log('=== Example 1: Creating Elements ===');

// createElement
const div = document.createElement('div');
div.textContent = 'Created with createElement';
console.log('Created div:', div);

// createTextNode
const textNode = document.createTextNode('Text node content');
console.log('Created text node:', textNode);

// createDocumentFragment (efficient for multiple elements)
const fragment = document.createDocumentFragment();
console.log('Created fragment:', fragment);

// Example 2: Appending Elements
console.log('\n=== Example 2: Appending Elements ===');

const domOutput = document.getElementById('dom-output');
if (domOutput) {
    domOutput.innerHTML = '';
    
    // appendChild
    const container = document.createElement('div');
    container.className = 'demo-box';
    
    const title = document.createElement('h4');
    title.textContent = 'Appending Elements Demo';
    container.appendChild(title);
    
    // append (modern, supports multiple nodes)
    const p1 = document.createElement('p');
    p1.textContent = 'Paragraph 1';
    const p2 = document.createElement('p');
    p2.textContent = 'Paragraph 2';
    container.append(p1, p2); // Can append multiple
    
    // prepend (adds to beginning)
    const firstP = document.createElement('p');
    firstP.textContent = 'First paragraph (prepended)';
    firstP.style.color = 'blue';
    container.prepend(firstP);
    
    // insertBefore
    const middleP = document.createElement('p');
    middleP.textContent = 'Middle paragraph (inserted)';
    middleP.style.color = 'green';
    container.insertBefore(middleP, p1);
    
    domOutput.appendChild(container);
}

// Example 3: Removing Elements
console.log('\n=== Example 3: Removing Elements ===');

function createRemovableElements() {
    const container = document.createElement('div');
    container.className = 'demo-box';
    
    const title = document.createElement('h4');
    title.textContent = 'Removing Elements';
    container.appendChild(title);
    
    // Create removable items
    for (let i = 1; i <= 3; i++) {
        const item = document.createElement('div');
        item.id = `item-${i}`;
        item.textContent = `Item ${i} (click to remove)`;
        item.style.padding = '10px';
        item.style.margin = '5px 0';
        item.style.backgroundColor = '#f0f0f0';
        item.style.cursor = 'pointer';
        item.style.borderRadius = '4px';
        
        item.addEventListener('click', function() {
            this.remove(); // Modern way
            // container.removeChild(this); // Traditional way
            console.log(`Removed item ${i}`);
        });
        
        container.appendChild(item);
    }
    
    if (domOutput) {
        domOutput.appendChild(container);
    }
    
    return container;
}

// Example 4: Cloning Elements
console.log('\n=== Example 4: Cloning Elements ===');

function cloneElements() {
    const container = document.createElement('div');
    container.className = 'demo-box';
    
    const title = document.createElement('h4');
    title.textContent = 'Cloning Elements';
    container.appendChild(title);
    
    // Original element
    const original = document.createElement('div');
    original.textContent = 'Original Element';
    original.style.padding = '10px';
    original.style.backgroundColor = '#e3f2fd';
    original.style.margin = '5px 0';
    original.style.borderRadius = '4px';
    container.appendChild(original);
    
    // Shallow clone (no children)
    const shallowClone = original.cloneNode(false);
    shallowClone.textContent = 'Shallow Clone';
    shallowClone.style.backgroundColor = '#fff3e0';
    container.appendChild(shallowClone);
    
    // Deep clone (with children)
    const deepClone = original.cloneNode(true);
    deepClone.textContent = 'Deep Clone';
    deepClone.style.backgroundColor = '#f3e5f5';
    container.appendChild(deepClone);
    
    if (domOutput) {
        domOutput.appendChild(container);
    }
    
    return container;
}

// Example 5: Real-world Example - Dynamic Form Builder
console.log('\n=== Example 5: Dynamic Form Builder ===');

function createFormBuilder() {
    const container = document.createElement('div');
    container.className = 'demo-box';
    
    const title = document.createElement('h4');
    title.textContent = 'Dynamic Form Builder';
    container.appendChild(title);
    
    // Form container
    const form = document.createElement('form');
    form.id = 'dynamic-form';
    
    // Create input fields
    const fields = [
        { type: 'text', name: 'name', placeholder: 'Name', required: true },
        { type: 'email', name: 'email', placeholder: 'Email', required: true },
        { type: 'tel', name: 'phone', placeholder: 'Phone', required: false }
    ];
    
    fields.forEach(field => {
        const div = document.createElement('div');
        div.style.marginBottom = '10px';
        
        const label = document.createElement('label');
        label.textContent = field.placeholder + ': ';
        label.setAttribute('for', field.name);
        div.appendChild(label);
        
        const input = document.createElement('input');
        input.type = field.type;
        input.name = field.name;
        input.placeholder = field.placeholder;
        input.required = field.required;
        input.style.padding = '8px';
        input.style.width = '200px';
        input.style.border = '1px solid #ddd';
        input.style.borderRadius = '4px';
        div.appendChild(input);
        
        form.appendChild(div);
    });
    
    // Submit button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Submit';
    submitBtn.className = 'demo-button';
    submitBtn.style.marginTop = '10px';
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        console.log('Form data:', data);
        alert('Form submitted! Check console.');
    });
    
    form.appendChild(submitBtn);
    container.appendChild(form);
    
    if (domOutput) {
        domOutput.appendChild(container);
    }
    
    return container;
}

// Create all examples
if (domOutput) {
    // Append examples
    createRemovableElements();
    cloneElements();
    createFormBuilder();
    
    // Info box
    const infoBox = document.createElement('div');
    infoBox.className = 'demo-box';
    infoBox.innerHTML = `
        <h4>Creating Elements</h4>
        <ul>
            <li><strong>createElement:</strong> Create new element</li>
            <li><strong>appendChild/append:</strong> Add to DOM</li>
            <li><strong>prepend:</strong> Add to beginning</li>
            <li><strong>insertBefore:</strong> Insert at specific position</li>
            <li><strong>remove/removeChild:</strong> Remove elements</li>
            <li><strong>cloneNode:</strong> Clone elements</li>
        </ul>
    `;
    domOutput.appendChild(infoBox);
}

console.log('Element creation examples ready');

