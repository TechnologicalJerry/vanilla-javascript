/*
Topic: Session Storage
Description: sessionStorage is similar to localStorage but data is cleared
when the browser tab/window is closed. Perfect for temporary data.
*/

// Example 1: Basic Session Storage Operations
console.log('=== Example 1: Basic Session Storage Operations ===');

// Set item
sessionStorage.setItem('sessionId', 'abc123');
sessionStorage.setItem('pageViews', '5');

// Get item
const sessionId = sessionStorage.getItem('sessionId');
console.log('Session ID:', sessionId);

// Remove item
// sessionStorage.removeItem('pageViews');

// Clear all
// sessionStorage.clear();

// Get length
console.log('Session storage items:', sessionStorage.length);

// Example 2: Session vs Local Storage
console.log('\n=== Example 2: Session vs Local Storage ===');

// Local storage persists across tabs
localStorage.setItem('persistent', 'This persists');

// Session storage is tab-specific
sessionStorage.setItem('temporary', 'This is temporary');

console.log('Local storage:', localStorage.getItem('persistent'));
console.log('Session storage:', sessionStorage.getItem('temporary'));

// Example 3: Shopping Cart (Session Storage)
console.log('\n=== Example 3: Shopping Cart ===');

class ShoppingCart {
    static addItem(item) {
        const cart = this.getCart();
        cart.push(item);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        return cart;
    }
    
    static removeItem(index) {
        const cart = this.getCart();
        cart.splice(index, 1);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        return cart;
    }
    
    static getCart() {
        const stored = sessionStorage.getItem('cart');
        return stored ? JSON.parse(stored) : [];
    }
    
    static clearCart() {
        sessionStorage.removeItem('cart');
    }
    
    static getTotal() {
        const cart = this.getCart();
        return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
}

// Usage
ShoppingCart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 });
ShoppingCart.addItem({ id: 2, name: 'Mouse', price: 29, quantity: 2 });
console.log('Cart:', ShoppingCart.getCart());
console.log('Total:', ShoppingCart.getTotal());

// Example 4: Form Data Persistence
console.log('\n=== Example 4: Form Data Persistence ===');

function saveFormData(formData) {
    sessionStorage.setItem('formData', JSON.stringify(formData));
}

function loadFormData() {
    const stored = sessionStorage.getItem('formData');
    return stored ? JSON.parse(stored) : null;
}

// Simulate form data
saveFormData({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'This is a test message'
});

console.log('Saved form data:', loadFormData());

// Example 5: Page View Counter
console.log('\n=== Example 5: Page View Counter ===');

function incrementPageViews() {
    const current = parseInt(sessionStorage.getItem('pageViews') || '0');
    const updated = current + 1;
    sessionStorage.setItem('pageViews', updated.toString());
    return updated;
}

const views = incrementPageViews();
console.log('Page views this session:', views);

// Example 6: DOM Example - Session Storage Demo
console.log('\n=== Example 6: Session Storage Demo ===');

const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const container = document.createElement('div');
    container.className = 'demo-box';
    container.style.marginTop = '20px';
    
    const title = document.createElement('h4');
    title.textContent = 'Session Storage Demo';
    container.appendChild(title);
    
    const info = document.createElement('p');
    info.innerHTML = `
        <strong>Session Storage:</strong><br>
        - Data persists only for the current tab/window<br>
        - Data is cleared when tab is closed<br>
        - Perfect for temporary data like shopping carts<br>
        - Same API as localStorage
    `;
    info.style.margin = '10px 0';
    info.style.padding = '10px';
    info.style.backgroundColor = '#e3f2fd';
    info.style.borderRadius = '4px';
    container.appendChild(info);
    
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter session data...';
    input.className = 'input-demo';
    input.style.width = '70%';
    input.style.marginRight = '10px';
    
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save to Session';
    saveBtn.className = 'demo-button';
    
    const display = document.createElement('div');
    display.id = 'session-display';
    display.style.marginTop = '10px';
    display.style.padding = '10px';
    display.style.backgroundColor = '#f0f0f0';
    display.style.borderRadius = '4px';
    display.style.minHeight = '50px';
    
    function updateDisplay() {
        const stored = sessionStorage.getItem('demo-session-data');
        display.textContent = stored || 'No data stored';
    }
    
    saveBtn.addEventListener('click', function() {
        const value = input.value.trim();
        if (value) {
            sessionStorage.setItem('demo-session-data', value);
            updateDisplay();
            input.value = '';
        }
    });
    
    container.appendChild(input);
    container.appendChild(saveBtn);
    container.appendChild(display);
    
    updateDisplay();
    
    domOutput.appendChild(container);
}

console.log('Session storage examples created');

