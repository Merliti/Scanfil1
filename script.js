function updateClock() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    const now = new Date();

    // Get the current time in HH:MM format
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Add leading zero to hours and minutes if needed
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    timeElement.textContent = `${hours}:${minutes}`;

    // Get the current date in Day Mon DD format
    const days = ["E", "T", "K", "N", "R", "L", "P"];
    const months = ["jaan", "veebr", "märts", "apr", "mai", "juuni", "juuli", "aug", "sept", "okt", "nov", "dets"];

    // Adjust the day index to start from Monday
    let dayIndex = now.getDay() - 1;
    if (dayIndex < 0) {
        dayIndex = 6; // If it's Sunday, set to 6 (Sunday at the end of the array)
    }

    const dayName = days[dayIndex];
    const monthName = months[now.getMonth()];
    const day = now.getDate();

    dateElement.textContent = `${dayName} ${monthName} ${day}`;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);