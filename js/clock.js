const clock = document.querySelector("h2#clock"); 

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");  // padStart (첫번째자리 : 표현하고 싶은 텍스트 갯수, 두번째자리: 비어있게 될 경우 채워 넣을 값)
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText= `${hours}:${minutes}:${seconds}`;
    
    //clock.innerText = new Date().toLocaleTimeString();을 사용해도 된다.

}

getClock(); //여기에 불러옴으로써 페이지가 새로고침되자마자 실행해준다. 여기에 추가하지 않으면 아래 setInterval 이 실행되고 부터 getClock이 실행된다
setInterval(getClock, 1000);


