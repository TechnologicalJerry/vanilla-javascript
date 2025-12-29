/*
Topic: DOM Manipulation
Description: Methods to modify DOM elements: content, attributes, styles, classes.
Essential for dynamic web applications.
*/

// Example 1: Content Manipulation
console.log('=== Example 1: Content Manipulation ===');

const domOutput = document.getElementById('dom-output');
if (domOutput) {
    // Clear existing content
    domOutput.innerHTML = '';
    
    // innerHTML - sets HTML content
    const div1 = document.createElement('div');
    div1.innerHTML = '<strong>Hello</strong> World';
    domOutput.appendChild(div1);
    
    // textContent - sets text content (safer, escapes HTML)
    const div2 = document.createElement('div');
    div2.textContent = '<script>alert("XSS")</script>'; // Escaped
    domOutput.appendChild(div2);
    
    // innerText - visible text only
    const div3 = document.createElement('div');
    div3.innerText = 'This is innerText';
    domOutput.appendChild(div3);
    
    console.log('Content manipulation examples created');
}

// Example 2: Attribute Manipulation
console.log('\n=== Example 2: Attribute Manipulation ===');

function createElementWithAttributes() {
    const img = document.createElement('img');
    
    // setAttribute
    img.setAttribute('src', 'https://via.placeholder.com/150');
    img.setAttribute('alt', 'Placeholder image');
    img.setAttribute('data-id', '123');
    
    // getAttribute
    console.log('Image src:', img.getAttribute('src'));
    console.log('Image alt:', img.getAttribute('alt'));
    
    // hasAttribute
    console.log('Has src:', img.hasAttribute('src'));
    
    // removeAttribute
    // img.removeAttribute('data-id');
    
    return img;
}

// Example 3: Style Manipulation
console.log('\n=== Example 3: Style Manipulation ===');

function styleElement() {
    const div = document.createElement('div');
    div.textContent = 'Styled Element';
    
    // Direct style property
    div.style.color = 'blue';
    div.style.backgroundColor = 'lightyellow';
    div.style.padding = '10px';
    div.style.borderRadius = '5px';
    div.style.margin = '10px 0';
    
    // Using cssText
    // div.style.cssText = 'color: blue; background: lightyellow; padding: 10px;';
    
    // Get computed style
    if (domOutput) {
        domOutput.appendChild(div);
        const computed = window.getComputedStyle(div);
        console.log('Computed color:', computed.color);
        console.log('Computed padding:', computed.padding);
    }
    
    return div;
}

// Example 4: Class Manipulation
console.log('\n=== Example 4: Class Manipulation ===');

function classManipulation() {
    const div = document.createElement('div');
    div.textContent = 'Class Manipulation Demo';
    
    // classList methods
    div.classList.add('demo-box');
    div.classList.add('highlight');
    console.log('Classes:', div.classList.toString());
    
    div.classList.remove('highlight');
    console.log('After remove:', div.classList.toString());
    
    div.classList.toggle('active');
    console.log('After toggle:', div.classList.toString());
    
    console.log('Has demo-box:', div.classList.contains('demo-box'));
    
    // Replace class
    div.classList.replace('demo-box', 'new-class');
    console.log('After replace:', div.classList.toString());
    
    if (domOutput) {
        domOutput.appendChild(div);
    }
    
    return div;
}

// Example 5: Real-world Example - Dynamic List
console.log('\n=== Example 5: Dynamic List ===');

function createDynamicList(items) {
    const container = document.createElement('div');
    container.className = 'demo-box';
    
    const title = document.createElement('h4');
    title.textContent = 'Dynamic List';
    container.appendChild(title);
    
    const list = document.createElement('ul');
    list.style.listStyle = 'none';
    list.style.padding = '0';
    
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.style.padding = '8px';
        li.style.margin = '4px 0';
        li.style.backgroundColor = index % 2 === 0 ? '#f0f0f0' : '#ffffff';
        li.style.borderRadius = '4px';
        
        // Add click handler
        li.addEventListener('click', function() {
            this.style.backgroundColor = '#667eea';
            this.style.color = 'white';
        });
        
        list.appendChild(li);
    });
    
    container.appendChild(list);
    
    if (domOutput) {
        domOutput.appendChild(container);
    }
    
    return container;
}

// Create examples
if (domOutput) {
    domOutput.innerHTML = '';
    
    // Create styled element
    styleElement();
    
    // Create class manipulation demo
    classManipulation();
    
    // Create dynamic list
    createDynamicList(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
    
    // Create info box
    const infoBox = document.createElement('div');
    infoBox.className = 'demo-box';
    infoBox.innerHTML = `
        <h4>DOM Manipulation Methods</h4>
        <ul>
            <li><strong>innerHTML:</strong> Set/get HTML content</li>
            <li><strong>textContent:</strong> Set/get text (safe)</li>
            <li><strong>setAttribute/getAttribute:</strong> Work with attributes</li>
            <li><strong>style:</strong> Modify inline styles</li>
            <li><strong>classList:</strong> Add/remove/toggle classes</li>
        </ul>
    `;
    domOutput.appendChild(infoBox);
}

console.log('DOM manipulation examples created');

