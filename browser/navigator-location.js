/*
Topic: Navigator and Location
Description: Navigator API provides information about the browser and device.
Location API provides information about the current URL and navigation.
*/

// Example 1: Navigator Properties
console.log('=== Example 1: Navigator Properties ===');

console.log('User Agent:', navigator.userAgent);
console.log('Platform:', navigator.platform);
console.log('Language:', navigator.language);
console.log('Languages:', navigator.languages);
console.log('Cookie Enabled:', navigator.cookieEnabled);
console.log('Online Status:', navigator.onLine);
console.log('Hardware Concurrency:', navigator.hardwareConcurrency);
console.log('Device Memory:', navigator.deviceMemory || 'Not available');

// Example 2: Location Properties
console.log('\n=== Example 2: Location Properties ===');

console.log('Href:', window.location.href);
console.log('Protocol:', window.location.protocol);
console.log('Host:', window.location.host);
console.log('Hostname:', window.location.hostname);
console.log('Port:', window.location.port || 'default');
console.log('Pathname:', window.location.pathname);
console.log('Search:', window.location.search);
console.log('Hash:', window.location.hash);
console.log('Origin:', window.location.origin);

// Example 3: Location Methods
console.log('\n=== Example 3: Location Methods ===');

// Note: These would navigate, so commented out
// window.location.assign('https://example.com');
// window.location.replace('https://example.com');
// window.location.reload();

console.log('Location methods available: assign(), replace(), reload()');

// Example 4: Geolocation API
console.log('\n=== Example 4: Geolocation API ===');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            console.log('Latitude:', position.coords.latitude);
            console.log('Longitude:', position.coords.longitude);
            console.log('Accuracy:', position.coords.accuracy, 'meters');
        },
        function(error) {
            console.error('Geolocation error:', error.message);
        }
    );
} else {
    console.log('Geolocation not supported');
}

// Example 5: Online/Offline Events
console.log('\n=== Example 5: Online/Offline Events ===');

window.addEventListener('online', function() {
    console.log('Browser is online');
});

window.addEventListener('offline', function() {
    console.log('Browser is offline');
});

// Example 6: Real-world Example - Browser Detection
console.log('\n=== Example 6: Browser Detection ===');

function detectBrowser() {
    const ua = navigator.userAgent;
    let browser = 'Unknown';
    
    if (ua.indexOf('Chrome') > -1 && ua.indexOf('Edg') === -1) {
        browser = 'Chrome';
    } else if (ua.indexOf('Firefox') > -1) {
        browser = 'Firefox';
    } else if (ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1) {
        browser = 'Safari';
    } else if (ua.indexOf('Edg') > -1) {
        browser = 'Edge';
    }
    
    return browser;
}

console.log('Browser:', detectBrowser());

// Example 7: URL Parameters
console.log('\n=== Example 7: URL Parameters ===');

function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    const result = {};
    
    for (const [key, value] of params) {
        result[key] = value;
    }
    
    return result;
}

// Example: ?name=John&age=30
console.log('URL params:', getURLParams());

// Example 8: DOM Example - Browser Info Display
console.log('\n=== Example 8: Browser Info Display ===');

const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const container = document.createElement('div');
    container.className = 'demo-box';
    
    const title = document.createElement('h4');
    title.textContent = 'Browser & Location Info';
    container.appendChild(title);
    
    const infoDiv = document.createElement('div');
    infoDiv.style.marginTop = '10px';
    infoDiv.style.padding = '15px';
    infoDiv.style.backgroundColor = '#f0f0f0';
    infoDiv.style.borderRadius = '4px';
    infoDiv.style.fontFamily = 'monospace';
    infoDiv.style.fontSize = '12px';
    
    const info = {
        'Browser': detectBrowser(),
        'Platform': navigator.platform,
        'Language': navigator.language,
        'Online': navigator.onLine ? 'Yes' : 'No',
        'Cookie Enabled': navigator.cookieEnabled ? 'Yes' : 'No',
        'Current URL': window.location.href,
        'Hostname': window.location.hostname,
        'Pathname': window.location.pathname,
        'Protocol': window.location.protocol
    };
    
    infoDiv.innerHTML = Object.entries(info)
        .map(([key, value]) => `<strong>${key}:</strong> ${value}<br>`)
        .join('');
    
    container.appendChild(infoDiv);
    
    // Geolocation button
    const geoBtn = document.createElement('button');
    geoBtn.textContent = 'Get Location';
    geoBtn.className = 'demo-button';
    geoBtn.style.marginTop = '10px';
    
    const geoDiv = document.createElement('div');
    geoDiv.id = 'geo-info';
    geoDiv.style.marginTop = '10px';
    geoDiv.style.padding = '10px';
    geoDiv.style.backgroundColor = '#e3f2fd';
    geoDiv.style.borderRadius = '4px';
    geoDiv.style.display = 'none';
    
    geoBtn.addEventListener('click', function() {
        if (navigator.geolocation) {
            geoDiv.style.display = 'block';
            geoDiv.textContent = 'Requesting location...';
            
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    geoDiv.innerHTML = `
                        <strong>Location:</strong><br>
                        Latitude: ${position.coords.latitude.toFixed(6)}<br>
                        Longitude: ${position.coords.longitude.toFixed(6)}<br>
                        Accuracy: ${position.coords.accuracy} meters
                    `;
                },
                function(error) {
                    geoDiv.textContent = `Error: ${error.message}`;
                }
            );
        } else {
            geoDiv.textContent = 'Geolocation not supported';
            geoDiv.style.display = 'block';
        }
    });
    
    container.appendChild(geoBtn);
    container.appendChild(geoDiv);
    
    domOutput.appendChild(container);
}

console.log('Navigator and Location examples created');

