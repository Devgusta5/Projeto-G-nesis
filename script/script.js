// Tela de carregamento
window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("loading-screen").style.display = "none";

      //tempo em milisegundos da tela de carregamento nesta merda
    }, 1000);
});

// Partículas futuristas
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numberOfParticles = 100;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = "#0ff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  particlesArray = [];
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// ---------Responsive-navbar-bootstrap-only-----------

// Ativa o menu mobile ao clicar no botão (Bootstrap já faz isso, mas se quiser garantir)
$(document).ready(function(){
  var path = window.location.pathname.split("/").pop();
  if (path == '') {
    path = 'index.html';
  }
  $('#navbarSupportedContent ul li a').each(function(){
    var href = $(this).attr('href');
    if (href && href.indexOf(path) !== -1) {
      $(this).parent().addClass('active');
    }
  });
 

  // Marca o item ativo conforme a página
  var path = window.location.pathname.split("/").pop();
  if (path == '') {
    path = 'index.html';
  }
  $('#navbarSupportedContent ul li a').each(function(){
    var href = $(this).attr('href');
    if (href && href.indexOf(path) !== -1) {
      $(this).parent().addClass('active');
    }
  });
});