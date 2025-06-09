document.addEventListener("DOMContentLoaded", () => {
  const messageLines = [
    "Anh yêu em",
    "Cảm ơn em đã đến bên anh",
    "Quan tâm chăm sóc và làm một ngày của anh thật đẹp",
    "Yêu Phanh ❤️"
  ];

  const messageContainer = document.getElementById('message');

  messageLines.forEach((line, index) => {
    const p = document.createElement('p');
    p.textContent = line;
    p.style.animationDelay = `${index * 1}s`;
    messageContainer.appendChild(p);
  });

  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💗';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }

  setInterval(createHeart, 300);
});
