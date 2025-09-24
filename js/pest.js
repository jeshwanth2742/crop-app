// ===== pest.js =====

// Function to simulate pest/disease detection
function detectPest() {
    const fileInput = document.getElementById('imageUpload');
    const resultDiv = document.getElementById('result');

    if(!fileInput || fileInput.files.length === 0) {
        resultDiv.style.display = "block";
        resultDiv.style.color = "red";
        resultDiv.textContent = "Please upload an image first!";
        return;
    }

    // Dummy detection logic
    resultDiv.style.display = "block";
    resultDiv.style.color = "green";
    resultDiv.textContent = "Detected: Leaf spot disease. Recommended: Apply neem oil spray every 7 days.";
}

// Dummy camera button function
function useCamera() {
    alert("Camera access is not available in this demo. Please upload an image.");
}

// Function to redirect to feedback
function goToFeedback() {
    window.location.href = "feedback.html";
}

// Attach event listeners on page load
document.addEventListener("DOMContentLoaded", () => {
    const detectBtn = document.querySelector("#detectBtn");
    if(detectBtn) detectBtn.addEventListener("click", detectPest);

    const cameraBtn = document.querySelector("#cameraBtn");
    if(cameraBtn) cameraBtn.addEventListener("click", useCamera);

    const feedbackBtn = document.querySelector("#feedbackBtn");
    if(feedbackBtn) feedbackBtn.addEventListener("click", goToFeedback);
});
