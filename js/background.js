const images = ["img:0.jpeg","img:1.jpeg","img:2.jpeg"];

const selectedImage = images[Math.floor(Math.random()*images.length)];

// createElement 는 자바스크립트를 html에 생성시킨다.
const bgImage = document.createElement("img")
// console.log(bgImage)

//bgImage의 src에 ``안의 내용을 추가해준다.
bgImage.src = `files/${selectedImage}`

//appendChild는 html body에 append 시킨다.
document.body.appendChild(bgImage)