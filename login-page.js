const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "student1" && password === "rnsstudent") {
        alert("Welcome, student1.");
        location.href = "page1.html";
    } else if (username === "teacher1" && password === "rnsteacher"){
        alert("Welcome, teacher1.");
        location.reload();
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }
})