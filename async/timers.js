/*
Topic: Timers
Description: JavaScript provides timers for delaying execution and scheduling
repeated operations: setTimeout, setInterval, clearTimeout, clearInterval.
*/

// Example 1: setTimeout
console.log('=== Example 1: setTimeout ===');

console.log('Before setTimeout');

setTimeout(function() {
    console.log('This runs after 2 seconds');
}, 2000);

console.log('After setTimeout (runs immediately)');

// With arrow function
setTimeout(() => {
    console.log('Arrow function timeout');
}, 1000);

// With parameters
function greet(name, message) {
    console.log(`${message}, ${name}!`);
}

setTimeout(greet, 1500, 'John', 'Hello');

// Example 2: clearTimeout
console.log('\n=== Example 2: clearTimeout ===');

const timeoutId = setTimeout(() => {
    console.log('This should not run');
}, 3000);

console.log('Timeout scheduled, ID:', timeoutId);

// Clear it before it executes
clearTimeout(timeoutId);
console.log('Timeout cleared');

// Example 3: setInterval
console.log('\n=== Example 3: setInterval ===');

let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    
    if (count >= 5) {
        clearInterval(intervalId);
        console.log('Interval stopped');
    }
}, 1000);

// Example 4: Real-world Example - Countdown Timer
console.log('\n=== Example 4: Countdown Timer ===');

function createCountdown(seconds) {
    let remaining = seconds;
    
    const intervalId = setInterval(() => {
        console.log(`Time remaining: ${remaining} seconds`);
        remaining--;
        
        if (remaining < 0) {
            clearInterval(intervalId);
            console.log('Time\'s up!');
        }
    }, 1000);
    
    return intervalId;
}

// createCountdown(5);

// Example 5: Debouncing with setTimeout
console.log('\n=== Example 5: Debouncing ===');

function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const debouncedLog = debounce((message) => {
    console.log('Debounced:', message);
}, 1000);

// Simulate rapid calls
debouncedLog('Call 1');
debouncedLog('Call 2');
debouncedLog('Call 3');
// Only last call executes after delay

// Example 6: Throttling with setInterval
console.log('\n=== Example 6: Throttling ===');

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

const throttledLog = throttle((message) => {
    console.log('Throttled:', message);
}, 2000);

// Simulate rapid calls
throttledLog('Call 1');
throttledLog('Call 2');
throttledLog('Call 3');
// Only first call executes, others ignored

// Example 7: DOM Example - Timer UI
console.log('\n=== Example 7: Timer UI ===');

const domOutput = document.getElementById('dom-output');
if (domOutput) {
    domOutput.innerHTML = '';
    
    const container = document.createElement('div');
    container.className = 'demo-box';
    
    const title = document.createElement('h4');
    title.textContent = 'Timer Demo';
    container.appendChild(title);
    
    const display = document.createElement('div');
    display.id = 'timer-display';
    display.textContent = '0';
    display.style.fontSize = '48px';
    display.style.fontWeight = 'bold';
    display.style.textAlign = 'center';
    display.style.padding = '20px';
    display.style.margin = '20px 0';
    display.style.backgroundColor = '#f0f0f0';
    display.style.borderRadius = '8px';
    container.appendChild(display);
    
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '10px';
    buttonContainer.style.justifyContent = 'center';
    
    let timerValue = 0;
    let intervalId = null;
    
    const startBtn = document.createElement('button');
    startBtn.textContent = 'Start';
    startBtn.className = 'demo-button';
    startBtn.addEventListener('click', function() {
        if (!intervalId) {
            intervalId = setInterval(() => {
                timerValue++;
                display.textContent = timerValue;
            }, 1000);
        }
    });
    
    const stopBtn = document.createElement('button');
    stopBtn.textContent = 'Stop';
    stopBtn.className = 'demo-button';
    stopBtn.addEventListener('click', function() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    });
    
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    resetBtn.className = 'demo-button';
    resetBtn.addEventListener('click', function() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        timerValue = 0;
        display.textContent = timerValue;
    });
    
    buttonContainer.appendChild(startBtn);
    buttonContainer.appendChild(stopBtn);
    buttonContainer.appendChild(resetBtn);
    container.appendChild(buttonContainer);
    
    domOutput.appendChild(container);
}

// Example 8: requestAnimationFrame (for animations)
console.log('\n=== Example 8: requestAnimationFrame ===');

function animate() {
    let start = null;
    
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        
        console.log('Animation frame:', progress);
        
        if (progress < 2000) {
            requestAnimationFrame(step);
        } else {
            console.log('Animation complete');
        }
    }
    
    requestAnimationFrame(step);
}

// animate();

console.log('Timer examples created - check UI for interactive timer');

