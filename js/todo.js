
const toDoForm = document.getElementById("todo-form"); // getElementById 로 todo-form 을 id값으로 가진 태그 변수로 정의.
const toDoInput = document.querySelector("#todo-form input"); //querySelector로 #을 사용해서 id값이 todo-form인 태그를 찾고, 빈칸 입력 후 , 찾은 태그 내부에 있는 input 태그를 찾는다.
const toDoList = document.getElementById("todo-list"); //getElementById 로 id 값이 todo-list 인 태그를 찾는다.

const TODOS_KEY = "todos" // 코드 작성시 사람의 실수를 방지하기 위해 변수로 치환해서 사용함.

let toDos = []; //const 대신 let 을 사용해서 업데이트가 가능하도록 만들고,

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // localStorage.setItem 는 로컬스토리지에 값을 저장한다(키:밸류 형식이 요구됨), JSON.stringify 는 해당 값을 json 형식의 문자열로 변환 시켜줌.
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
    span.innerText.text = newTodo; // 여기의 newTodo 는 handleToDoSubmit()에서 만든 것.
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
    const newTodoObject = { // object 로 toDos배열에 저장하기 위함.
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObject);  // toDos 배열에 newTodo(입력한 값)를 넣는다.
    paintToDo(newTodoObject); // 이전 newTodo --> 현재 newTodoObject 를 인자로 보내어 함수 실행 시킴.
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); //이벤트 리스너 : "submit"이 발동되면, handleToDoSubmit가 작동된다

// function consoleLog(item) {
//     console.log("this is the turn of", item)
// }  ------> 코드 합침 (애로우 평션 사용) parsedToDos.forEach((item)=> console.log("this is the turn of" , item))

const savedToDos = localStorage.getItem(TODOS_KEY) // 로컬스토리지에 저장되어 있는 값을 불러옴(조회하기).
// console.log(savedToDos);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // JSON.parse 을 사용해서 json 형식으로 변환.
    toDos = parsedToDos; // 이전에 입력되어 있던 todo 데이터들을 toDos 배열에 넣어주어 리스트로 나열해서 보여 줄 수 있음(let을 사용했기에 가능)
    parsedToDos.forEach(paintToDo) //forEach 는 array 에 있는 각각의 item 에 대해서 실행해준다. 인자에 paintToDo 를 넣어 줌 으로써 저장된 각각의 데이터를 화면에 렌더 시킬 수 있다.
    // console.log(parsedToDos)
}

function sexyFilter() { return true

}

[1,2,3,4].filter(sexyFilter)

sexyFilter(4)


//forEach 함수는 paintToDo를 parsedToDos 배열의 요소마다 실행한다.
//filter 는 true 만 반환하는 성질을 이용한다.

const todos = [{text:"aaa"}, {text:"bbb"}]

function sexyFilter(x) {return x.text !== "aaa"}

todos.filter(sexyFilter)