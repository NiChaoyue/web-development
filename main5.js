//Checks if the user is logged in. If the user is not logged in (i.e., there is no 'loggedIn' key in 
//session storage or its value is false), immediately redirect the user to the index.html page so 
//that the user can log in or go back to the home page.
document.addEventListener('DOMContentLoaded', (event) => {
    if (!sessionStorage.getItem('loggedIn')) {
        window.location.href = 'index.html';
    }
});