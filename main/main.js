const pathGet = "https://sabrrustembek.pythonanywhere.com/api/" + localStorage.getItem("username") + "/";

fetch(pathGet, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("access"),
    },
})
    .then(response => {
        if (response.ok) {
            response.json()
                .then(data => {
                    document.getElementById("user_hello").textContent = data.username;
                    document.getElementById("user_email").textContent = data.email;
                });
        } else {
            console.error('Error retrieving user data');
        }
    });


fetch("https://sabrrustembek.pythonanywhere.com/api/user/", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
})
    .then(response => {
        if (response.ok) {
            response.json()
                .then(data => {
                    const cont = document.getElementById("users");
                    let j = 1;
                    for (let i = 0; i < data.length; i++) {
                        const u = document.createElement("div");
                        const a = document.createElement("a");
                        a.textContent = j++ + ". " + data[i].username;
                        u.append(a);
                        cont.append(u);
                    }
                });
        } else {
            console.error('Error retrieving user list');
        }
    });
