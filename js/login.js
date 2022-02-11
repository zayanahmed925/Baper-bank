document.getElementById('login-button').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const inputMail = emailField.value;
    // // For Password
    const passwordField = document.getElementById('user-password');
    const yourpassword = passwordField.value;
    // check email and Password
    if (inputMail == 'any@gmail.com' && yourpassword == 'stop') {
        window.location.href = 'banking.html';
    }

})