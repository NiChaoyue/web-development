/*
  author: NiChaoyue
*/
document.addEventListener('DOMContentLoaded', function() {
    // Check the Status of Login
    var loggedIn = sessionStorage.getItem('loggedIn');
    var loginStatus = document.getElementById('login-status');

    if (loggedIn) {
        if (loginStatus) {
            loginStatus.textContent = "You are logged in.";
        } else {
            console.error('Element with id "login-status" not found.');
        }

        // Set the Welcome message
        const welcomeMessage = document.getElementById('welcomeMessage');
        if (welcomeMessage) {
            welcomeMessage.textContent = '';
        } else {
            console.error('Element with id "welcomeMessage" not found.');
        }
    } else {
        window.location.href = 'index.html';
    }
});

function logout() {
    sessionStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
}
