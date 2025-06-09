const message = "Chỉ cần em cười là cả thế giới của anh sáng lên rồi 💖";
let i = 0;
const target = document.getElementById("message");

function typeChar() {
  if (i < message.length) {
    target.textContent += message.charAt(i);
    i++;
    setTimeout(typeChar, 80);
  }
}

typeChar();

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '100vh';
  heart.style.animationDuration = (Math.random() * 2 + 4) + 's';
  heart.style.transform = `rotate(${Math.random() * 360}deg)`;
  heart.style.opacity = Math.random() * 0.5 + 0.5;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 150);
