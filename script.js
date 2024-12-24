function map(val, minA, maxA, minB, maxB) {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
  }
  
  function Card3D(card, ev) {
    let anchor = card.querySelector('a');
    let imgRect = anchor.getBoundingClientRect();
    let width = imgRect.width * 1.01;
    let height = imgRect.height * 1.01;
    let mouseX = ev.offsetX * 1.1;
    let mouseY = ev.offsetY * 1.1;
    let rotateY = map(mouseX, 0, 180, -25, 25) * 1.5;
    let rotateX = map(mouseY, 0, 250, 25, -25) * 1.5;
    let brightness = map(mouseY, 0, 250, 1.5, 0.5);
    let opacity = map(mouseY, 0, 250, 1, 0.5);
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.filter = `brightness(${brightness})`;
    anchor.style.opacity = opacity;
  }
  
  var cards = document.querySelectorAll('.card');
  
  cards.forEach((card) => {
    card.addEventListener('mousemove', (ev) => {
      Card3D(card, ev);
    });
    
    card.addEventListener('mouseleave', (ev) => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
      card.style.filter = 'brightness(1)';
    });
  });