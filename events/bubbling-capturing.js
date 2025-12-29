/*
Topic: Event Bubbling and Capturing
Description: Events propagate in two phases: capturing (down) and bubbling (up).
Understanding this is crucial for event handling and delegation.
*/

// Example 1: Event Bubbling
console.log('=== Example 1: Event Bubbling ===');

const domOutput = document.getElementById('dom-output');
if (domOutput) {
    domOutput.innerHTML = '';
    
    const container = document.createElement('div');
    container.className = 'demo-box';
    
    const title = document.createElement('h4');
    title.textContent = 'Event Bubbling (Default)';
    container.appendChild(title);
    
    // Create nested elements
    const outer = document.createElement('div');
    outer.id = 'outer';
    outer.style.padding = '30px';
    outer.style.backgroundColor = '#e3f2fd';
    outer.style.borderRadius = '8px';
    outer.style.cursor = 'pointer';
    
    const middle = document.createElement('div');
    middle.id = 'middle';
    middle.style.padding = '20px';
    middle.style.backgroundColor = '#90caf9';
    middle.style.borderRadius = '6px';
    middle.style.margin = '10px';
    middle.style.cursor = 'pointer';
    
    const inner = document.createElement('div');
    inner.id = 'inner';
    inner.textContent = 'Click me!';
    inner.style.padding = '15px';
    inner.style.backgroundColor = '#42a5f5';
    inner.style.borderRadius = '4px';
    inner.style.cursor = 'pointer';
    inner.style.color = 'white';
    inner.style.fontWeight = 'bold';
    
    // Add listeners (bubbling phase - default)
    outer.addEventListener('click', function(e) {
        console.log('Outer clicked (bubbling)');
        this.style.border = '3px solid red';
        setTimeout(() => {
            this.style.border = 'none';
        }, 1000);
    });
    
    middle.addEventListener('click', function(e) {
        console.log('Middle clicked (bubbling)');
        this.style.border = '3px solid orange';
        setTimeout(() => {
            this.style.border = 'none';
        }, 1000);
    });
    
    inner.addEventListener('click', function(e) {
        console.log('Inner clicked (bubbling)');
        this.style.border = '3px solid yellow';
        setTimeout(() => {
            this.style.border = 'none';
        }, 1000);
    });
    
    middle.appendChild(inner);
    outer.appendChild(middle);
    container.appendChild(outer);
    
    const info = document.createElement('p');
    info.textContent = 'Click the inner div - events bubble up (inner → middle → outer)';
    info.style.marginTop = '10px';
    info.style.fontSize = '14px';
    info.style.color = '#666';
    container.appendChild(info);
    
    domOutput.appendChild(container);
}

// Example 2: Event Capturing
console.log('\n=== Example 2: Event Capturing ===');

function createCapturingDemo() {
    const container = document.createElement('div');
    container.className = 'demo-box';
    container.style.marginTop = '20px';
    
    const title = document.createElement('h4');
    title.textContent = 'Event Capturing';
    container.appendChild(title);
    
    const outer = document.createElement('div');
    outer.id = 'outer-capture';
    outer.style.padding = '30px';
    outer.style.backgroundColor = '#fff3e0';
    outer.style.borderRadius = '8px';
    outer.style.cursor = 'pointer';
    
    const middle = document.createElement('div');
    middle.id = 'middle-capture';
    middle.style.padding = '20px';
    middle.style.backgroundColor = '#ffe0b2';
    middle.style.borderRadius = '6px';
    middle.style.margin = '10px';
    middle.style.cursor = 'pointer';
    
    const inner = document.createElement('div');
    inner.id = 'inner-capture';
    inner.textContent = 'Click me!';
    inner.style.padding = '15px';
    inner.style.backgroundColor = '#ffcc80';
    inner.style.borderRadius = '4px';
    inner.style.cursor = 'pointer';
    inner.style.fontWeight = 'bold';
    
    // Add listeners with capturing (true)
    outer.addEventListener('click', function(e) {
        console.log('Outer clicked (capturing)');
        this.style.border = '3px solid red';
        setTimeout(() => {
            this.style.border = 'none';
        }, 1000);
    }, true); // Capturing phase
    
    middle.addEventListener('click', function(e) {
        console.log('Middle clicked (capturing)');
        this.style.border = '3px solid orange';
        setTimeout(() => {
            this.style.border = 'none';
        }, 1000);
    }, true); // Capturing phase
    
    inner.addEventListener('click', function(e) {
        console.log('Inner clicked (capturing)');
        this.style.border = '3px solid yellow';
        setTimeout(() => {
            this.style.border = 'none';
        }, 1000);
    }, true); // Capturing phase
    
    middle.appendChild(inner);
    outer.appendChild(middle);
    container.appendChild(outer);
    
    const info = document.createElement('p');
    info.textContent = 'Click the inner div - events capture down (outer → middle → inner)';
    info.style.marginTop = '10px';
    info.style.fontSize = '14px';
    info.style.color = '#666';
    container.appendChild(info);
    
    if (domOutput) {
        domOutput.appendChild(container);
    }
    
    return container;
}

// Example 3: Stop Propagation
console.log('\n=== Example 3: Stop Propagation ===');

