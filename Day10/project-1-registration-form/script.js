
const form = document.querySelector("#reg");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const passwordInput = document.querySelector("#password");

const success = document.querySelector("#success");

// Display error messages
function showError(input, message) {
    const error = document.getElementById(input.id + "-error");

    error.textContent = message;
    input.classList.toggle("invalid", message !== "");
}

// Check email format
function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Check phone number
function isValidPhone(value) {
    return /^\d{10}$/.test(value);
}

// Validate all fields
function validate() {
    let isValid = true;

    if (nameInput.value.trim().length < 3) {
        showError(nameInput, "Name must have at least 3 characters.");
        isValid = false;
    } else {
        showError(nameInput, "");
    }

    if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, "Enter a valid email address.");
        isValid = false;
    } else {
        showError(emailInput, "");
    }

    if (!isValidPhone(phoneInput.value.trim())) {
        showError(phoneInput, "Enter a valid 10-digit phone number.");
        isValid = false;
    } else {
        showError(phoneInput, "");
    }

    if (passwordInput.value.length < 8) {
        showError(passwordInput, "Password must have at least 8 characters.");
        isValid = false;
    } else {
        showError(passwordInput, "");
    }

    return isValid;
}

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    success.textContent = "";

    if (validate()) {
        success.textContent =
            "Registration successful, " + nameInput.value.trim() + "!";

        form.reset();
    }
});
