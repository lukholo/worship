const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.images img');
const opacity = 0.4;


imgs.forEach(img => img.addEventListener('click', imageClick));

function imageClick(e) {
  imgs.forEach(img => (img.style.opacity = 1));
  current.src = e.target.src;
  current.classList.add('fade-in');

  // remove fade in class after
  setTimeout(() => current.classList.remove('fade-in'), 500);

  e.target.style.opacity = opacity;
}