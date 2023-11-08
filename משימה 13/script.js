function randomColor() {
  let x = (Math.random() * 256);
  let y = (Math.random() * 256);
  let z = (Math.random() * 256);
  document.body.style.background = `rgb(${x},${y},${z})`;
  }

