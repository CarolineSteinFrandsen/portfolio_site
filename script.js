const text = "HELLO!\nVelkommen til mit portfolio.";
const typewriterElement = document.getElementById("typewriter"); // id//
let index = 0;

function typeWriter() {
  typewriterElement.textContent = text.slice(0, index); // Antal vises//
  index++; // Bogstaver tilføjes//
  if (index <= text.length) {
    setTimeout(typeWriter, 100); // Hastighed: 100ms per bogstav//
  }
}

typeWriter();
