/*
Topic: Event Basics
Description: Events allow JavaScript to respond to user interactions and browser events.
addEventListener, removeEventListener, and event object properties.
*/

// Example 1: Basic Event Listeners
console.log('=== Example 1: Basic Event Listeners ===');

const domOutput = document.getElementById('dom-output');
if (domOutput) {
    domOutput.innerHTML = '';
    
    const container = document.createElement('div');
    container.className = 'demo-box';
    
    const title = document.createElement('h4');
    title.textContent = 'Event Basics Demo';
    container.appendChild(title);
    
    // Click event
    const clickBtn = document.createElement('button');
    clickBtn.textContent = 'Click Me';
    clickBtn.className = 'demo-button';
    clickBtn.addEventListener('click', function() {
        console.log('Button clicked!');
        alert('Button was clicked!');
    });
    container.appendChild(clickBtn);
    
    // Mouse events
    const mouseDiv = document.createElement('div');
    mouseDiv.textContent = 'Hover over me (mouse events)';
    mouseDiv.style.padding = '20px';
    mouseDiv.style.margin = '10px 0';
    mouseDiv.style.backgroundColor = '#e3f2fd';
    mouseDiv.style.borderRadius = '4px';
    mouseDiv.style.cursor = 'pointer';
    
    mouseDiv.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#90caf9';
        console.log('Mouse entered');
    });
    
    mouseDiv.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#e3f2fd';
        console.log('Mouse left');
    });
    
    mouseDiv.addEventListener('mousedown', function() {
        this.style.backgroundColor = '#42a5f5';
        console.log('Mouse down');
    });
    
    mouseDiv.addEventListener('mouseup', function() {
        this.style.backgroundColor = '#90caf9';
        console.log('Mouse up');
    });
    
    container.appendChild(mouseDiv);
    
    // Keyboard events
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Type here (keyboard events)';
    input.className = 'input-demo';
    input.style.width = '100%';
    
    input.addEventListener('keydown', function(e) {
        console.log('Key down:', e.key);
    });
    
    input.addEventListener('keyup', function(e) {
        console.log('Key up:', e.key);
    });
    
    input.addEventListener('keypress', function(e) {
        console.log('Key press:', e.key);
    });
    
    input.addEventListener('input', function(e) {
        console.log('Input value:', e.target.value);
    });
    
    container.appendChild(input);
    
    domOutput.appendChild(container);
}

// Example 2: Event Object
console.log('\n=== Example 2: Event Object ===');

function logEventDetails(e) {
    console.log('Event type:', e.type);
    console.log('Target:', e.target);
    console.log('Current target:', e.currentTarget);
    console.log('Timestamp:', e.timeStamp);
    console.log('Bubbles:', e.bubbles);
    console.log('Cancelable:', e.cancelable);
    
    if (e.type === 'click' || e.type.includes('mouse')) {
        console.log('Client X:', e.clientX);
        console.log('Client Y:', e.clientY);
        console.log('Button:', e.button);
    }
    
    if (e.type.includes('key')) {
        console.log('Key:', e.key);
        console.log('Code:', e.code);
        console.log('Ctrl:', e.ctrlKey);
        console.log('Shift:', e.shiftKey);
        console.log('Alt:', e.altKey);
    }
}

// Example 3: Event Methods
console.log('\n=== Example 3: Event Methods ===');

function demonstrateEventMethods() {
    const container = document.createElement('div');
    container.className = 'demo-box';
    container.style.marginTop = '20px';
    
    const title = document.createElement('h4');
    title.textContent = 'Event Methods';
    container.appendChild(title);
    
    // preventDefault
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'Click me (preventDefault)';
    link.style.display = 'block';
    link.style.margin = '10px 0';
    link.style.color = '#667eea';
    link.style.textDecoration = 'underline';
    link.style.cursor = 'pointer';
    
    link.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Default action prevented');
        alert('Link click prevented!');
    });
    
    container.appendChild(link);
    
    // stopPropagation
    const outer = document.createElement('div');
    outer.style.padding = '20px';
    outer.style.backgroundColor = '#fff3e0';
    outer.style.borderRadius = '4px';
    outer.style.margin = '10px 0';
    
    const inner = document.createElement('div');
    inner.textContent = 'Inner (stops propagation)';
    inner.style.padding = '10px';
    inner.style.backgroundColor = '#ffe0b2';
    inner.style.borderRadius = '4px';
    inner.style.cursor = 'pointer';
    
    outer.addEventListener('click', function() {
        console.log('Outer clicked');
        alert('Outer clicked');
    });
    
    inner.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('Inner clicked (propagation stopped)');
        alert('Inner clicked - propagation stopped!');
    });
    
    outer.appendChild(inner);
    container.appendChild(outer);
    
    if (domOutput) {
        domOutput.appendChild(container);
    }
    
    return container;
}

