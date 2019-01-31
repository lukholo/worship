const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.images img');
const opacity = 0.4;


imgs.forEach(img => img.addEventListener('click', imageClick));

function imageClick(e) {
  imgs.forEach(img => (img.style.opacity = 1));
  current.src = e.target.src;

  e.target.style.opacity = opacity;
}