document.addEventListener('DOMContentLoaded', () => {
  // Contador
  const startDate = new Date('2025-02-14'); // fecha 
  const display = document.getElementById('contador');
  const btn = document.getElementById('btn-iniciar');
  function updateCounter() {
    const now = new Date();
    const diff = now - startDate;
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);
    display.textContent = `${months} meses, ${days} días`;
  }
  if (display) {
    btn.addEventListener('click', updateCounter);
    updateCounter();
    setInterval(updateCounter, 60000);
  }
  // puzzle
  document.addEventListener("DOMContentLoaded", () => {
    const puzzle = document.getElementById("puzzle");
    const totalPieces = 16;
    const positions = [];
    for (let i = 0; i < totalPieces; i++) {
      const piece = document.createElement("div");
      piece.classList.add("piece");
  
      const row = Math.floor(i / 4);
      const col = i % 4;
      const x = col * 100;
      const y = row * 100;
  
      piece.style.backgroundPosition = `-${x}px -${y}px`;
      piece.setAttribute("draggable", "true");
      piece.dataset.index = i;
  
      positions.push(piece);
    }
    shuffleArray(positions);
    positions.forEach(p => puzzle.appendChild(p));
    let dragged;

    puzzle.addEventListener("dragstart", e => {
      dragged = e.target;
    });
  
    puzzle.addEventListener("dragover", e => {
      e.preventDefault();
    });
    puzzle.addEventListener("drop", e => {
      if (e.target.classList.contains("piece")) {
        const temp = document.createElement("div");
        puzzle.insertBefore(temp, dragged);
        puzzle.insertBefore(dragged, e.target);
        puzzle.insertBefore(e.target, temp);
        temp.remove();
      }
    });
  });
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
//mensaje 
  const sendBtn = document.getElementById('sendBtn');
  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      const text = document.getElementById('msgInput').value;
      const phone = '+59164035144'; // Ajusta el número
      if (!text.trim()) return alert('Escribe un mensaje primero');
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
    });
  }
});
//emojis
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("heart");

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.top = "100vh";

  corazon.style.backgroundColor = colorAleatorio();

  document.querySelector(".heart-container").appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 4000);
}
function colorAleatorio() {
  const colores = ["#ff99cc", "#ff66b2", "#ffb3d1", "#ff4da6"];
  return colores[Math.floor(Math.random() * colores.length)];
}

setInterval(crearCorazon, 300);
