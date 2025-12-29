/*
Topic: Forms
Description: Working with HTML forms: accessing form elements, validation,
handling submissions, and working with FormData.
*/

// Example 1: Accessing Form Elements
console.log('=== Example 1: Accessing Form Elements ===');

const domOutput = document.getElementById('dom-output');
if (domOutput) {
    domOutput.innerHTML = '';
    
    // Create form
    const form = document.createElement('form');
    form.id = 'demo-form';
    form.className = 'demo-box';
    
    // Form elements
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Name';
    nameInput.required = true;
    
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Email';
    emailInput.required = true;
    
    const ageInput = document.createElement('input');
    ageInput.type = 'number';
    ageInput.name = 'age';
    ageInput.placeholder = 'Age';
    ageInput.min = '18';
    ageInput.max = '100';
    
    const select = document.createElement('select');
    select.name = 'country';
    ['USA', 'Canada', 'UK', 'Australia'].forEach(country => {
        const option = document.createElement('option');
        option.value = country.toLowerCase();
        option.textContent = country;
        select.appendChild(option);
    });
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'subscribe';
    checkbox.id = 'subscribe';
    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', 'subscribe');
    checkboxLabel.textContent = 'Subscribe to newsletter';
    
    const radio1 = document.createElement('input');
    radio1.type = 'radio';
    radio1.name = 'gender';
    radio1.value = 'male';
    radio1.id = 'male';
    const radio1Label = document.createElement('label');
    radio1Label.setAttribute('for', 'male');
    radio1Label.textContent = 'Male';
    
    const radio2 = document.createElement('input');
    radio2.type = 'radio';
    radio2.name = 'gender';
    radio2.value = 'female';
    radio2.id = 'female';
    const radio2Label = document.createElement('label');
    radio2Label.setAttribute('for', 'female');
    radio2Label.textContent = 'Female';
    
    const textarea = document.createElement('textarea');
    textarea.name = 'message';
    textarea.placeholder = 'Message';
    textarea.rows = 3;
    
    // Style inputs
    [nameInput, emailInput, ageInput, select, textarea].forEach(input => {
        input.style.width = '100%';
        input.style.padding = '8px';
        input.style.margin = '5px 0';
        input.style.border = '1px solid #ddd';
        input.style.borderRadius = '4px';
        input.className = 'input-demo';
    });
    
    // Submit button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Submit';
    submitBtn.className = 'demo-button';
    
    // Append to form
    const title = document.createElement('h4');
    title.textContent = 'Form Demo';
    form.appendChild(title);
    
    [nameInput, emailInput, ageInput, select, checkbox, checkboxLabel, 
     radio1, radio1Label, radio2, radio2Label, textarea, submitBtn].forEach(el => {
        const div = document.createElement('div');
        div.appendChild(el);
        form.appendChild(div);
    });
    
    domOutput.appendChild(form);
    
    // Access form elements
    console.log('Form element:', form);
    console.log('Form elements:', form.elements);
    console.log('Name input:', form.elements.name);
    console.log('Email input:', form.elements.email);
}

// Example 2: Form Validation
console.log('\n=== Example 2: Form Validation ===');

function validateForm(form) {
    const errors = [];
    
    // Name validation
    const name = form.elements.name.value.trim();
    if (!name) {
        errors.push('Name is required');
    } else if (name.length < 2) {
        errors.push('Name must be at least 2 characters');
    }
    
    // Email validation
    const email = form.elements.email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.push('Email is required');
    } else if (!emailRegex.test(email)) {
        errors.push('Invalid email format');
    }
    
    // Age validation
    const age = parseInt(form.elements.age.value);
    if (form.elements.age.value && (age < 18 || age > 100)) {
        errors.push('Age must be between 18 and 100');
    }
    
    return errors;
}

// Example 3: Form Submission Handling
console.log('\n=== Example 3: Form Submission ===');

const form = document.getElementById('demo-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate
        const errors = validateForm(this);
        if (errors.length > 0) {
            alert('Validation errors:\n' + errors.join('\n'));
            return;
        }
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        // Display success
        const successMsg = document.createElement('div');
        successMsg.textContent = 'Form submitted successfully!';
        successMsg.style.color = 'green';
        successMsg.style.marginTop = '10px';
        successMsg.style.padding = '10px';
        successMsg.style.backgroundColor = '#e8f5e9';
        successMsg.style.borderRadius = '4px';
        this.appendChild(successMsg);
        
        // Reset form after 2 seconds
        setTimeout(() => {
            this.reset();
            successMsg.remove();
        }, 2000);
    });
}

// Example 4: Working with FormData
console.log('\n=== Example 4: FormData API ===');

function demonstrateFormData(form) {
    const formData = new FormData(form);
    
    // Get values
    console.log('Name:', formData.get('name'));
    console.log('Email:', formData.get('email'));
    
    // Check if has key
    console.log('Has age:', formData.has('age'));
    
    // Set value
    formData.set('timestamp', new Date().toISOString());
    
    // Append value
    formData.append('source', 'web');
    
    // Iterate
    console.log('All entries:');
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
    
    // Convert to object
    const data = Object.fromEntries(formData);
    console.log('As object:', data);
    
    return formData;
}

// Example 5: Real-world Example - Registration Form
console.log('\n=== Example 5: Registration Form ===');

function createRegistrationForm() {
    const container = document.createElement('div');
    container.className = 'demo-box';
    container.style.marginTop = '20px';
    
    const title = document.createElement('h4');
    title.textContent = 'Registration Form';
    container.appendChild(title);
    
    const regForm = document.createElement('form');
    regForm.id = 'registration-form';
    
    // Password field
    const passwordDiv = document.createElement('div');
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.required = true;
    passwordInput.style.width = '100%';
    passwordInput.style.padding = '8px';
    passwordInput.style.margin = '5px 0';
    passwordInput.style.border = '1px solid #ddd';
    passwordInput.style.borderRadius = '4px';
    passwordDiv.appendChild(passwordInput);
    
    // Confirm password
    const confirmPasswordDiv = document.createElement('div');
    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.type = 'password';
    confirmPasswordInput.name = 'confirmPassword';
    confirmPasswordInput.placeholder = 'Confirm Password';
    confirmPasswordInput.required = true;
    confirmPasswordInput.style.width = '100%';
    confirmPasswordInput.style.padding = '8px';
    confirmPasswordInput.style.margin = '5px 0';
    confirmPasswordInput.style.border = '1px solid #ddd';
    confirmPasswordInput.style.borderRadius = '4px';
    confirmPasswordDiv.appendChild(confirmPasswordInput);
    
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Register';
    submitBtn.className = 'demo-button';
    
    regForm.appendChild(passwordDiv);
    regForm.appendChild(confirmPasswordDiv);
    regForm.appendChild(submitBtn);
    
    regForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = this.elements.password.value;
        const confirmPassword = this.elements.confirmPassword.value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        if (password.length < 8) {
            alert('Password must be at least 8 characters');
            return;
        }
        
        console.log('Registration successful!');
        alert('Registration successful!');
        this.reset();
    });
    
    container.appendChild(regForm);
    
    if (domOutput) {
        domOutput.appendChild(container);
    }
    
    return container;
}

// Create registration form
if (domOutput) {
    createRegistrationForm();
}

console.log('Form examples created');

