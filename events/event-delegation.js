/*
Topic: Event Delegation
Description: Event delegation allows attaching a single event listener to a parent
element to handle events from multiple child elements. More efficient and flexible.
*/

// Example 1: Problem with Multiple Listeners
console.log('=== Example 1: Problem with Multiple Listeners ===');

const domOutput = document.getElementById('dom-output');
if (domOutput) {
    domOutput.innerHTML = '';
    
    // Bad approach: individual listeners
    const badContainer = document.createElement('div');
    badContainer.className = 'demo-box';
    
    const badTitle = document.createElement('h4');
    badTitle.textContent = 'Bad: Individual Listeners';
    badContainer.appendChild(badTitle);
    
    const badList = document.createElement('ul');
    badList.id = 'bad-list';
    badList.style.listStyle = 'none';
    badList.style.padding = '0';
    
    for (let i = 1; i <= 5; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        li.style.padding = '10px';
        li.style.margin = '5px 0';
        li.style.backgroundColor = '#f0f0f0';
        li.style.borderRadius = '4px';
        li.style.cursor = 'pointer';
        
        // Individual listener for each item
        li.addEventListener('click', function() {
            console.log(`Clicked item ${i} (individual listener)`);
            this.style.backgroundColor = '#667eea';
            this.style.color = 'white';
        });
        
        badList.appendChild(li);
    }
    
    badContainer.appendChild(badList);
    domOutput.appendChild(badContainer);
}

// Example 2: Event Delegation Solution
console.log('\n=== Example 2: Event Delegation ===');

function createDelegatedList() {
    const container = document.createElement('div');
    container.className = 'demo-box';
    container.style.marginTop = '20px';
    
    const title = document.createElement('h4');
    title.textContent = 'Good: Event Delegation';
    container.appendChild(title);
    
    const list = document.createElement('ul');
    list.id = 'delegated-list';
    list.style.listStyle = 'none';
    list.style.padding = '0';
    
    for (let i = 1; i <= 5; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        li.dataset.id = i;
        li.style.padding = '10px';
        li.style.margin = '5px 0';
        li.style.backgroundColor = '#e3f2fd';
        li.style.borderRadius = '4px';
        li.style.cursor = 'pointer';
        list.appendChild(li);
    }
    
    // Single listener on parent
    list.addEventListener('click', function(e) {
        // Check if clicked element is an li
        if (e.target.tagName === 'LI') {
            const itemId = e.target.dataset.id;
            console.log(`Clicked item ${itemId} (delegated listener)`);
            e.target.style.backgroundColor = '#667eea';
            e.target.style.color = 'white';
        }
    });
    
    container.appendChild(list);
    
    // Add button to add new items dynamically
    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add New Item';
    addBtn.className = 'demo-button';
    addBtn.style.marginTop = '10px';
    
    let itemCount = 5;
    addBtn.addEventListener('click', function() {
        itemCount++;
        const li = document.createElement('li');
        li.textContent = `Item ${itemCount} (dynamically added)`;
        li.dataset.id = itemCount;
        li.style.padding = '10px';
        li.style.margin = '5px 0';
        li.style.backgroundColor = '#e3f2fd';
        li.style.borderRadius = '4px';
        li.style.cursor = 'pointer';
        
        // No need to add listener - delegation handles it!
        list.appendChild(li);
        console.log(`Added item ${itemCount} - no listener needed!`);
    });
    
    container.appendChild(addBtn);
    
    if (domOutput) {
        domOutput.appendChild(container);
    }
    
    return container;
}

// Example 3: Event Delegation with Buttons
console.log('\n=== Example 3: Delegation with Buttons ===');

