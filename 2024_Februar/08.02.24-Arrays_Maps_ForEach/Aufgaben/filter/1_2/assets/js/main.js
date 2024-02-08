const heroes = [
  "Superman",
  "Batman",
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  null,
];

const filterFunktion = heroes.filter(
  (helden) => helden !== undefined && helden !== null
);

console.log(filterFunktion);
