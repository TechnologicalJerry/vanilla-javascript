/*
Topic: Cookies
Description: Cookies are small pieces of data stored in the browser.
They are sent with every HTTP request. Useful for authentication, preferences.
*/

// Example 1: Setting Cookies
console.log('=== Example 1: Setting Cookies ===');

function setCookie(name, value, days = 7) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

// Set cookies
setCookie('username', 'john_doe', 7);
setCookie('theme', 'dark', 30);
setCookie('language', 'en', 365);

console.log('Cookies set');

// Example 2: Getting Cookies
console.log('\n=== Example 2: Getting Cookies ===');

function getCookie(name) {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');
    
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length);
        }
    }
    return null;
}

console.log('Username:', getCookie('username'));
console.log('Theme:', getCookie('theme'));
console.log('Language:', getCookie('language'));
console.log('Nonexistent:', getCookie('nonexistent'));

// Example 3: Deleting Cookies
console.log('\n=== Example 3: Deleting Cookies ===');

function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

// deleteCookie('username');
console.log('Cookie deletion function ready');

// Example 4: Cookie Utility Class
console.log('\n=== Example 4: Cookie Utility Class ===');

class CookieManager {
    static set(name, value, options = {}) {
        const {
            expires = 7, // days
            path = '/',
            domain = '',
            secure = false,
            sameSite = 'Lax'
        } = options;
        
        let cookie = `${name}=${encodeURIComponent(value)}`;
        
        if (expires) {
            const date = new Date();
            date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000));
            cookie += `;expires=${date.toUTCString()}`;
        }
        
        cookie += `;path=${path}`;
        
        if (domain) {
            cookie += `;domain=${domain}`;
        }
        
        if (secure) {
            cookie += ';secure';
        }
        
        cookie += `;sameSite=${sameSite}`;
        
        document.cookie = cookie;
    }
    
    static get(name) {
        const nameEQ = name + '=';
        const cookies = document.cookie.split(';');
        
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.indexOf(nameEQ) === 0) {
                return decodeURIComponent(cookie.substring(nameEQ.length));
            }
        }
        return null;
    }
    
    static getAll() {
        const cookies = {};
        document.cookie.split(';').forEach(cookie => {
            const [name, value] = cookie.trim().split('=');
            if (name && value) {
                cookies[name] = decodeURIComponent(value);
            }
        });
        return cookies;
    }
    
    static delete(name, path = '/') {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=${path};`;
    }
    
    static has(name) {
        return this.get(name) !== null;
    }
}

// Usage
CookieManager.set('preference', 'dark', { expires: 30 });
console.log('Preference:', CookieManager.get('preference'));
console.log('All cookies:', CookieManager.getAll());
console.log('Has preference:', CookieManager.has('preference'));

// Example 5: Storing Objects in Cookies
console.log('\n=== Example 5: Storing Objects in Cookies ===');

function setObjectCookie(name, obj, days = 7) {
    const json = JSON.stringify(obj);
    setCookie(name, json, days);
}

function getObjectCookie(name) {
    const value = getCookie(name);
    if (value) {
        try {
            return JSON.parse(value);
        } catch (e) {
            return null;
        }
    }
    return null;
}

const userPrefs = {
    theme: 'dark',
    fontSize: 16,
    notifications: true
};

setObjectCookie('userPreferences', userPrefs, 30);
const storedPrefs = getObjectCookie('userPreferences');
console.log('Stored preferences:', storedPrefs);

// Example 6: Real-world Example - Authentication Token
console.log('\n=== Example 6: Authentication Token ===');

class AuthCookie {
    static setToken(token, expiresInDays = 7) {
        CookieManager.set('authToken', token, {
            expires: expiresInDays,
            secure: true, // Only sent over HTTPS
            sameSite: 'Strict'
        });
    }
    
    static getToken() {
        return CookieManager.get('authToken');
    }
    
    static clearToken() {
        CookieManager.delete('authToken');
    }
    
    static isAuthenticated() {
        return this.getToken() !== null;
    }
}

// Simulate authentication
AuthCookie.setToken('abc123xyz', 7);
console.log('Token set:', AuthCookie.getToken());
console.log('Is authenticated:', AuthCookie.isAuthenticated());

// Example 7: DOM Example - Cookie Demo
console.log('\n=== Example 7: Cookie Demo ===');

const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const container = document.createElement('div');
    container.className = 'demo-box';
    container.style.marginTop = '20px';
    
    const title = document.createElement('h4');
    title.textContent = 'Cookie Demo';
    container.appendChild(title);
    
    const info = document.createElement('p');
    info.innerHTML = `
        <strong>Cookies:</strong><br>
        - Sent with every HTTP request<br>
        - Limited size (~4KB)<br>
        - Can set expiration date<br>
        - Can be secure (HTTPS only)<br>
        - Check browser DevTools > Application > Cookies
    `;
    info.style.margin = '10px 0';
    info.style.padding = '10px';
    info.style.backgroundColor = '#fff3e0';
    info.style.borderRadius = '4px';
    container.appendChild(info);
    
    const display = document.createElement('div');
    display.id = 'cookie-display';
    display.style.marginTop = '10px';
    display.style.padding = '10px';
    display.style.backgroundColor = '#f0f0f0';
    display.style.borderRadius = '4px';
    display.style.minHeight = '50px';
    
    function updateDisplay() {
        const cookies = CookieManager.getAll();
        display.innerHTML = '<strong>Current Cookies:</strong><br>' + 
            (Object.keys(cookies).length > 0 
                ? JSON.stringify(cookies, null, 2) 
                : 'No cookies set');
    }
    
    const setBtn = document.createElement('button');
    setBtn.textContent = 'Set Test Cookie';
    setBtn.className = 'demo-button';
    setBtn.style.marginRight = '10px';
    setBtn.addEventListener('click', function() {
        CookieManager.set('testCookie', 'testValue', { expires: 1 });
        updateDisplay();
    });
    
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear Test Cookie';
    clearBtn.className = 'demo-button';
    clearBtn.addEventListener('click', function() {
        CookieManager.delete('testCookie');
        updateDisplay();
    });
    
    container.appendChild(setBtn);
    container.appendChild(clearBtn);
    container.appendChild(display);
    
    updateDisplay();
    
    domOutput.appendChild(container);
}

console.log('Cookie examples created - check browser DevTools for cookies');