function createStopPropagationDemo() {
    const container = document.createElement('div');
    container.className = 'demo-box';
    container.style.marginTop = '20px';
    
    const title = document.createElement('h4');
    title.textContent = 'Stop Propagation';
    container.appendChild(title);
    
    const outer = document.createElement('div');
    outer.style.padding = '30px';
    outer.style.backgroundColor = '#f3e5f5';
    outer.style.borderRadius = '8px';
    outer.style.cursor = 'pointer';
    
    const inner = document.createElement('div');
    inner.textContent = 'Click me (stops propagation)';
    inner.style.padding = '15px';
    inner.style.backgroundColor = '#ce93d8';
    inner.style.borderRadius = '4px';
    inner.style.cursor = 'pointer';
    inner.style.fontWeight = 'bold';
    
    outer.addEventListener('click', function() {
        console.log('Outer clicked');
        alert('Outer clicked');
    });
    
    inner.addEventListener('click', function(e) {
        e.stopPropagation(); // Stops event from bubbling
        console.log('Inner clicked (propagation stopped)');
        alert('Inner clicked - outer will not receive event!');
    });
    
    outer.appendChild(inner);
    container.appendChild(outer);
    
    const info = document.createElement('p');
    info.textContent = 'Click inner - propagation is stopped, outer won\'t receive event';
    info.style.marginTop = '10px';
    info.style.fontSize = '14px';
    info.style.color = '#666';
    container.appendChild(info);
    
    if (domOutput) {
        domOutput.appendChild(container);
    }
    
    return container;
}

// Example 4: Event Phase
console.log('\n=== Example 4: Event Phase ===');

function demonstrateEventPhase() {
    const container = document.createElement('div');
    container.className = 'demo-box';
    container.style.marginTop = '20px';
    
    const title = document.createElement('h4');
    title.textContent = 'Event Phase Property';
    container.appendChild(title);
    
    const outer = document.createElement('div');
    outer.style.padding = '30px';
    outer.style.backgroundColor = '#e8f5e9';
    outer.style.borderRadius = '8px';
    outer.style.cursor = 'pointer';
    
    const inner = document.createElement('div');
    inner.textContent = 'Click me to see event phases';
    inner.style.padding = '15px';
    inner.style.backgroundColor = '#a5d6a7';
    inner.style.borderRadius = '4px';
    inner.style.cursor = 'pointer';
    inner.style.fontWeight = 'bold';
    
    // Listen on both phases
    outer.addEventListener('click', function(e) {
        const phase = e.eventPhase;
        const phaseName = phase === 1 ? 'CAPTURING' : phase === 2 ? 'AT_TARGET' : 'BUBBLING';
        console.log(`Outer - Phase: ${phaseName} (${phase})`);
    }, true); // Capturing
    
    outer.addEventListener('click', function(e) {
        const phase = e.eventPhase;
        const phaseName = phase === 1 ? 'CAPTURING' : phase === 2 ? 'AT_TARGET' : 'BUBBLING';
        console.log(`Outer - Phase: ${phaseName} (${phase})`);
    }); // Bubbling
    
    inner.addEventListener('click', function(e) {
        const phase = e.eventPhase;
        const phaseName = phase === 1 ? 'CAPTURING' : phase === 2 ? 'AT_TARGET' : 'BUBBLING';
        console.log(`Inner - Phase: ${phaseName} (${phase})`);
    });
    
    outer.appendChild(inner);
    container.appendChild(outer);
    
    const info = document.createElement('p');
    info.innerHTML = `
        <strong>Event Phases:</strong><br>
        1 = CAPTURING_PHASE<br>
        2 = AT_TARGET<br>
        3 = BUBBLING_PHASE<br>
        Check console for phase information
    `;
    info.style.marginTop = '10px';
    info.style.fontSize = '14px';
    info.style.color = '#666';
    container.appendChild(info);
    
    if (domOutput) {
        domOutput.appendChild(container);
    }
    
    return container;
}

// Example 5: Real-world Example - Modal with Stop Propagation
console.log('\n=== Example 5: Modal Example ===');

function createModalDemo() {
    const container = document.createElement('div');
    container.className = 'demo-box';
    container.style.marginTop = '20px';
    
    const title = document.createElement('h4');
    title.textContent = 'Modal (Stop Propagation)';
    container.appendChild(title);
    
    const openBtn = document.createElement('button');
    openBtn.textContent = 'Open Modal';
    openBtn.className = 'demo-button';
    
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.zIndex = '1000';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = 'white';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '8px';
    modalContent.style.maxWidth = '400px';
    modalContent.style.position = 'relative';
    
    const modalTitle = document.createElement('h3');
    modalTitle.textContent = 'Modal Title';
    modalContent.appendChild(modalTitle);
    
    const modalBody = document.createElement('p');
    modalBody.textContent = 'This is modal content. Click outside to close.';
    modalContent.appendChild(modalBody);
    
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.className = 'demo-button';
    closeBtn.style.marginTop = '10px';
    
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    
    // Open modal
    openBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });
    
    // Close on background click (stop propagation on content)
    modal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    modalContent.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent closing when clicking content
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    container.appendChild(openBtn);
    container.appendChild(modal);
    
    if (domOutput) {
        domOutput.appendChild(container);
    }
    
    return container;
}

// Create all examples
if (domOutput) {
    createCapturingDemo();
    createStopPropagationDemo();
    demonstrateEventPhase();
    createModalDemo();
    
    // Info box
    const infoBox = document.createElement('div');
    infoBox.className = 'demo-box';
    infoBox.style.marginTop = '20px';
    infoBox.innerHTML = `
        <h4>Event Bubbling vs Capturing</h4>
        <p><strong>Bubbling (default):</strong> Event travels from target up to document</p>
        <p><strong>Capturing:</strong> Event travels from document down to target</p>
        <p><strong>stopPropagation():</strong> Stops event from propagating</p>
        <p><strong>eventPhase:</strong> 1=Capturing, 2=Target, 3=Bubbling</p>
    `;
    domOutput.appendChild(infoBox);
}

console.log('Bubbling and capturing examples created');

