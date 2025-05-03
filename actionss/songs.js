document.querySelectorAll('.card').forEach(card => {
    const audio = card.querySelector('audio');
    const playBtn = card.querySelector('.play');
    const prevBtn = card.querySelector('.prev');
    const nextBtn = card.querySelector('.next');
    const progressEl = card.querySelector('.progress');
  
    // Play / Pause
    playBtn.addEventListener('click', () => {
      if (audio.paused) {
        // Pausar todos los demás
        document.querySelectorAll('audio').forEach(a => {
          if (a !== audio) {
            a.pause();
            a.currentTime = 0;
            a.closest('.card').querySelector('.play').textContent = '▶️';
          }
        });
        audio.play();
        playBtn.textContent = '⏸️';
      } else {
        audio.pause();
        playBtn.textContent = '▶️';
      }
    });
  
    // Actualizar barra de progreso
    audio.addEventListener('timeupdate', () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      progressEl.style.width = `${percent}%`;
    });
  
    // Al terminar la canción
    audio.addEventListener('ended', () => {
      playBtn.textContent = '▶️';
      progressEl.style.width = '0';
    });
  
    // Botones prev/next (navegación dentro de la misma grid)
    prevBtn.addEventListener('click', () => {
      audio.currentTime = Math.max(0, audio.currentTime - 10);
    });
    nextBtn.addEventListener('click', () => {
      audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
    });
  });
  