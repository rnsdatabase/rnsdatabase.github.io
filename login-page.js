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
        let foo = prompt("Which student page would you like to view?");
        location.href = "page"+ foo + ".html";
    } else if (username === "admin" && password === "admin"){
        let foo = prompt("Enter the page.");
        location.href = foo;
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }
})
