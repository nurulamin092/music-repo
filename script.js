

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
  console.log(artists);
  // const artists = data.artists
  // const { artists } = data;
  artists.forEach(artist => {
    console.log(artist);
  });
}