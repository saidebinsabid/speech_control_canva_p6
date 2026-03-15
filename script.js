// ---------------------------------------------------------
// INITIAL SETUP & VARIABLES
// ---------------------------------------------------------

// We need a variable to hold our drawing canvas
let canvas;

// 'window.webkitSpeechRecognition' is the API that allows the browser to listen to our voice.
// Think of it as the "ear" of our program.
var speech = window.webkitSpeechRecognition;

// We create a new "listener" object using the API we just grabbed.
var recognition = new speech();

// ---------------------------------------------------------
// START LISTENING FUNCTION
// ---------------------------------------------------------
// This function runs when we click the "Draw" button.
function start() {
    // 1. Grab the HTML element where we show status messages
    var text = document.getElementById('text');
    
    // 2. Change the text to let the user know we are listening
    text.innerHTML = '<i class="fa-solid fa-ear-listen"></i> System is listening, please say which shape you would like to draw?';
    
    // 3. Actually tell the computer to start listening to the microphone
    recognition.start();
}

// ---------------------------------------------------------
// P5.JS SETUP FUNCTION
// ---------------------------------------------------------
// setup() is a special function from the p5.js library.
// It automatically runs once when the page loads.
function setup() {
    // 1. Create a drawing area (canvas) that is 900 pixels wide and 650 pixels high
    canvas = createCanvas(900, 650);
    
    // 2. Place the canvas inside our specific HTML container, instead of just the body
    canvas.parent('canvas-wrapper');
    
    // 3. Set the background color of our canvas (a dark color to match our theme)
    background("#1c2833");
}

// ---------------------------------------------------------
// WHEN SPEECH IS RECOGNIZED
// ---------------------------------------------------------
// This function automatically triggers as soon as the computer hears you and decides on the word.
recognition.onresult = function(event) {
    
    // We log the raw event to the console (good for debugging)
    console.log(event);
    
    // 1. Extract the exact word the user said from the event object
    let shape = event.results[0][0].transcript;
    
    // 2. Convert the word to lowercase so "Circle" and "circle" match exactly
    shape = shape.toLowerCase();
    
    // 3. Sometimes speech adds a period at the end (e.g., "circle.").
    // We remove all dots so we just have the word "circle".
    shape = shape.replaceAll('.', '');
    
    console.log("Recognized Shape: " + shape);
    
    // 4. Grab our status text element again to update the user
    var text = document.getElementById('text');
    
    // -----------------------------------------------------
    // DECISION MAKING (IF / ELSE IF / ELSE)
    // -----------------------------------------------------
    // We check what the user said, and draw the matching shape.
    
    if (shape == "circle") {
        text.innerHTML = '<i class="fa-solid fa-check"></i> ' + shape + " is drawn";
        drawCircle();
    } 
    else if (shape == "line") {
        text.innerHTML = '<i class="fa-solid fa-check"></i> ' + shape + " is drawn";
        drawLine();
    } 
    else if (shape == "triangle") {
        text.innerHTML = '<i class="fa-solid fa-check"></i> ' + shape + " is drawn";
        drawTri();
    } 
    else if (shape == "rectangle") {
        text.innerHTML = '<i class="fa-solid fa-check"></i> ' + shape + " is drawn";
        drawRect();
    } 
    else if (shape == "oval") {
        text.innerHTML = '<i class="fa-solid fa-check"></i> ' + shape + " is drawn";
        drawOval();
    } 
    else if (shape == "square") {
        text.innerHTML = '<i class="fa-solid fa-check"></i> ' + shape + " is drawn";
        drawSq();
    } 
    else {
        // If the user says something we don't know (like "dog")
        
        // 1. Show error message on screen
        text.innerHTML = '<i class="fa-solid fa-xmark"></i> ' + shape + " is currently not available.";
        
        // 2. We use the speech synthesis API (the computer's voice)
        let synth = window.speechSynthesis;
        
        // 3. Create the sentence we want the computer to say
        let say = shape + " is currently not available.";
        
        // 4. Create an 'utterance' object holding our sentence
        let utter = new SpeechSynthesisUtterance(say);
        
        // 5. Tell the computer to aggressively speak the sentence out loud!
        synth.speak(utter);
    }
}

// ---------------------------------------------------------
// DRAWING FUNCTIONS
// ---------------------------------------------------------
// Below are simple functions that draw shapes using p5.js commands.
// stroke() = border color
// strokeWeight() = border thickness
// fill() = inside color
// Different shapes require different position (x, y) coordinates and sizes.

function drawLine() {
    stroke("#00b4db"); // Cyan color
    strokeWeight(5);
    // line(startX, startY, endX, endY)
    line(200, 300, 800, 300);
}

function drawCircle() {
    stroke("#11998e"); // Greenish border
    strokeWeight(5);
    fill("#38ef7d");   // Lighter green inside
    // ellipse(x, y, diameter)
    ellipse(400, 300, 300);
}

function drawOval() {
    stroke("#cb2d3e"); // Reddish border
    strokeWeight(5);
    fill("#ef473a");   // Lighter red inside
    // ellipse(x, y, width, height)
    ellipse(400, 300, 300, 400);
}

function drawTri() {
    stroke("#f2994a"); // Orange border
    strokeWeight(5);
    fill("#f2c94c");   // Yellow inside
    // triangle(x1, y1, x2, y2, x3, y3) -> Needs 3 points
    triangle(200, 500, 700, 500, 450, 150);
}

function drawRect() {
    stroke("#8e44ad"); // Purple border
    strokeWeight(5);
    fill("#9b59b6");   // Lighter purple inside
    // rect(startX, startY, width, height)
    rect(100, 100, 650, 450);
}

function drawSq() {
    stroke("#e67e22"); // Dark orange border
    strokeWeight(5);
    fill("#d35400");   // Rust orange inside
    // rect(startX, startY, width, height) -> Since width and height are the same, it's a square.
    rect(200, 200, 350, 350);
}

// ---------------------------------------------------------
// CLEAR CANVAS FUNCTION
// ---------------------------------------------------------
// This function runs when we click "Clear Canvas"
function CleanCanvas() {
    // We simply draw the background color over everything to "clear" it
    background("#1c2833");
    
    // Also reset our status text
    var text = document.getElementById('text');
    text.innerHTML = '<i class="fa-solid fa-info-circle"></i> Canvas Cleared. Click "Draw" to start again.';
}