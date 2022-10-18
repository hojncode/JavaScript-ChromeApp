// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginBtnClick() {
    console.dir(loginInput)
    console.dir()
    console.log("클릭이 실행되었음")
    alert(loginInput.title)
}

loginButton.addEventListener("click",onLoginBtnClick )
