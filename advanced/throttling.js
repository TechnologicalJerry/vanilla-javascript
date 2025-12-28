/*
Topic: Throttling
Description: Throttling limits how often a function can be called.
A throttled function will execute at most once per specified time period.
Useful for scroll events, mouse movements, etc.
*/

// Example 1: Basic Throttle Function
console.log('=== Example 1: Basic Throttle ===');

function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

// Example usage
const throttledLog = throttle((message) => {
    console.log('Throttled:', message);
}, 1000);

// Rapid calls - only first executes, others ignored
throttledLog('Call 1'); // Executes immediately
throttledLog('Call 2'); // Ignored
throttledLog('Call 3'); // Ignored
// After 1 second, next call will execute

// Example 2: Throttle with Leading and Trailing
console.log('\n=== Example 2: Throttle with Options ===');

function throttleAdvanced(func, limit, options = {}) {
    let lastFunc;
    let lastRan;
    const { leading = true, trailing = true } = options;
    
    return function(...args) {
        const context = this;
        
        if (!lastRan && leading) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if (trailing && Date.now() - lastRan >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Example 3: Real-world Example - Scroll Event
console.log('\n=== Example 3: Scroll Event ===');

function handleScroll() {
    console.log('Scroll position:', window.scrollY);
}

const throttledScroll = throttle(handleScroll, 200);

// window.addEventListener('scroll', throttledScroll);

// Example 4: Mouse Move Throttle
console.log('\n=== Example 4: Mouse Move ===');

function trackMousePosition(e) {
    console.log('Mouse position:', { x: e.clientX, y: e.clientY });
}

const throttledMouseMove = throttle(trackMousePosition, 100);

// document.addEventListener('mousemove', throttledMouseMove);

// Example 5: DOM Example - Scroll Indicator
console.log('\n=== Example 5: Scroll Indicator ===');

const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const container = document.createElement('div');
    container.className = 'demo-box';
    
    const title = document.createElement('h4');
    title.textContent = 'Throttled Scroll Indicator';
    container.appendChild(title);
    
    const scrollInfo = document.createElement('div');
    scrollInfo.id = 'scroll-info';
    scrollInfo.style.padding = '10px';
    scrollInfo.style.margin = '10px 0';
    scrollInfo.style.backgroundColor = '#e3f2fd';
    scrollInfo.style.borderRadius = '4px';
    scrollInfo.style.minHeight = '100px';
    scrollInfo.style.overflowY = 'auto';
    scrollInfo.style.maxHeight = '200px';
    
    // Add content to make it scrollable
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('p');
        p.textContent = `Line ${i + 1}: Scroll me to see throttled updates!`;
        p.style.padding = '5px';
        scrollInfo.appendChild(p);
    }
    
    const counterDiv = document.createElement('div');
    counterDiv.id = 'scroll-counter';
    counterDiv.style.marginTop = '10px';
    counterDiv.style.fontSize = '12px';
    counterDiv.style.color = '#666';
    
    let scrollCount = 0;
    let updateCount = 0;
    
    const throttledUpdate = throttle(() => {
        updateCount++;
        counterDiv.textContent = `Scroll events: ${scrollCount} | Updates: ${updateCount} (throttled to 200ms)`;
    }, 200);
    
    scrollInfo.addEventListener('scroll', function() {
        scrollCount++;
        throttledUpdate();
    });
    
    counterDiv.textContent = `Scroll events: 0 | Updates: 0 (throttled to 200ms)`;
    
    container.appendChild(scrollInfo);
    container.appendChild(counterDiv);
    
    domOutput.appendChild(container);
}

// Example 6: API Call Throttling
console.log('\n=== Example 6: API Call Throttling ===');

function makeApiCall(endpoint) {
    console.log('API call to:', endpoint);
    // Simulate API call
    return `Response from ${endpoint}`;
}

const throttledApiCall = throttle(makeApiCall, 2000);

// Rapid calls - only first executes
throttledApiCall('/users');
throttledApiCall('/users');
throttledApiCall('/users');
// Only first call executes, others ignored for 2 seconds

// Example 7: Throttle vs Debounce Comparison
console.log('\n=== Example 7: Throttle vs Debounce ===');

function logEvent(eventName) {
    console.log(`${eventName} fired at:`, new Date().toISOString());
}

const debouncedLog = debounce(() => logEvent('Debounced'), 1000);
const throttledLog2 = throttle(() => logEvent('Throttled'), 1000);

// Simulate rapid events
for (let i = 0; i < 5; i++) {
    debouncedLog();
    throttledLog2();
    // Small delay between calls
    setTimeout(() => {}, 100);
}

// Example 8: Advanced Throttle with Cancel
console.log('\n=== Example 8: Advanced Throttle with Cancel ===');

function advancedThrottle(func, limit) {
    let inThrottle;
    let lastArgs;
    let lastThis;
    
    const throttled = function(...args) {
        lastArgs = args;
        lastThis = this;
        
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
                if (lastArgs) {
                    throttled.apply(lastThis, lastArgs);
                    lastArgs = null;
                    lastThis = null;
                }
            }, limit);
        }
    };
    
    throttled.cancel = function() {
        inThrottle = false;
        lastArgs = null;
        lastThis = null;
    };
    
    return throttled;
}

const advancedThrottled = advancedThrottle((message) => {
    console.log('Advanced throttle:', message);
}, 1000);

// DOM Output
if (domOutput) {
    const infoBox = document.createElement('div');
    infoBox.className = 'demo-box';
    infoBox.style.marginTop = '20px';
    infoBox.innerHTML = `
        <h4>Throttling</h4>
        <p><strong>Purpose:</strong> Limit function execution frequency</p>
        <p><strong>Use Cases:</strong></p>
        <ul>
            <li>Scroll events (update UI periodically)</li>
            <li>Mouse move (track cursor position)</li>
            <li>Resize events (limit calculations)</li>
            <li>API calls (prevent rate limiting)</li>
        </ul>
        <p><strong>Difference from Debounce:</strong></p>
        <ul>
            <li><strong>Throttle:</strong> Executes at regular intervals</li>
            <li><strong>Debounce:</strong> Executes after delay with no new calls</li>
        </ul>
    `;
    domOutput.appendChild(infoBox);
}

// Helper function for debounce (used in comparison)
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

console.log('Throttling examples created');

