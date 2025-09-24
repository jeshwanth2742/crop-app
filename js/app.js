// ===== app.js =====

// DUMMY LOGIN / REGISTER FUNCTION
function login() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    if(email === "" || password === "") {
        message.textContent = "Please enter email and password";
        message.style.color = "red";
        return;
    }

    // Dummy login: accept any input
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";

    // Redirect to dashboard
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 1000);
}

// ===== PAGE NAVIGATION FUNCTION =====
// Use for dashboard buttons or other page links
function navigate(page) {
    window.location.href = page;
}

// ===== FEEDBACK SUBMISSION =====
function submitFeedback() {
    const feedbackInput = document.getElementById('feedback');
    const message = document.getElementById('message');

    if(!feedbackInput || feedbackInput.value.trim() === "") {
        message.textContent = "Please enter your feedback before submitting.";
        message.style.color = "red";
        return;
    }

    // Dummy submission
    message.style.color = "green";
    message.textContent = "Thank you for your feedback! Redirecting...";

    // Redirect to dashboard after 1 second
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 1000);
}

// ===== DUMMY MARKET PRICE ADVICE =====
function getMarketAdvice() {
    const location = document.getElementById('location')?.value;
    const crop = document.getElementById('crop')?.value;
    const adviceDiv = document.getElementById('advice');

    if(!location || !crop) {
        adviceDiv.style.display = "block";
        adviceDiv.style.color = "red";
        adviceDiv.textContent = "Please select both location and crop.";
        return;
    }

    let advice = `For ${crop} in ${location}, `;
    if(crop === "Wheat") advice += "sell within 2-3 weeks for best price.";
    else if(crop === "Rice") advice += "wait until the monsoon season is over.";
    else if(crop === "Maize") advice += "sell now to get high market rates.";
    else if(crop === "Tomato") advice += "market price is currently good; sell soon.";

    adviceDiv.style.display = "block";
    adviceDiv.style.color = "green";
    adviceDiv.textContent = advice;
}

// ===== DUMMY WEATHER ADVICE =====
function getWeatherAdvice() {
    const location = document.getElementById('location')?.value;
    const date = document.getElementById('date')?.value;
    const adviceDiv = document.getElementById('advice');

    if(!location || !date) {
        adviceDiv.style.display = "block";
        adviceDiv.style.color = "red";
        adviceDiv.textContent = "Please select both location and date.";
        return;
    }

    let advice = `Weather advice for ${location} on ${date}: `;
    if(location === "Delhi") advice += "Sunny day expected. Ideal for sowing wheat.";
    else if(location === "Mumbai") advice += "Moderate rainfall expected. Prepare rice fields.";
    else if(location === "Bangalore") advice += "Cool weather expected. Good for maize planting.";

    adviceDiv.style.display = "block";
    adviceDiv.style.color = "green";
    adviceDiv.textContent = advice;
}

// ===== DUMMY PEST DETECTION =====
function detectPest() {
    const fileInput = document.getElementById('imageUpload');
    const resultDiv = document.getElementById('result');

    if(!fileInput || fileInput.files.length === 0) {
        resultDiv.style.display = "block";
        resultDiv.style.color = "red";
        resultDiv.textContent = "Please upload an image first!";
        return;
    }

    resultDiv.style.display = "block";
    resultDiv.style.color = "green";
    resultDiv.textContent = "Detected: Leaf spot disease. Recommended: Apply neem oil spray every 7 days.";
}

// ===== VOICE SUPPORT FUNCTION =====
function speakText() {
    const textArea = document.getElementById('textToSpeak');
    if(!textArea) return;
    const text = textArea.value;

    if('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Sorry, your browser does not support text-to-speech.");
    }
}

// ===== REDIRECT TO FEEDBACK =====
function goToFeedback() {
    window.location.href = "feedback.html";
}
