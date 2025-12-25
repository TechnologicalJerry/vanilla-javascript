/*
Topic: Switch Statements
Description: Switch statements provide a cleaner way to handle multiple
conditional branches based on a single value. More readable than long if/else chains.
*/

// Example 1: Basic Switch Statement
console.log('=== Example 1: Basic Switch Statement ===');

function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 0:
            dayName = 'Sunday';
            break;
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        default:
            dayName = 'Invalid day';
    }
    return dayName;
}

for (let i = 0; i <= 7; i++) {
    console.log(`Day ${i}: ${getDayName(i)}`);
}

// Example 2: Switch with Multiple Cases (Fall-through)
console.log('\n=== Example 2: Switch with Multiple Cases ===');

function getSeason(month) {
    let season;
    switch (month) {
        case 12:
        case 1:
        case 2:
            season = 'Winter';
            break;
        case 3:
        case 4:
        case 5:
            season = 'Spring';
            break;
        case 6:
        case 7:
        case 8:
            season = 'Summer';
            break;
        case 9:
        case 10:
        case 11:
            season = 'Fall';
            break;
        default:
            season = 'Invalid month';
    }
    return season;
}

const months = [1, 4, 7, 10, 13];
months.forEach(month => {
    console.log(`Month ${month}: ${getSeason(month)}`);
});

// Example 3: Real-world Example - HTTP Status Code Handler
console.log('\n=== Example 3: HTTP Status Code Handler ===');

function handleHttpStatus(statusCode) {
    let message;
    let category;
    
    switch (statusCode) {
        case 200:
            message = 'OK';
            category = 'Success';
            break;
        case 201:
            message = 'Created';
            category = 'Success';
            break;
        case 400:
            message = 'Bad Request';
            category = 'Client Error';
            break;
        case 401:
            message = 'Unauthorized';
            category = 'Client Error';
            break;
        case 403:
            message = 'Forbidden';
            category = 'Client Error';
            break;
        case 404:
            message = 'Not Found';
            category = 'Client Error';
            break;
        case 500:
            message = 'Internal Server Error';
            category = 'Server Error';
            break;
        case 503:
            message = 'Service Unavailable';
            category = 'Server Error';
            break;
        default:
            message = 'Unknown Status';
            category = 'Unknown';
    }
    
    return { code: statusCode, message, category };
}

const statusCodes = [200, 201, 404, 500, 999];
statusCodes.forEach(code => {
    const result = handleHttpStatus(code);
    console.log(`Status ${result.code}: ${result.message} (${result.category})`);
});

// DOM Output
const domOutput = document.getElementById('dom-output');
if (domOutput) {
    const demoDiv = document.createElement('div');
    demoDiv.className = 'demo-box';
    demoDiv.innerHTML = `
        <h4>Switch Statement Examples</h4>
        <p><strong>Day Names:</strong></p>
        <p>Day 0: ${getDayName(0)}</p>
        <p>Day 3: ${getDayName(3)}</p>
        <p>Day 6: ${getDayName(6)}</p>
        <p><strong>Seasons:</strong></p>
        <ul>
            ${months.slice(0, 4).map(m => `<li>Month ${m}: ${getSeason(m)}</li>`).join('')}
        </ul>
        <p><strong>HTTP Status:</strong></p>
        <p>200: ${handleHttpStatus(200).message}</p>
        <p>404: ${handleHttpStatus(404).message}</p>
        <p>500: ${handleHttpStatus(500).message}</p>
    `;
    domOutput.appendChild(demoDiv);
}

