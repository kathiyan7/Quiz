const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

class Snowflake {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 4 + 1;
    this.speed = Math.random() * 2 + 1;
  }

  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
  }
}

function createSnowflakes() {
  for (let i = 0; i < 100; i++) {
    snowflakes.push(new Snowflake());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowflakes.forEach((snowflake) => {
    snowflake.update();
    snowflake.draw();
  });
  requestAnimationFrame(animate);
}

createSnowflakes();
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  snowflakes.length = 0;
  createSnowflakes();
});