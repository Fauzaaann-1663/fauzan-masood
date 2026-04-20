// Dynamic Greeting Logic
const greetingText = document.getElementById('greeting');
const hours = new Date().getHours();
let timeOfDay = "Morning";

if (hours >= 12 && hours < 17) timeOfDay = "Afternoon";
if (hours >= 17) timeOfDay = "Evening";

if(greetingText) {
    greetingText.innerText = `Good ${timeOfDay}, Fauzan Masood`;
}

// Smooth Scroll Function
function playPulse() {
    const workSection = document.getElementById('work');
    if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
    }
}
