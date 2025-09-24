// ===== voice.js =====

// Function to speak the text from textarea
function speakText() {
    const textArea = document.getElementById('textToSpeak');
    if(!textArea) return;

    const text = textArea.value.trim();
    if(text === "") {
        alert("Please enter some text to speak.");
        return;
    }

    if('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1; // normal speed
        utterance.pitch = 1; // normal pitch
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Sorry, your browser does not support text-to-speech.");
    }
}

// Redirect to feedback page
function goToFeedback() {
    window.location.href = "feedback.html";
}

// Attach event listeners on page load
document.addEventListener("DOMContentLoaded", () => {
    const speakBtn = document.querySelector("#speakBtn");
    if(speakBtn) speakBtn.addEventListener("click", speakText);

    const feedbackBtn = document.querySelector("#feedbackBtn");
    if(feedbackBtn) feedbackBtn.addEventListener("click", goToFeedback);
});
