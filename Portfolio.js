
document.addEventListener("DOMContentLoaded", function() {
    const greeting = document.createElement("p");
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.textContent = "Good Morning!";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon!";
    } else {
        greeting.textContent = "Good Evening!";
    }

    const header = document.querySelector("header");
    header.appendChild(greeting);
});
