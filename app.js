//로그인 form 태그
const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

//로그인 form 태그 내부의 input 태그
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

//링크
const link = document.querySelector("a")

const greeting = document.querySelector("#greeting")

// 대문자 사용은 개발자들 관습 - string만 포함된 변수는 대문자로 쓴다 + 중요한 변수가 아니기 때문에.
const HIDDEN_CLASSNAME = "hidden";

//로그인 기능
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); // classList.add는 실행후 해당 동작을 추가해준다. 여기서는 css를 사용해 display:none;을 적용시킨다.
    const username = loginInput.value;
    localStorage.setItem("저장된이름",username)
    greeting.innerText = `Hello  ${username}`; //greeting.innerText = "Hello " + username; 과 같다 - 백틱사용
    greeting.classList.remove(HIDDEN_CLASSNAME)

    // const username = loginInput.value;  // 변수선언은 함수내에서 해야한다.
    // console.log(username.length);
    // if(username === "") {
    //     alert("이름을 입력하세요"); 
    // } else if(username.length > 15) {
    //     alert("글자 수 제한 15") ;
    // }
    
}

//링크 기능
function handleLinkClick(event) {
    event.preventDefault();
    console.log(event)
    alert("clicked!")
}

//이벤트리스너
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
// loginButton.addEventListener("click",onLoginBtnClick )
