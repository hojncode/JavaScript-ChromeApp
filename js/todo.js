const toDoForm = document.getElementById("todo-form"); // getElementById 로 todo-form 을 id값으로 가진 태그 변수로 정의.
const toDoInput = document.querySelector("#todo-form input"); //querySelector로 #을 사용해서 id값이 todo-form인 태그를 찾고, 빈칸 입력 후 , 찾은 태그 내부에 있는 input 태그를 찾는다.
const toDoList = document.getElementById("todo-list"); //getElementById 로 id 값이 todo-list 인 태그를 찾는다.

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    // console.log(event)
    // console.dir(event.target.parentElement);
    const li = event.target.parentElement; // 생성된 todoList 들의 고유 주소를 찾음.
    li.remove(); // 해당된 li만 삭제.
}

function paintToDo(newTodo) {
    const li = document.createElement("li"); // createElement 로 li 태그를 html 에 만들어준다.
    const span = document.createElement("span"); // createElement 로 span 태그를 html 에 만들어준다.
    span.innerText = newTodo; // 여기의 newTodo 는 handleToDoSubmit()에서 만든 것.
    const button = document.createElement("button"); // button 생성.
    button.innerText = "❎"; //버튼에 텍스트 추가.
    button.addEventListener("click",deleteToDo); // 이벤트리스너 추가 - click 시 발동.
    li.appendChild(span); // 자바스크립트 에서 만들어준 li태그에 span 태그를 자식으로 붙여준다.
    li.appendChild(button);
    toDoList.appendChild(li); // id값을 toDoList 로 가진 태그의 자식 태그로 li태그를 추가한다.
}

function handleToDoSubmit(event) {
    event.preventDefault(); // 브라우저가 새로고침 되는 것을 방지 (값이 변할 때마다 새로고침 되지 않게하기 위함)
    const newTodo = toDoInput.value; // 해당 input태그의 value (화면에 입력된 텍스트값)
    toDoInput.value = ""; // submit 될 때마다 인풋창에 적힌 텍스트를 지워줌(초기화)
    // console.log(newTodo, toDoInput.value); // newTodo 값의 생성, 리셋을 확인하기 위한 콘솔
    toDos.push(newTodo); //toDos로 생성한 배열에 newTodo(입력한 값)를 넣는다.
    paintToDo(newTodo); // newTodo를 인자로 보내어 함수 실행 시킴.
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); //이벤트 리스너 : "submit"이 발동되면, handleToDoSubmit가 작동된다