const toDoForm = document.getElementById("todo-form"); // getElementById 로 todo-form 을 id값으로 가진 태그 변수로 정의.
const toDoInput = document.querySelector("#todo-form input"); //querySelector로 #을 사용해서 id값이 todo-form인 태그를 찾고, 빈칸 입력 후 , 찾은 태그 내부에 있는 input 태그를 찾는다.
const toDoList = document.getElementById("todo-list"); //getElementById 로 id 값이 todo-list 인 태그를 찾는다.

function paintToDo(newTodo) {
    const li = document.createElement("li"); // createElement 로 li 태그를 html 에 만들어준다.
    const span = document.createElement("span"); // createElement 로 span 태그를 html 에 만들어준다.
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); // 브라우저가 새로고침 되는 것을 방지 (값이 변할 때마다 새로고침 되지 않게하기 위함)
    const newTodo = toDoInput.value; // 해당 input태그의 value (화면에 입력된 텍스트값)
    toDoInput.value = ""; // submit 될 때마다 인풋창에 적힌 텍스트를 지워줌(초기화)
    console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit); //이벤트 리스너 : "submit"이 발동되면, handleToDoSubmit가 작동된다