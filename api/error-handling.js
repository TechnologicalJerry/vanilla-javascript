/*
Topic: API Error Handling
Description: Comprehensive error handling for API requests.
Handles network errors, HTTP errors, and response parsing errors.
*/

// Example 1: Basic Error Handling
console.log('=== Example 1: Basic Error Handling ===');

async function fetchWithBasicErrorHandling() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Success:', data);
        return data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

fetchWithBasicErrorHandling();

// Example 2: Network Error Handling
console.log('\n=== Example 2: Network Error Handling ===');

async function fetchWithNetworkErrorHandling() {
    try {
        const response = await fetch('https://invalid-url-that-does-not-exist.com/api');
        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof TypeError && error.message.includes('fetch')) {
            console.error('Network error:', 'Unable to reach server. Check your connection.');
        } else {
            console.error('Other error:', error.message);
        }
        throw error;
    }
}

fetchWithNetworkErrorHandling();

// Example 3: HTTP Status Code Handling
console.log('\n=== Example 3: HTTP Status Code Handling ===');

async function fetchWithStatusHandling(url) {
    try {
        const response = await fetch(url);
        
        switch (response.status) {
            case 200:
            case 201:
                const data = await response.json();
                return { success: true, data };
            
            case 400:
                throw new Error('Bad Request - Invalid input');
            
            case 401:
                throw new Error('Unauthorized - Please login');
            
            case 403:
                throw new Error('Forbidden - Access denied');
            
            case 404:
                throw new Error('Not Found - Resource does not exist');
            
            case 500:
                throw new Error('Server Error - Please try again later');
            
            default:
                throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error('Request failed:', error.message);
        return { success: false, error: error.message };
    }
}

fetchWithStatusHandling('https://jsonplaceholder.typicode.com/posts/1');
fetchWithStatusHandling('https://jsonplaceholder.typicode.com/posts/99999');

// Example 4: Timeout Handling
console.log('\n=== Example 4: Timeout Handling ===');

function fetchWithTimeout(url, timeout = 5000) {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Request timeout')), timeout)
        )
    ]);
}

async function fetchWithTimeoutHandling() {
    try {
        const response = await fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1', 5000);
        const data = await response.json();
        console.log('Data received:', data);
        return data;
    } catch (error) {
        if (error.message === 'Request timeout') {
            console.error('Request timed out after 5 seconds');
        } else {
            console.error('Other error:', error.message);
        }
    }
}

fetchWithTimeoutHandling();

// Example 5: Retry Logic
console.log('\n=== Example 5: Retry Logic ===');

async function fetchWithRetry(url, maxRetries = 3, delay = 1000) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(`Success on attempt ${i + 1}`);
            return data;
        } catch (error) {
            console.log(`Attempt ${i + 1} failed:`, error.message);
            
            if (i === maxRetries - 1) {
                throw new Error(`Failed after ${maxRetries} attempts: ${error.message}`);
            }
            
            // Wait before retrying
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

fetchWithRetry('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log('Final result:', data))
    .catch(error => console.error('Final error:', error.message));

// Example 6: Comprehensive Error Handler
console.log('\n=== Example 6: Comprehensive Error Handler ===');

class ApiError extends Error {
    constructor(message, status, data) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.data = data;
    }
}

async function apiRequest(url, options = {}) {
    try {
        const response = await fetch(url, options);
        
        // Try to parse error response
        let errorData = null;
        if (!response.ok) {
            try {
                errorData = await response.json();
            } catch {
                errorData = await response.text();
            }
        }
        
        if (!response.ok) {
            throw new ApiError(
                errorData?.message || `HTTP error! status: ${response.status}`,
                response.status,
                errorData
            );
        }
        
        const data = await response.json();
        return { success: true, data, status: response.status };
        
    } catch (error) {
        if (error instanceof ApiError) {
            // API error (4xx, 5xx)
            console.error('API Error:', {
                message: error.message,
                status: error.status,
                data: error.data
            });
            return { success: false, error: error.message, status: error.status };
        } else if (error instanceof TypeError && error.message.includes('fetch')) {
            // Network error
            console.error('Network Error:', 'Unable to connect to server');
            return { success: false, error: 'Network error - check your connection' };
        } else {
            // Other errors
            console.error('Unknown Error:', error.message);
            return { success: false, error: error.message };
        }
    }
}

apiRequest('https://jsonplaceholder.typicode.com/posts/1')
    .then(result => {
        if (result.success) {
            console.log('API success:', result.data);
        } else {
            console.error('API failed:', result.error);
        }
    });

// Example 7: Real-world Example - Error Handling in UI
console.log('\n=== Example 7: Error Handling in UI ===');

const domOutput = document.getElementById('dom-output');
if (domOutput) {
    domOutput.innerHTML = '';
    
    const container = document.createElement('div');
    container.className = 'demo-box';
    
    const title = document.createElement('h4');
    title.textContent = 'API Error Handling Demo';
    container.appendChild(title);
    
    const statusDiv = document.createElement('div');
    statusDiv.id = 'api-status';
    statusDiv.style.padding = '10px';
    statusDiv.style.margin = '10px 0';
    statusDiv.style.borderRadius = '4px';
    statusDiv.textContent = 'Ready to fetch...';
    container.appendChild(statusDiv);
    
    const fetchBtn = document.createElement('button');
    fetchBtn.textContent = 'Fetch Data';
    fetchBtn.className = 'demo-button';
    
    fetchBtn.addEventListener('click', async function() {
        statusDiv.textContent = 'Loading...';
        statusDiv.style.backgroundColor = '#fff3e0';
        statusDiv.style.color = '#e65100';
        
        const result = await apiRequest('https://jsonplaceholder.typicode.com/posts/1');
        
        if (result.success) {
            statusDiv.textContent = 'Success! Data fetched.';
            statusDiv.style.backgroundColor = '#e8f5e9';
            statusDiv.style.color = '#2e7d32';
            console.log('UI: Success', result.data);
        } else {
            statusDiv.textContent = `Error: ${result.error}`;
            statusDiv.style.backgroundColor = '#ffebee';
            statusDiv.style.color = '#c62828';
            console.error('UI: Error', result.error);
        }
    });
    
    container.appendChild(fetchBtn);
    domOutput.appendChild(container);
}

console.log('Error handling examples - check console and UI');

