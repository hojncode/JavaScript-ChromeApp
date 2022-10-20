const images = ["img:0.jpeg","img:1.jpeg","img:2.jpeg"];

const selectedImage = images[Math.floor(Math.random()*images.length)];

// createElement 는 자바스크립트를 html에 생성시킨다.
const bgImage = document.createElement("img")

bgImage.src = `files/${selectedImage}`

//body에 bgImage를 appendChild 한다.
document.body.appendChild(bgImage)