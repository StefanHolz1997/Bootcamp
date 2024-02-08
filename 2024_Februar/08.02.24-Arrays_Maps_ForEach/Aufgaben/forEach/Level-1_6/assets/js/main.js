let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

const edited = album.map((word) => {
  if (word.includes(".")) {
    word = word.slice(0, word.indexOf("."));
    return String(word).toLowerCase();
  }
  return "invalid";
});
console.log(edited);
