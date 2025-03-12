// Den her funktion opretter Album-objekt.
function Album(artist, album, totalTracks, productionYear, rating) {
  this.artist = artist;
  this.album = album;
  this.totalTracks = totalTracks;
  this.productionYear = productionYear;
  this.rating = rating;
}

//Tilføjer en række til tabellen i de respektive kolonner
function addDivWithAlbum(album, parentid) {
  let parentElement = document.getElementById(parentid);
  let elementToAdd =
  "<tr>" +
   "<td>" + album.artist + "</td>" +
    "<td>" + album.album + "</td>" +
    "<td>" + album.totalTracks + "</td>" +
    "<td>"   + album.productionYear + "</td>" +
    "<td>"   + album.rating + "</td>" +
    "</tr>";
  parentElement.innerHTML = parentElement.innerHTML + elementToAdd;
}

//Henter data fra albums.json og opretter Album-objekter
fetchContent("Data/albums.json").then((albums) => {
  console.log("Original Data: ");
  console.log(albums);

  let albumObjects = [];

  console.log("To be populated: ");
  console.log(albumObjects);

//Konverterer data fra JSON til Album-objekter
  for (let i = 0; i < albums.length; i++) {
    const album = new Album(
      albums[i].artistName,
      albums[i].albumName,
      albums[i].trackList.length,
      albums[i].productionYear,
      albums[i].rating
    );
    albumObjects.push(album);
  }

  console.log("Object Data: ");
  console.log(albumObjects);

  console.log("Test: ");
  console.log(albumObjects[7].totalTracks);

  //Tilføjer Album-objekter til tabellen
  albumObjects.forEach(function (a) {
    addDivWithAlbum(a, "content");
  });
});

//Henter data fra URL
async function fetchContent(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
