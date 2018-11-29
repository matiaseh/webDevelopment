'use strict';
const list = document.getElementById('series');
const button = document.getElementById('nappi');
const item = document.getElementById('search');

button.addEventListener('click', (evt) => {
  list.innerHTML = '';
  let search = item.value;
  console.log('http://api.tvmaze.com/search/shows?q=' + search);

  fetch('http://api.tvmaze.com/search/shows?q=' + search)
  .then((response) => {
    return response.json();
  }).then((myjson) => {
    console.log(myjson);
    find(myjson);
  }).catch((error) => {
    console.log(error);
  });
});

const find = (info) => {
  for (let i = 0; i < info.length; i++){
    let item = document.createElement('li');

    let picture;
    try {
      picture = info[i].show.image.medium;
    } catch(error) {
      console.log(error);
      picture = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
    }

    let link = info[i].show.url;
    let name = info[i].show.name;
    let summary = info[i].show.summary;
    let genres = info[i].show.genres;

    if (summary === null){
      summary = 'No summary available.'
    }

    item.innerHTML = '<br>' + '<img src="'+ picture +'"><a href="'+ link + '"><h2>' + name + '</h2></a><p>Genres: ' + genres + '</p>' + summary;
    list.appendChild(item);
  }
};