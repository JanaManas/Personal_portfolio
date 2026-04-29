// ======================
// 1. FORM VALIDATION
// ======================

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

// form.addEventListener("submit", function(event) {
   // event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        showError("Name is required");
        return;
    }

    if (!email.includes("@")) {
        showError("Enter valid email");
        return;
    }

    if (message.length < 10) {
        showError("Message must be at least 10 characters");
        return;
    }

    showSuccess("Message sent successfully!");
});

// ======================
// 2. SHOW ERROR/SUCCESS
// ======================

function showError(text) {
    msg.style.color = "red";
    msg.textContent = text;
}

function showSuccess(text) {
    msg.style.color = "green";
    msg.textContent = text;
}

// ======================
// 3. DARK MODE (with storage)
// ======================

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
    );
}

// Load saved mode
window.onload = function() {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
};

// ======================
// 4. INTERACTIVE SKILLS (click effect)
// ======================

const skills = document.querySelectorAll(".skills-list li");

skills.forEach(skill => {
    skill.addEventListener("click", () => {
        skill.style.background = "orange";
        skill.textContent += " ✔";
    });
});

// ======================
// 5. SCROLL EFFECT (navbar highlight)
// ======================

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        document.querySelector("header").style.background = "#000";
    } else {
        document.querySelector("header").style.background = "#0d47a1";
    }
});