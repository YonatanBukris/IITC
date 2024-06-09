let count = 1;
let intervalId;

function startCount() {
    document.getElementById('row').innerText = count;
    count++;
}

function startInterval() {
    // Check if interval is already running
    if (!intervalId) {
        intervalId = setInterval(startCount, 1000);
    }
}

function stopCount() {
    clearInterval(intervalId);
    intervalId = null; // Reset intervalId
}