// row counter elements
const addRowButton = document.getElementById('add-row-btn');
const subRowButton = document.getElementById('sub-row-btn');
const saveRowValButton = document.getElementById('save-row-val');
const loadRowValButton = document.getElementById('load-row-val');
const resetRowsButton = document.getElementById('reset-btn');
const rowCountDisplay = document.getElementById('row-count');

// Initialize row count
let rowCount = 0;

// function to update the row count display
function updateRowCount() {
    rowCountDisplay.textContent = rowCount;
}

// Event listener for the "Add Row" button
addRowButton.addEventListener('click', () => {
    rowCount++;
    updateRowCount();
})

// Event listener for the "Reset Rows" button
subRowButton.addEventListener('click', () => {
    if (rowCount > 0) {
        rowCount--;
        updateRowCount();
    }
    if (rowCount <= 0) {
        rowCount = 0;
        updateRowCount();
    }
})

// Event listener for the "Save Row Value" button
saveRowValButton.addEventListener('click', () => {
    localStorage.setItem("rowCount", rowCount);
})

// Event listener for the "Load Row Value" button
loadRowValButton.addEventListener('click', () => {
    let saved = localStorage.getItem("rowCount");
    if (saved !== null) {
        rowCount = Number(saved);
        updateRowCount();
    }
})

// Event listener for the "Reset Counter" button
resetRowsButton.addEventListener('click', () => {
    rowCount = 0;
    updateRowCount();
})

// Stopwatch Elements
const startTimerButton = document.getElementById('start-timer-btn');
const pauseTimerButton = document.getElementById('pause-timer-btn');
// const stopTimerButton = document.getElementById('stop-timer-btn');
const resetTimerButton = document.getElementById('reset-timer-btn');
const timerDisplay = document.getElementById('timer-display');

// Initialize timer variables
let timerInterval = null;
let elapsedSeconds = 0;

// Function to update the timer display
function updateTimerDisplay() {
    const hours = Math.floor(elapsedSeconds / 3600);
    const minutes = Math.floor((elapsedSeconds % 3600) / 60);
    const seconds = elapsedSeconds % 60;
    timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Event listener for the "Start Timer" button
startTimerButton.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            elapsedSeconds++;
            updateTimerDisplay();
        }, 1000);
    }
})

// Event listener for the "Pause Timer" button
pauseTimerButton.addEventListener('click', () => {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
})

// Pause Button Seems Sufficient for "Stop Timer" Functionality, So Hiding Stop Button for Now
// // Event listener for the "Stop Timer" button
// stopTimerButton.addEventListener('click', () => {
//     if (timerInterval) {
//         clearInterval(timerInterval);
//         timerInterval = null;
//     }
//     elapsedSeconds = 0;
//     updateTimerDisplay();
// })

// Event listener for the "Reset Timer" button
resetTimerButton.addEventListener('click', () => {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    elapsedSeconds = 0;
    updateTimerDisplay();
})