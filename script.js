document.getElementById('login-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'hasibul@gmail.com' && userPassword == 'hasibul') {
        window.location.href = 'banking.html';
    }
    else {
        console.log('get error');
    }
})



