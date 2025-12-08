// adaptive.js
function updateLayout() {
  const body = document.body;
  if (window.innerWidth <= 900) {
    body.classList.add('mobile');
  } else {
    body.classList.remove('mobile');
  }
}

window.addEventListener('load', updateLayout);
window.addEventListener('resize', updateLayout);
