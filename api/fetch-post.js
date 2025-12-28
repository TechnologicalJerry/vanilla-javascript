/*
Topic: Fetch API - POST Requests
Description: Demonstrates POST requests to send data to APIs.
Includes JSON, FormData, and error handling.
*/

// Example 1: Basic POST Request
console.log('=== Example 1: Basic POST Request ===');

async function createPost() {
    const newPost = {
        title: 'My New Post',
        body: 'This is the body of my new post',
        userId: 1
    };
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Created post:', data);
        return data;
    } catch (error) {
        console.error('Error creating post:', error);
    }
}

createPost();

// Example 2: POST with FormData
console.log('\n=== Example 2: POST with FormData ===');

async function createPostWithFormData() {
    const formData = new FormData();
    formData.append('title', 'FormData Post');
    formData.append('body', 'This post uses FormData');
    formData.append('userId', '1');
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData
            // Don't set Content-Type header - browser sets it automatically with boundary
        });
        
        const data = await response.json();
        console.log('Created with FormData:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

createPostWithFormData();

// Example 3: POST with URLSearchParams
console.log('\n=== Example 3: POST with URLSearchParams ===');

async function createPostWithURLParams() {
    const params = new URLSearchParams();
    params.append('title', 'URLSearchParams Post');
    params.append('body', 'This post uses URLSearchParams');
    params.append('userId', '1');
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
        });
        
        const data = await response.json();
        console.log('Created with URLSearchParams:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

createPostWithURLParams();

// Example 4: PUT and PATCH Requests
console.log('\n=== Example 4: PUT and PATCH ===');

async function updatePost(postId) {
    const updatedData = {
        title: 'Updated Post Title',
        body: 'Updated post body'
    };
    
    try {
        // PUT - replaces entire resource
        const putResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        const putData = await putResponse.json();
        console.log('PUT result:', putData);
        
        // PATCH - updates partial resource
        const patchResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: 'Patched Title' })
        });
        const patchData = await patchResponse.json();
        console.log('PATCH result:', patchData);
        
        return { putData, patchData };
    } catch (error) {
        console.error('Error updating post:', error);
    }
}

updatePost(1);

// Example 5: DELETE Request
console.log('\n=== Example 5: DELETE Request ===');

async function deletePost(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        console.log('Post deleted successfully');
        return true;
    } catch (error) {
        console.error('Error deleting post:', error);
    }
}

deletePost(1);

// Example 6: Real-world Example - User Registration
console.log('\n=== Example 6: User Registration ===');

async function registerUser(userData) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Registration failed');
        }
        
        const newUser = await response.json();
        console.log('User registered:', newUser);
        return newUser;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
}

registerUser({
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    phone: '123-456-7890'
});

// Example 7: Custom Fetch Function with Error Handling
console.log('\n=== Example 7: Custom Fetch Function ===');

async function apiRequest(url, options = {}) {
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    const config = {
        ...defaultOptions,
        ...options,
        headers: {
            ...defaultOptions.headers,
            ...options.headers
        }
    };
    
    try {
        const response = await fetch(url, config);
        
        // Handle different response types
        const contentType = response.headers.get('content-type');
        let data;
        
        if (contentType && contentType.includes('application/json')) {
            data = await response.json();
        } else {
            data = await response.text();
        }
        
        if (!response.ok) {
            throw new Error(data.message || `HTTP error! status: ${response.status}`);
        }
        
        return { data, status: response.status, ok: true };
    } catch (error) {
        console.error('API request error:', error);
        return { error: error.message, ok: false };
    }
}

// Usage
apiRequest('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Custom API Request',
        body: 'Using custom fetch function',
        userId: 1
    })
}).then(result => {
    if (result.ok) {
        console.log('Success:', result.data);
    } else {
        console.error('Failed:', result.error);
    }
});

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Fetch API - POST Requests</h4>
        <p><strong>POST Request:</strong></p>
        <pre>fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})</pre>
        <p><strong>HTTP Methods:</strong></p>
        <ul>
            <li><strong>GET:</strong> Retrieve data</li>
            <li><strong>POST:</strong> Create new resource</li>
            <li><strong>PUT:</strong> Replace entire resource</li>
            <li><strong>PATCH:</strong> Update partial resource</li>
            <li><strong>DELETE:</strong> Delete resource</li>
        </ul>
        <p>Check console for API responses...</p>
    `;
    domOutput.appendChild(demoDiv);
}

console.log('Fetch POST examples - check console for API responses');

