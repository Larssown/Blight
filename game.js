const backgroundMusic = new Audio('background.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.2; // justera volymen 0.0 - 1.0

backgroundMusic.play().catch(() => {
  // Vissa webbläsare kräver användarinteraktion innan ljud får spelas
  console.log("Musik väntar på användarinteraktion");
  document.addEventListener('click', () => {
    backgroundMusic.play();
  }, { once: true });
});