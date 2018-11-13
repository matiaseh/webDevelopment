const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  {
    thumb: 'http://lorempixel.com/100/100/sports/1/',
    big: 'http://lorempixel.com//640/480/sports/1/',
  },
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];

const k1 = pics[0].thumb;
const k2 = pics[1].thumb;
const k3 = pics[2].thumb;

const i1 = pics[0].big;
const i2 = pics[1].big;
const i3 = pics[2].big;

const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');

const list = document.createElement("ul");
const body = document.querySelector('body');

body.appendChild(list);

const ul = document.querySelector("ul");

ul.appendChild(img1);
ul.appendChild(img2);
ul.appendChild(img3);

/*document.querySelectorAll('img')[1].src = k1;
document.querySelectorAll('img')[2].src = k2;
document.querySelectorAll('img')[3].src = k3;*/

const kuva1 = document.querySelectorAll('img')[1];
const kuva2 = document.querySelectorAll('img')[2];
const kuva3 = document.querySelectorAll('img')[3];

kuva1.src = k1;
kuva2.src = k2;
kuva3.src = k3;

kuva1.addEventListener('click', function(evt) {
  document.querySelectorAll('img')[0].src = i1;
  document.querySelector('div').setAttribute('class', 'visible');
});

kuva2.addEventListener('click', function(evt) {
  document.querySelectorAll('img')[0].src = i2;
  document.querySelector('div').setAttribute('class', 'visible');
});

kuva3.addEventListener('click', function(evt) {
  document.querySelectorAll('img')[0].src = i3;
  document.querySelector('div').setAttribute('class', 'visible');
});

const iso = document.querySelectorAll('img')[0];

iso.addEventListener('click', function(evt) {
  document.querySelector('div').setAttribute('class', 'hidden');
});