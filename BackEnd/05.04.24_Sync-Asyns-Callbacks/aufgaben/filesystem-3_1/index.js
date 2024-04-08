const fs = require("fs");

if (!fs.existsSync("./data/")) {
  fs.mkdir("./data/", (err) => {
    if (err) console.log("Error bei create data folder");
  });
}

const writeTextFile = (text) => {
  fs.appendFile("./data/text.txt", `${text}\n`, (err) => {
    if (err) console.log("Error bei write TextFile");
  });
};

writeTextFile("Hey ich bin neu hier.");
writeTextFile("Freut mich dich kennen zu lernen");
