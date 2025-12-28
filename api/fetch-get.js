/*
Topic: Fetch API - GET Requests
Description: The Fetch API provides a modern way to make HTTP requests.
This file demonstrates GET requests to retrieve data from APIs.
*/

// Example 1: Basic GET Request
console.log('=== Example 1: Basic GET Request ===');

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Post data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Example 2: GET with Async/Await
console.log('\n=== Example 2: GET with Async/Await ===');

async function fetchPost(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Post:', data);
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

fetchPost(1);

// Example 3: Fetch Multiple Posts
console.log('\n=== Example 3: Fetch Multiple Posts ===');

async function fetchMultiplePosts() {
    try {
        const postIds = [1, 2, 3];
        const promises = postIds.map(id => 
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(res => res.json())
        );
        
        const posts = await Promise.all(promises);
        console.log('Multiple posts:', posts);
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

fetchMultiplePosts();

// Example 4: Fetch with Query Parameters
console.log('\n=== Example 4: Fetch with Query Parameters ===');

async function fetchWithParams() {
    const params = new URLSearchParams({
        userId: 1,
        _limit: 5
    });
    
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${params}`);
        const posts = await response.json();
        console.log('Filtered posts:', posts);
        return posts;
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchWithParams();

// Example 5: Real-world Example - User Data Fetching
console.log('\n=== Example 5: User Data Fetching ===');

async function fetchUserData(userId) {
    try {
        // Fetch user
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user');
        const user = await userResponse.json();
        
        // Fetch user posts
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!postsResponse.ok) throw new Error('Failed to fetch posts');
        const posts = await postsResponse.json();
        
        // Fetch user albums
        const albumsResponse = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
        if (!albumsResponse.ok) throw new Error('Failed to fetch albums');
        const albums = await albumsResponse.json();
        
        return {
            user,
            posts,
            albums
        };
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

fetchUserData(1).then(data => {
    console.log('Complete user data:', data);
});

// Example 6: Response Methods
console.log('\n=== Example 6: Response Methods ===');

async function demonstrateResponseMethods() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    console.log('Status:', response.status);
    console.log('Status Text:', response.statusText);
    console.log('OK:', response.ok);
    console.log('Headers:', Object.fromEntries(response.headers));
    console.log('Content Type:', response.headers.get('content-type'));
    
    // Different ways to get data
    const json = await response.json();
    console.log('As JSON:', json);
    
    // Note: Can't call response.json() twice, need to clone
    const cloned = response.clone();
    const text = await cloned.text();
    console.log('As text:', text.substring(0, 100));
}

// demonstrateResponseMethods();

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Fetch API - GET Requests</h4>
        <p><strong>Basic Syntax:</strong></p>
        <pre>fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));</pre>
        <p><strong>With Async/Await:</strong></p>
        <pre>const response = await fetch(url);
const data = await response.json();</pre>
        <p><strong>Key Points:</strong></p>
        <ul>
            <li>Returns a Promise</li>
            <li>Response must be parsed (json(), text(), etc.)</li>
            <li>Check response.ok for errors</li>
            <li>Use try/catch with async/await</li>
        </ul>
        <p>Check console for API responses...</p>
    `;
    domOutput.appendChild(demoDiv);
}

console.log('Fetch GET examples - check console for API responses');

