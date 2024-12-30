const text = "HELLO!\nVelkommen til mit portfolio.";
const typewriterElement = document.getElementById("typewriter");
let index = 0;

function typeWriter() {
  typewriterElement.textContent = text.slice(0, index);
  index++;
  if (index <= text.length) {
    setTimeout(typeWriter, 100); // Hastighed: 100ms per bogstav
  }
}

typeWriter();
