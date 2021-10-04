const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;
// bgImage.alt = "";

// document.body.appendChild(bgImage);

// Background로 구현해보기
const bgImage = document.querySelector('.main').style.background = `no-repeat 50% 50%/cover url(img/${chosenImage})`;