const in1 = document.querySelector('#num1');
const in2 = document.querySelector('#num2');
const p = document.querySelector('#vastaus');

const sum = document.querySelector('#sum');
const sub = document.querySelector('#sub');
const multi = document.querySelector('#multi');
const jako = document.querySelector('#div');

let luku1;
let luku2;

sum.addEventListener('click', function(evt) {
  luku1 = parseFloat(in1.value);
  luku2 = parseFloat(in2.value);

  let sum = luku1 +luku2;
  let vastaus = document.createTextNode('Lukujen ' + luku1 + ' ja ' + luku2 + ' summa on ' + sum + ' ');
  p.appendChild(vastaus);
});

sub.addEventListener('click', function(evt) {
  luku1 = parseFloat(in1.value);
  luku2 = parseFloat(in2.value);

  let sub = luku1 - luku2;
  let vastaus = document.createTextNode('Lukujen ' + luku1 + ' ja ' + luku2 + ' vähennys on ' + sub + ' ');
  p.appendChild(vastaus);
});

multi.addEventListener('click', function(evt) {
  luku1 = parseFloat(in1.value);
  luku2 = parseFloat(in2.value);

  let multi = luku1 * luku2;
  let vastaus = document.createTextNode('Lukujen ' + luku1 + ' ja ' + luku2 + ' tulo on ' + multi + ' ');
  p.appendChild(vastaus);

});

jako.addEventListener('click', function(evt) {
  luku1 = parseFloat(in1.value);
  luku2 = parseFloat(in2.value);

  let jako = luku1 / luku2;
  let vastaus = document.createTextNode('Lukujen ' + luku1 + ' ja ' + luku2 + ' jakolasku on ' + jako + ' ');
  p.appendChild(vastaus);
});


