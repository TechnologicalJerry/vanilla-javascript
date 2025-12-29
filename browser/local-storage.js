/*
Topic: Local Storage
Description: localStorage provides persistent storage in the browser.
Data persists even after browser is closed. Stores key-value pairs as strings.
*/

// Example 1: Basic Local Storage Operations
console.log('=== Example 1: Basic Local Storage Operations ===');

// Set item
localStorage.setItem('username', 'john_doe');
localStorage.setItem('theme', 'dark');

// Get item
const username = localStorage.getItem('username');
console.log('Username:', username);

// Remove item
// localStorage.removeItem('theme');

// Clear all
// localStorage.clear();

// Get key by index
const firstKey = localStorage.key(0);
console.log('First key:', firstKey);

// Get length
console.log('Storage items:', localStorage.length);

// Example 2: Storing Objects
console.log('\n=== Example 2: Storing Objects ===');

const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    preferences: {
        theme: 'dark',
        notifications: true
    }
};

// Store object (must stringify)
localStorage.setItem('user', JSON.stringify(user));

// Retrieve object (must parse)
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log('Stored user:', storedUser);

// Example 3: Storing Arrays
console.log('\n=== Example 3: Storing Arrays ===');

const todos = [
    { id: 1, text: 'Learn JavaScript', completed: false },
    { id: 2, text: 'Build a project', completed: true },
    { id: 3, text: 'Write documentation', completed: false }
];

localStorage.setItem('todos', JSON.stringify(todos));

const storedTodos = JSON.parse(localStorage.getItem('todos'));
console.log('Stored todos:', storedTodos);

// Example 4: Check if Key Exists
console.log('\n=== Example 4: Check if Key Exists ===');

function hasLocalStorageKey(key) {
    return localStorage.getItem(key) !== null;
}

console.log('Has username:', hasLocalStorageKey('username'));
console.log('Has nonexistent:', hasLocalStorageKey('nonexistent'));

// Example 5: Real-world Example - User Preferences
console.log('\n=== Example 5: User Preferences ===');

class UserPreferences {
    static save(preferences) {
        try {
            localStorage.setItem('preferences', JSON.stringify(preferences));
            return true;
        } catch (error) {
            console.error('Error saving preferences:', error);
            return false;
        }
    }
    
    static load() {
        try {
            const stored = localStorage.getItem('preferences');
            return stored ? JSON.parse(stored) : null;
        } catch (error) {
            console.error('Error loading preferences:', error);
            return null;
        }
    }
    
    static update(key, value) {
        const preferences = this.load() || {};
        preferences[key] = value;
        return this.save(preferences);
    }
    
    static get(key) {
        const preferences = this.load();
        return preferences ? preferences[key] : null;
    }
    
    static clear() {
        localStorage.removeItem('preferences');
    }
}

// Usage
UserPreferences.save({
    theme: 'dark',
    language: 'en',
    fontSize: 16,
    notifications: true
});

console.log('Saved preferences:', UserPreferences.load());
UserPreferences.update('theme', 'light');
console.log('Updated theme:', UserPreferences.get('theme'));

// Example 6: Storage Event (for cross-tab communication)
console.log('\n=== Example 6: Storage Event ===');

window.addEventListener('storage', function(e) {
    console.log('Storage changed:', {
        key: e.key,
        oldValue: e.oldValue,
        newValue: e.newValue,
        url: e.url
    });
});

// Example 7: DOM Example - Todo List with Local Storage
console.log('\n=== Example 7: Todo List with Local Storage ===');

const domOutput = document.getElementById('dom-output');
if (domOutput) {
    domOutput.innerHTML = '';
    
    const container = document.createElement('div');
    container.className = 'demo-box';
    
    const title = document.createElement('h4');
    title.textContent = 'Local Storage Todo List';
    container.appendChild(title);
    
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Add todo...';
    input.className = 'input-demo';
    input.style.width = '70%';
    input.style.marginRight = '10px';
    
    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add';
    addBtn.className = 'demo-button';
    
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear All';
    clearBtn.className = 'demo-button';
    clearBtn.style.marginLeft = '10px';
    
    const todoList = document.createElement('ul');
    todoList.id = 'local-storage-todos';
    todoList.style.listStyle = 'none';
    todoList.style.padding = '0';
    todoList.style.marginTop = '10px';
    
    // Load todos from localStorage
    function loadTodos() {
        const stored = localStorage.getItem('demo-todos');
        return stored ? JSON.parse(stored) : [];
    }
    
    // Save todos to localStorage
    function saveTodos(todos) {
        localStorage.setItem('demo-todos', JSON.stringify(todos));
    }
    
    // Render todos
    function renderTodos() {
        const todos = loadTodos();
        todoList.innerHTML = '';
        
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.style.padding = '10px';
            li.style.margin = '5px 0';
            li.style.backgroundColor = '#f0f0f0';
            li.style.borderRadius = '4px';
            li.style.display = 'flex';
            li.style.justifyContent = 'space-between';
            li.style.alignItems = 'center';
            
            const span = document.createElement('span');
            span.textContent = todo.text;
            if (todo.completed) {
                span.style.textDecoration = 'line-through';
                span.style.opacity = '0.5';
            }
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.style.padding = '5px 10px';
            deleteBtn.style.background = '#f44336';
            deleteBtn.style.color = 'white';
            deleteBtn.style.border = 'none';
            deleteBtn.style.borderRadius = '4px';
            deleteBtn.style.cursor = 'pointer';
            
            span.addEventListener('click', function() {
                todo.completed = !todo.completed;
                saveTodos(todos);
                renderTodos();
            });
            
            deleteBtn.addEventListener('click', function() {
                todos.splice(index, 1);
                saveTodos(todos);
                renderTodos();
            });
            
            li.appendChild(span);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    }
    
    addBtn.addEventListener('click', function() {
        const text = input.value.trim();
        if (text) {
            const todos = loadTodos();
            todos.push({ text, completed: false });
            saveTodos(todos);
            renderTodos();
            input.value = '';
        }
    });
    
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });
    
    clearBtn.addEventListener('click', function() {
        if (confirm('Clear all todos?')) {
            localStorage.removeItem('demo-todos');
            renderTodos();
        }
    });
    
    container.appendChild(input);
    container.appendChild(addBtn);
    container.appendChild(clearBtn);
    container.appendChild(todoList);
    
    // Initial render
    renderTodos();
    
    domOutput.appendChild(container);
}

console.log('Local storage examples created - check UI for interactive demo');

