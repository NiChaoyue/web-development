/*
  author: NiChaoyue
*/
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginform_id').addEventListener('submit', function (e) {
        e.preventDefault();
        handleLogin();
    });

    document.getElementById('registerform_id').addEventListener('submit', function (e) {
        e.preventDefault();
        handleRegister();
    });

    window.toggleForm = function(formId) {
        document.getElementById('login-form').style.display = formId === 'login-form' ? 'block' : 'none';
        document.getElementById('register-form').style.display = formId === 'register-form' ? 'block' : 'none';
    };

    function handleLogin() {
        var vorname = document.getElementById('login_vorname').value;
        var nachname = document.getElementById('login_nachname').value;
        var password = document.getElementById('login_password').value;

        var key = "WOaiNichaoYuE,takezhenshiTaiKUaL";
        var encryptedVorname = vegenereEncrypt(vorname, key);
        var encryptedNachname = vegenereEncrypt(nachname, key);
        var encryptedPassword = vegenereEncrypt(password, key);

        document.getElementById('encrypted-vorname').textContent = "Encrypted-Vorname: " + encryptedVorname;
        document.getElementById('encrypted-nachname').textContent = "Encrypted-Nachname: " + encryptedNachname;
        document.getElementById('encrypted-password').textContent = "Encrypted-Passwort: " + encryptedPassword;

        fetch('login.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                vorname: encryptedVorname,
                nachname: encryptedNachname,
                password: encryptedPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                sessionStorage.setItem('loggedIn', 'true');
                window.location.href = 'main1.html';
            } else {
                alert('Login failed!');
            }
        });
    }

    function handleRegister() {
        var vorname = document.getElementById('register_vorname').value;
        var nachname = document.getElementById('register_nachname').value;
        var password = document.getElementById('register_password').value;

        var key = "WOaiNichaoYuE,takezhenshiTaiKUaL";
        var encryptedVorname = vegenereEncrypt(vorname, key);
        var encryptedNachname = vegenereEncrypt(nachname, key);
        var encryptedPassword = vegenereEncrypt(password, key);

        document.getElementById('encrypted-vorname').textContent = "Encrypted-Vorname: " + encryptedVorname;
        document.getElementById('encrypted-nachname').textContent = "Encrypted-Nachname: " + encryptedNachname;
        document.getElementById('encrypted-password').textContent = "Encrypted-Passwort: " + encryptedPassword;

        fetch('register.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                vorname: encryptedVorname,
                nachname: encryptedNachname,
                password: encryptedPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Registration successful!');
                toggleForm('login-form');
            } else {
                alert('Registration failed!');
            }
        });
    }

    function vegenereEncrypt(word, key) {
        var erg = "";
        for (var j = 0; j < word.length; j++) {
            var key_charcode = key[j % key.length].charCodeAt() - 32;
            var secret_char_encrypt = ((word[j].charCodeAt() - 32 + key_charcode) % 96) + 32;
            erg += String.fromCharCode(secret_char_encrypt);
        }
        return erg;
    }
});
