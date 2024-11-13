var logoutTimer;

function resetLogoutTimer() {
    clearTimeout(logoutTimer);
    logoutTimer = setTimeout(logoutUser, 60000); // 1 minutes in milliseconds
}

function logoutUser() {
    // Perform logout actions here, such as redirecting to a logout page
    window.location.href = "logout.php"; // Replace "logout.php" with the URL of your logout page
}

// Add event listeners to reset the timer on user activity
document.addEventListener("mousemove", resetLogoutTimer);
document.addEventListener("keypress", resetLogoutTimer);

// Start the timer when the page loads
resetLogoutTimer();
