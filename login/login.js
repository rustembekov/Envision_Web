document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    const user = {
        username: username,
        password: password,
    };

    fetch("https://sabrrustembek.pythonanywhere.com/api/token/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Login failed. Please check your username and password.');
            }
        })
        .then(data => {
            localStorage.setItem("refresh", data.refresh);
            localStorage.setItem("access", data.access);
            localStorage.setItem("username", username);

            alert('Login successful!');
            window.location.href = "../main/main.html";
        })
        .catch(error => {
            alert("An error occurred. Please try again later.");
            console.error(error);
        });
});
