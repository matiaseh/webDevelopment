const img = document.querySelector('img');
const p = document.querySelector('p');


p.style.display = 'none';

img.addEventListener('mouseover', function(evt) {
  document.querySelector('p').style.display = 'block';
});

img.addEventListener('mouseleave', function(evt) {
  document.querySelector('p').style.display = 'none';
});
