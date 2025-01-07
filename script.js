const text = "HELLO!\nVelkommen til mit portfolio.";
const typewriterElement = document.getElementById("typewriter"); // id//
let index = 0;

function typeWriter() {
  typewriterElement.textContent = text.slice(0, index); // Antal vises//
  index++; // Bog tilføjes//
  if (index <= text.length) {
    setTimeout(typeWriter, 100); // 100ms pr bog//
  }
}

typeWriter();
