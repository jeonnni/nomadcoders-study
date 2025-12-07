const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
];

const chosenImg = images[Math.floor(Math.random()*images.length)];
console.log(chosenImg);
const bgImg = document.createElement("img")
console.log(bgImg);
bgImg.src = `img/${chosenImg}`
document.body.appendChild(bgImg)