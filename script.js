// script.js

document.getElementById('loginButton').addEventListener('click', function() {
    var userType = document.getElementById('userType').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log('User Type: ' + userType);
    console.log('Email: ' + email);
    console.log('Password: ' + password);
});
