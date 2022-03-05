const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
  if (x > canvas.width) dx = -dx;
  if (y > canvas.height) dy = -dy;
  if (x < 0) dx = -dx;
  if (y < 0) dy = -dy;
}

const id = setInterval(draw, 10);
document.body.addEventListener('click', () => clearInterval(id));
