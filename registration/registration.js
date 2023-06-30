document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();


    var username = document.getElementById('register-username').value;
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    var confirmPassword = document.getElementById('verify-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    var user = {
        username: username,
        email: email,
        password: password,
    };

    fetch("https://sabrrustembek.pythonanywhere.com/api/user/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if(response.ok){
                alert('Registration successful!');
                window.location.href = "../login/index.html";
            }else{
                alert('Registration failed!');
            }
        })
        .catch(error => {

            alert("An error occurred. Please try again later.");
            console.error(error);
        });



});
