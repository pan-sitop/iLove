document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('puzzleContainer');
    const rows = 3, cols = 3;
    let pieces = [];

for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.style.backgroundPosition = `-${c * (300/cols)}px -${r * (300/rows)}px`;
        piece.setAttribute('draggable', 'true');
        pieces.push(piece);
    }
}

pieces.sort(() => Math.random() - 0.5)
    .forEach(p => container.appendChild(p));
let dragSrc = null;
  
function handleDragStart(e) {
    dragSrc = this;
    e.dataTransfer.effectAllowed = 'move';
}
  
function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}
  
function handleDrop(e) {
    e.stopPropagation();
    if (dragSrc !== this) {
        const nodes = Array.from(container.children);
        const srcIndex = nodes.indexOf(dragSrc);
        const tgtIndex = nodes.indexOf(this);
    if (srcIndex > -1 && tgtIndex > -1) {
        container.insertBefore(dragSrc, nodes[tgtIndex]);
        container.insertBefore(this, nodes[srcIndex]);
    }
    }
}
  
pieces.forEach(p => {
    p.addEventListener('dragstart', handleDragStart);
    p.addEventListener('dragover', handleDragOver);
    p.addEventListener('drop', handleDrop);
 });

const frases = [
    'Todo el mundo dice que el amor duele, pero eso no es cierto. La soledad duele. El rechazo duele. Perder a alguien duele. El odio duela. Todo el mundo confunde estas cosas, pero en realidad el amor es la única cosa en este mundo que cubre todo el dolor y te hace sentir vivo de nuevo. El amor es la única cosa en este mundo que no duele. ❤️🍂',
    'Nadie es ni poco ni demasiado para nadie, somos la medida justa en el corazón de quien nos acepta, nos ama, u nos respeta...',
    'Dicen que el corazón no se vuelve loco por Cualquiera a mí no hay verdad más cierta como esta, Pues mi corazón solo está loco por ti 🌹',
    'No olvides cerrar con amor, lo que un dia abriste con amor...',
    'Hay que morir un poco para poder estar vivo...'
];
const btnFin = document.getElementById('btn-finalizar');
const overlay = document.getElementById('messageBox');
const mensajeText = document.getElementById('messageText');
const closeMsg = document.getElementById('closeMessage');

btnFin.addEventListener('click', () => {
    const idx = Math.floor(Math.random() * frases.length);
    mensajeText.textContent = frases[idx];
    overlay.style.display = 'flex';
});

closeMsg.addEventListener('click', () => {
    overlay.style.display = 'none';
    });
});