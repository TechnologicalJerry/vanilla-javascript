/*
Topic: Debouncing
Description: Debouncing limits the rate at which a function can fire.
A debounced function will only execute after a certain amount of time has passed
since it was last invoked. Useful for search inputs, resize events, etc.
*/

// Example 1: Basic Debounce Function
console.log('=== Example 1: Basic Debounce ===');

function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example usage
const debouncedLog = debounce((message) => {
    console.log('Debounced:', message);
}, 1000);

// Rapid calls - only last one executes
debouncedLog('Call 1');
debouncedLog('Call 2');
debouncedLog('Call 3');
// Only "Call 3" will be logged after 1 second

// Example 2: Debounce with Immediate Option
console.log('\n=== Example 2: Debounce with Immediate ===');

function debounceImmediate(func, delay, immediate = false) {
    let timeoutId;
    
    return function(...args) {
        const callNow = immediate && !timeoutId;
        
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            timeoutId = null;
            if (!immediate) {
                func.apply(this, args);
            }
        }, delay);
        
        if (callNow) {
            func.apply(this, args);
        }
    };
}

const immediateDebounce = debounceImmediate((message) => {
    console.log('Immediate debounce:', message);
}, 1000, true);

// Example 3: Real-world Example - Search Input
console.log('\n=== Example 3: Search Input ===');

function search(query) {
    console.log('Searching for:', query);
    // Simulate API call
    return `Results for "${query}"`;
}

const debouncedSearch = debounce(search, 500);

// Simulate user typing
debouncedSearch('j');
debouncedSearch('ja');
debouncedSearch('jav');
debouncedSearch('java');
// Only "java" search will execute

// Example 4: DOM Example - Search Input
console.log('\n=== Example 4: Search Input Demo ===');

const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const container = document.createElement('div');
    container.className = 'demo-box';
    
    const title = document.createElement('h4');
    title.textContent = 'Debounced Search';
    container.appendChild(title);
    
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Type to search (debounced 500ms)...';
    input.className = 'input-demo';
    input.style.width = '100%';
    
    const resultsDiv = document.createElement('div');
    resultsDiv.id = 'search-results';
    resultsDiv.style.marginTop = '10px';
    resultsDiv.style.padding = '10px';
    resultsDiv.style.backgroundColor = '#f0f0f0';
    resultsDiv.style.borderRadius = '4px';
    resultsDiv.style.minHeight = '30px';
    
    const countDiv = document.createElement('div');
    countDiv.id = 'search-count';
    countDiv.style.marginTop = '5px';
    countDiv.style.fontSize = '12px';
    countDiv.style.color = '#666';
    
    let searchCount = 0;
    let executeCount = 0;
    
    const debouncedSearch = debounce((query) => {
        executeCount++;
        if (query.trim()) {
            resultsDiv.textContent = `Searching for: "${query}" (Executed ${executeCount} times)`;
        } else {
            resultsDiv.textContent = 'Type to search...';
        }
        countDiv.textContent = `Searches executed: ${executeCount} | Keystrokes: ${searchCount}`;
    }, 500);
    
    input.addEventListener('input', function(e) {
        searchCount++;
        debouncedSearch(e.target.value);
        countDiv.textContent = `Searches executed: ${executeCount} | Keystrokes: ${searchCount}`;
    });
    
    container.appendChild(input);
    container.appendChild(resultsDiv);
    container.appendChild(countDiv);
    
    domOutput.appendChild(container);
}

// Example 5: Window Resize Debounce
console.log('\n=== Example 5: Window Resize ===');

const debouncedResize = debounce(() => {
    console.log('Window resized:', {
        width: window.innerWidth,
        height: window.innerHeight
    });
}, 250);

// window.addEventListener('resize', debouncedResize);

// Example 6: Button Click Debounce (Prevent Double Submit)
console.log('\n=== Example 6: Button Click Debounce ===');

function submitForm(data) {
    console.log('Form submitted:', data);
    // Simulate API call
    return 'Success';
}

const debouncedSubmit = debounce(submitForm, 2000);

// Simulate rapid clicks
debouncedSubmit({ name: 'John' });
debouncedSubmit({ name: 'John' });
debouncedSubmit({ name: 'John' });
// Only one submission after 2 seconds

// Example 7: Advanced Debounce with Cancel
console.log('\n=== Example 7: Advanced Debounce with Cancel ===');

function advancedDebounce(func, delay) {
    let timeoutId;
    let lastArgs;
    let lastThis;
    
    const debounced = function(...args) {
        lastArgs = args;
        lastThis = this;
        
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            func.apply(lastThis, lastArgs);
            timeoutId = null;
        }, delay);
    };
    
    debounced.cancel = function() {
        clearTimeout(timeoutId);
        timeoutId = null;
    };
    
    debounced.flush = function() {
        if (timeoutId) {
            clearTimeout(timeoutId);
            func.apply(lastThis, lastArgs);
            timeoutId = null;
        }
    };
    
    return debounced;
}

const advancedDebounced = advancedDebounce((message) => {
    console.log('Advanced debounce:', message);
}, 1000);

advancedDebounced('Message 1');
advancedDebounced('Message 2');
// advancedDebounced.cancel(); // Cancel pending execution
// advancedDebounced.flush(); // Execute immediately

// DOM Output
if (domOutput) {
    const infoBox = document.createElement('div');
    infoBox.className = 'demo-box';
    infoBox.style.marginTop = '20px';
    infoBox.innerHTML = `
        <h4>Debouncing</h4>
        <p><strong>Purpose:</strong> Limit function execution rate</p>
        <p><strong>Use Cases:</strong></p>
        <ul>
            <li>Search input (wait for user to stop typing)</li>
            <li>Window resize (limit resize calculations)</li>
            <li>Button clicks (prevent double submission)</li>
            <li>Scroll events (limit scroll handlers)</li>
        </ul>
        <p><strong>How it works:</strong> Only executes after delay period with no new calls</p>
    `;
    domOutput.appendChild(infoBox);
}

console.log('Debouncing examples created');

