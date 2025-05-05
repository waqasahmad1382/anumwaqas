// Countdown
let timeLeft = 10;
const countdownEl = document.getElementById("countdown");

const countdownTimer = setInterval(() => {
  timeLeft--;
  countdownEl.innerText = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(countdownTimer);
    countdownEl.innerText = "🎉";
    launchFireworks();
  }
}, 1000);

// Fireworks 🎆
const canvas = document.getElementById("fireworks-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function launchFireworks() {
  let particles = [];

  function createParticle(x, y) {
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: x,
        y: y,
        angle: Math.random() * 2 * Math.PI,
        speed: Math.random() * 4 + 1,
        radius: Math.random() * 2 + 1,
        alpha: 1,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
      });
    }
  }

  function updateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.alpha > 0);
    particles.forEach(p => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.alpha -= 0.01;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  createParticle(canvas.width / 2, canvas.height / 2);
  setInterval(updateParticles, 30);
}

// Birthday Messages
function showMessage(msg) {
  document.getElementById("message-box").innerText = msg;
}