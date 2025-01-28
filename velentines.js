// Add this to your index.js or create a new JavaScript file

function formatTimeRemaining(timeRemaining) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function updateValentineButton() {
    // Updated selector to target the Valentine's button specifically
    const valentineButton = document.querySelector('button.restart-button:not([onclick])');
    const now = new Date();
    const enableTime = new Date(now.getFullYear(), 1, 13, 23, 59); // February 13, 11:59 PM
    
    if (!valentineButton) return;

    // Create or get the timer span
    let timerSpan = document.getElementById('valentine-timer');
    if (!timerSpan) {
        timerSpan = document.createElement('div');
        timerSpan.id = 'valentine-timer';
        valentineButton.insertAdjacentElement('beforebegin', timerSpan);
    }

    const timeRemaining = enableTime - now;

    if (timeRemaining > 0) {
        // Button is still disabled
        valentineButton.disabled = true;
        valentineButton.style.opacity = '0.5';
        valentineButton.style.cursor = 'not-allowed';
        
        // Update timer text
        timerSpan.textContent = `Time until unlock: ${formatTimeRemaining(timeRemaining)}`;
    } else {
        // Button should be enabled
        valentineButton.disabled = false;
        valentineButton.style.opacity = '1';
        valentineButton.style.cursor = 'pointer';
        timerSpan.style.display = 'none';
        
        // Add click event listener for redirection
        valentineButton.onclick = function() {
            window.location.href = '/valentines.html';
        };
    }
}

// Run when the page loads
document.addEventListener('DOMContentLoaded', updateValentineButton);

// Update every second to keep the timer smooth
setInterval(updateValentineButton, 1000);