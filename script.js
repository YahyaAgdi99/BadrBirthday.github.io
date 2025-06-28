const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettis = [];

function Confetti() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height - canvas.height;
  this.radius = Math.random() * 6 + 4;
  this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
  this.speed = Math.random() * 3 + 2;
  this.tilt = Math.random() * 10 - 5;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x + this.tilt, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  this.update = function () {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
    this.draw();
  };
}

for (let i = 0; i < 150; i++) {
  confettis.push(new Confetti());
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettis.forEach(c => c.update());
  requestAnimationFrame(animateConfetti);
}

function startCelebration() {
  document.getElementById("birthdaySong").play();
  animateConfetti();
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