// Example 4: Remove Event Listeners
console.log('\n=== Example 4: Remove Event Listeners ===');

function demonstrateRemoveListener() {
    const container = document.createElement('div');
    container.className = 'demo-box';
    container.style.marginTop = '20px';
    
    const title = document.createElement('h4');
    title.textContent = 'Remove Event Listener';
    container.appendChild(title);
    
    const btn = document.createElement('button');
    btn.textContent = 'Click me (will be removed after 3 clicks)';
    btn.className = 'demo-button';
    
    let clickCount = 0;
    
    function handleClick() {
        clickCount++;
        console.log(`Clicked ${clickCount} times`);
        
        if (clickCount >= 3) {
            btn.removeEventListener('click', handleClick);
            btn.textContent = 'Event listener removed!';
            btn.disabled = true;
            console.log('Event listener removed');
        }
    }
    
    btn.addEventListener('click', handleClick);
    container.appendChild(btn);
    
    if (domOutput) {
        domOutput.appendChild(container);
    }
    
    return container;
}

// Example 5: Common Events
console.log('\n=== Example 5: Common Events ===');

function createEventDemo() {
    const container = document.createElement('div');
    container.className = 'demo-box';
    container.style.marginTop = '20px';
    
    const title = document.createElement('h4');
    title.textContent = 'Common Events';
    container.appendChild(title);
    
    // Focus events
    const focusInput = document.createElement('input');
    focusInput.type = 'text';
    focusInput.placeholder = 'Focus/blur events';
    focusInput.className = 'input-demo';
    focusInput.style.width = '100%';
    
    focusInput.addEventListener('focus', function() {
        this.style.borderColor = '#667eea';
        this.style.outline = '2px solid #667eea';
        console.log('Input focused');
    });
    
    focusInput.addEventListener('blur', function() {
        this.style.borderColor = '#ddd';
        this.style.outline = 'none';
        console.log('Input blurred');
    });
    
    container.appendChild(focusInput);
    
    // Change event
    const select = document.createElement('select');
    select.className = 'input-demo';
    select.style.width = '100%';
    ['Option 1', 'Option 2', 'Option 3'].forEach((opt, i) => {
        const option = document.createElement('option');
        option.value = i + 1;
        option.textContent = opt;
        select.appendChild(option);
    });
    
    select.addEventListener('change', function(e) {
        console.log('Selection changed:', e.target.value);
        alert(`Selected: ${e.target.value}`);
    });
    
    container.appendChild(select);
    
    // Double click
    const dblClickDiv = document.createElement('div');
    dblClickDiv.textContent = 'Double click me';
    dblClickDiv.style.padding = '10px';
    dblClickDiv.style.margin = '10px 0';
    dblClickDiv.style.backgroundColor = '#f3e5f5';
    dblClickDiv.style.borderRadius = '4px';
    dblClickDiv.style.cursor = 'pointer';
    
    dblClickDiv.addEventListener('dblclick', function() {
        console.log('Double clicked!');
        this.style.backgroundColor = '#ce93d8';
    });
    
    container.appendChild(dblClickDiv);
    
    if (domOutput) {
        domOutput.appendChild(container);
    }
    
    return container;
}

// Create all demos
if (domOutput) {
    demonstrateEventMethods();
    demonstrateRemoveListener();
    createEventDemo();
}

console.log('Event examples created');

