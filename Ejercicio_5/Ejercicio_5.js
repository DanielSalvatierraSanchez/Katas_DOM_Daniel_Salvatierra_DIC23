const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const albumsUl = document.createElement("ul");
for (const album of albums) {
  const albumLi = document.createElement("li");
  albumLi.textContent = album;
  albumsUl.appendChild(albumLi);
}
document.body.appendChild(albumsUl);
