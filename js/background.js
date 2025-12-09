const images = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg",];
const chosenImg = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img"); // 요소 생성
bgImg.src = `img/${chosenImg}`; // 속성 추가 
document.body.appendChild(bgImg); // 요소를 HTML(DOM)에 추가 (body 안에 bgImg를 자식 요소로 추가)