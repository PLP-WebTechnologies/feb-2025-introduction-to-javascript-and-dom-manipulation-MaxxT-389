// Function to change text content dynamically
function changeGreeting(newText) {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = newText;
    }
}

// Function to modify CSS styles
function applyStyles(elementId, styles) {
    const element = document.getElementById(elementId);
    if (element) {
        for (const property in styles) {
            if (styles.hasOwnProperty(property)) {
                element.style[property] = styles[property];
            }
        }
    }
}

// Function to add a new element
function addNewElement() {
    const container = document.getElementById('elementContainer');
    if (container) {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = `New paragraph added at ${new Date().toLocaleTimeString()} (Juja time)`;
        newParagraph.classList.add('new-paragraph');
        container.appendChild(newParagraph);
    }
}

// Function to remove the last added element
function removeLastElement() {
    const container = document.getElementById('elementContainer');
    if (container && container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}

// --- Event Listeners for User Interactions ---

// Change greeting after 3 seconds
setTimeout(() => {
    changeGreeting('Welcome from Juja, Kiambu County!');
}, 3000);

// Apply styles to the 'style-me' div on page load
document.addEventListener('DOMContentLoaded', () => {
    applyStyles('style-me', {
        backgroundColor: '#ffe0b2',
        color: '#3e2723',
        fontWeight: 'bold',
        padding: '15px',
        borderRadius: '8px'
    });

    // Add event listener for the "Add a New Element" button
    const addButton = document.getElementById('addButton');
    if (addButton) {
        addButton.addEventListener('click', addNewElement);
    }

    // Add event listener for the "Remove Last Element" button
    const removeButton = document.getElementById('removeButton');
    if (removeButton) {
        removeButton.addEventListener('click', removeLastElement);
    }
});
