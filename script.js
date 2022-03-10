

const elementById = id => {
  return document.getElementById(id)
}

const handleSearch = () => {
  const keyword = elementById('keyword');
  const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${keyword.value}`;
  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => showArtist(data))
}

const showArtist = ({ artists }) => {

  const artistContainer = elementById('artists');
  // const artists = data.artists
  // const { artists } = data;
  artists.forEach(artist => {
    const div = document.createElement('div');
    div.classList.add('artist-card')
    div.innerHTML = `<div class="image-container">
    <div class="image-container-inner">
      <img src="" alt="" />
    </div>
  </div>
  <div class="info-container">
    <h1></h1>
    <p>Country:</p>
    <p>Style:</p>
  </div>
  <button class="album-button">
    <i class="fa-solid fa-compact-disc"></i>
    <p class="button-title">Albums</p>
  </button></p>`
    console.log(artist);
    artistContainer.appendChild(div)
  });
}