function createButtonGroup() {
    const container = document.createElement('div');
    container.className = 'demo-box';
    container.style.marginTop = '20px';
    
    const title = document.createElement('h4');
    title.textContent = 'Button Group Delegation';
    container.appendChild(title);
    
    const buttonGroup = document.createElement('div');
    buttonGroup.id = 'button-group';
    buttonGroup.style.display = 'flex';
    buttonGroup.style.gap = '10px';
    buttonGroup.style.flexWrap = 'wrap';
    
    const actions = ['Save', 'Edit', 'Delete', 'Share'];
    actions.forEach(action => {
        const btn = document.createElement('button');
        btn.textContent = action;
        btn.className = 'demo-button';
        btn.dataset.action = action.toLowerCase();
        buttonGroup.appendChild(btn);
    });
    
    // Single listener for all buttons
    buttonGroup.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            const action = e.target.dataset.action;
            console.log(`Action: ${action}`);
            
            switch(action) {
                case 'save':
                    alert('Saving...');
                    break;
                case 'edit':
                    alert('Editing...');
                    break;
                case 'delete':
                    if (confirm('Are you sure?')) {
                        alert('Deleted!');
                    }
                    break;
                case 'share':
                    alert('Sharing...');
                    break;
            }
        }
    });
    
    container.appendChild(buttonGroup);
    
    // Add button to add new action
    const addActionBtn = document.createElement('button');
    addActionBtn.textContent = 'Add "New" Button';
    addActionBtn.className = 'demo-button';
    addActionBtn.style.marginTop = '10px';
    
    addActionBtn.addEventListener('click', function() {
        const btn = document.createElement('button');
        btn.textContent = 'New';
        btn.className = 'demo-button';
        btn.dataset.action = 'new';
        // No listener needed - delegation handles it!
        buttonGroup.appendChild(btn);
    });
    
    container.appendChild(addActionBtn);
    
    if (domOutput) {
        domOutput.appendChild(container);
    }
    
    return container;
}

// Example 4: Real-world Example - Todo List
console.log('\n=== Example 4: Todo List with Delegation ===');

function createTodoList() {
    const container = document.createElement('div');
    container.className = 'demo-box';
    container.style.marginTop = '20px';
    
    const title = document.createElement('h4');
    title.textContent = 'Todo List (Event Delegation)';
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
    
    const todoList = document.createElement('ul');
    todoList.id = 'todo-list';
    todoList.style.listStyle = 'none';
    todoList.style.padding = '0';
    todoList.style.marginTop = '10px';
    
    // Add todo
    addBtn.addEventListener('click', function() {
        const text = input.value.trim();
        if (text) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${text}</span>
                <button class="delete-btn" style="margin-left: 10px; padding: 5px 10px; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">Delete</button>
            `;
            li.style.padding = '10px';
            li.style.margin = '5px 0';
            li.style.backgroundColor = '#f0f0f0';
            li.style.borderRadius = '4px';
            li.style.display = 'flex';
            li.style.justifyContent = 'space-between';
            li.style.alignItems = 'center';
            todoList.appendChild(li);
            input.value = '';
            console.log('Todo added:', text);
        }
    });
    
    // Enter key to add
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });
    
    // Event delegation for delete buttons
    todoList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            const li = e.target.closest('li');
            console.log('Deleting todo:', li.querySelector('span').textContent);
            li.remove();
        }
    });
    
    // Toggle complete on click
    todoList.addEventListener('click', function(e) {
        if (e.target.tagName === 'SPAN') {
            e.target.style.textDecoration = 
                e.target.style.textDecoration === 'line-through' 
                    ? 'none' 
                    : 'line-through';
            e.target.style.opacity = 
                e.target.style.opacity === '0.5' 
                    ? '1' 
                    : '0.5';
        }
    });
    
    container.appendChild(input);
    container.appendChild(addBtn);
    container.appendChild(todoList);
    
    if (domOutput) {
        domOutput.appendChild(container);
    }
    
    return container;
}

// Create all examples
if (domOutput) {
    createDelegatedList();
    createButtonGroup();
    createTodoList();
    
    // Info box
    const infoBox = document.createElement('div');
    infoBox.className = 'demo-box';
    infoBox.style.marginTop = '20px';
    infoBox.innerHTML = `
        <h4>Event Delegation Benefits</h4>
        <ul>
            <li><strong>Performance:</strong> Single listener instead of many</li>
            <li><strong>Memory:</strong> Less memory usage</li>
            <li><strong>Dynamic:</strong> Works with dynamically added elements</li>
            <li><strong>Maintainable:</strong> Easier to manage</li>
        </ul>
        <p><strong>Pattern:</strong> Attach listener to parent, check e.target</p>
    `;
    domOutput.appendChild(infoBox);
}

console.log('Event delegation examples created');

