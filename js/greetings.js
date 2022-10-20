//로그인 form 태그
// const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");

// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

//로그인 form 태그 내부의 input 태그
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

//a태그
// const link = document.querySelector("a");

//h1태그의 querySelector로 id값 가져오기
const greeting = document.querySelector("#greeting");

// 대문자 사용은 개발자들 관습 - string만 포함된 변수는 대문자로 쓴다 + 중요한 변수가 아니기 때문에.
// string 을 작성하다가 오타가 나면 자바스크립트는 이걸 지적하지 않는다, 하지만 변수명이 오타나면 지적해주기 때문에 이렇게 스트링은 변수로 사용하는 것을 지향한다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


//로그인 클릭시 구현 되는 함수 - 
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); // classList.add는 실행후 해당 동작을 추가해준다. 여기서는 css를 사용해 display:none;을 적용시킨다.
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username)
    paintGreetings(username)
}

//h1태그 화면에 보이게 만드는 함수
function paintGreetings(username) {
    greeting.innerText = `Hello  ${username}`; // innerText란 메소드의 역할은 greeting을 id로 가진 태그에 해당 텍스트를 띄워준다
    greeting.classList.remove(HIDDEN_CLASSNAME); // classList란 메소드의 역할은 greeting을 id로 가진 태그에 포함된 class에서 remove(삭제를 원하는 요소)를 적용시킨다.
}

//a태그 클릭시 알럿창 띄우는 함수 , preventDefault()로 브라우저의 해당 기본 기능 발동 방지함 - 없을시 기능발동. 여기서는 링크로 페이지가 넘어가지 않고 알럿창만 띄우고 멈춰준다.
// function handleLinkClick(event) {
//     event.preventDefault();
//     console.log(event)
//     alert("clicked!")
// }

//이벤트리스너 - 실행 순서를 항상 인지하자
// loginForm.addEventListener("submit", onLoginSubmit); //  loginForm에 해당되는 태그의 "submit" 이 발동되면, onLoginSubmit()함수가 실행된다.
// link.addEventListener("click", handleLinkClick); //link에 해당되는 태그의 "click"이 발동되면, handleLinkClick() 함수가 실행된다.
// loginButton.addEventListener("click",onLoginBtnClick )

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

