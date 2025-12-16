//your JS code here. If required.
function updateClock() {
    const now = new Date();
    
    const dateOptions = { 
        month: 'numeric', 
        day: 'numeric', 
        year: 'numeric' 
    };
    const dateString = now.toLocaleDateString('en-US', dateOptions);

    const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    const timeString = now.toLocaleTimeString('en-US', timeOptions);

    const displayString = `${dateString}, ${timeString}`;
    
    const clockElement = document.getElementById('clock-display');
    if (clockElement) {
        clockElement.textContent = displayString;
    }
}

updateClock();

setInterval(updateClock, 1000);