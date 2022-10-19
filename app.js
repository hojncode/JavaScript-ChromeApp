// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginBtnClick() {
    const username = loginInput.value;  // 변수선언은 함수내에서 해야한다.
    console.log(username.length);
    if(username === "") {
        alert("이름을 입력하세요"); 
    } else if(username.length > 15) {
        alert("글자 수 제한 15") ;
    }
    
}

// loginButton.addEventListener("click",onLoginBtnClick )
