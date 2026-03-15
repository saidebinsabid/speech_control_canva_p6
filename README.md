# 🎙️ Voice Controlled Drawing Canvas

A professional, easy-to-use web application that listens to your voice commands and draws different shapes on a beautiful digital canvas! 

Instead of drawing with a mouse, you simply click the **"Draw"** button, speak a shape name into your microphone, and watch the magic happen.

## 🚀 Features

- **Voice Recognition:** Uses the built-in browser Web Speech API to turn your spoken words into actions.
- **Dynamic Drawing:** Powered by `p5.js`, it instantly draws shapes like circles, lines, rectangles, squares, ovals, and triangles.
- **Modern UI/UX:** A clean, professional *glassmorphism* design with a dark background gradient, styled purely with raw CSS (No Bootstrap!).
- **Beginner-Friendly Code:** The JavaScript file is heavily documented with simple, step-by-step explanations so anyone new to coding can understand how it works.

---

## 🛠️ Technology Stack & CDNs

This project uses standard web technologies combined with powerful open-source libraries via direct CDN links.

*   **HTML5 & CSS3:** For the core structure and modern styling.
*   **JavaScript (ES6):** For logic, speech processing, and DOM manipulation.
*   **[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API):** Built into modern browsers (like Chrome) for speech recognition and synthesis.
*   **[p5.js](https://p5js.org/):** A JavaScript library for creative coding and easy canvas drawing.
    *   *CDN Link:* `https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.min.js`
    *   *CDN Addon Link:* `https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.dom.min.js`
*   **[Google Fonts](https://fonts.google.com/specimen/Poppins):** Using the 'Poppins' font for a clean, modern typography.
    *   *CDN Link:* `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap`
*   **[FontAwesome](https://fontawesome.com/):** For professional and intuitive icons on buttons and headers.
    *   *CDN Link:* `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`

---

## ⚙️ How It Works

Here is a simple breakdown of the internal logic:

1.  **Initialization:** When you load the page, `p5.js` creates a `900x650` canvas inside our centered container.
2.  **Listening Trigger:** Clicking the **"Draw"** button activates `window.webkitSpeechRecognition`. 
3.  **Voice Processing:** You speak a word into the microphone (e.g., "Circle"). The browser processes this audio and provides the text transcript.
4.  **Data Cleaning:** We convert the text to lowercase and remove any trailing periods (`.`) so the word matches perfectly.
5.  **Decision Making:** An `if/else` statement checks the word.
    *   If it matches a known shape (e.g., `circle`, `rectangle`, `triangle`), the corresponding `p5.js` drawing function (like `ellipse()` or `rect()`) is called.
    *   If it **doesn't** match, the system uses the `SpeechSynthesis` API to speak back to you, saying *"Shape is currently not available."*
6.  **Clearing:** Clicking the **"Clear Canvas"** button repaints the background covering up all drawings.

### 🗣️ Supported Voice Commands:
*   "Circle"
*   "Line"
*   "Triangle"
*   "Rectangle"
*   "Oval"
*   "Square"

---

## 💻 How to Run Locally

You don't need any complex servers to run this project!

1. Clone or download this repository to your computer.
2. Find the folder where the files are stored.
3. Double-click on the `index.html` file to open it in your default web browser (Google Chrome is highly recommended for the best Speech API support).
4. Click the "Draw" button and authorize microphone access when prompted by the browser.
5. Start speaking!

> **Note:** Because this project uses the Web Speech API, some browsers may require an active internet connection to process voice data properly.

---

*Designed and developed specifically to be simple, beautiful, and educational.* 🎓
