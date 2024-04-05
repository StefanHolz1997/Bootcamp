import { ifError } from "assert";
import * as fs from "fs";

fs.writeFile("./blog1.txt", "Ich bin ein Webdeveloper!", (err) => {
  if (err) return console.log(err);
});

fs.writeFile("./blog2.txt", "Ich wurde neu hinzugefügt", (err) => {
  if (err) return console.log(err);
});

if (fs.existsSync("./assets/")) {
  fs.rmdir("./assets/", (err) => {
    if (err) return console.log("error bei deleted assets folder");
  });
} else {
  fs.mkdir("./assets/", (err) => {
    if (!err) return console.log("error bei create assets folder");
  });
}
if (fs.existsSync("./delete.txt")) {
  fs.unlink("./delete.txt", (err) => {
    if (!err) console.log("error bei deleted delete.txt");
  });
} else {
  fs.writeFile("./delete.txt", "Hallo ich bin die Delete datei", (err) => {
    if (!err) console.log("error bei created delete.txt");
  });
}

if (fs.existsSync("./Hello.txt")) {
  fs.renameSync("./Hello.txt", "./HelloWorld.txt");
} else {
  fs.writeFile("./Hello.txt", "Hello World, pls rename me!", (err) => {
    if (!err) console.log("Created Hello.txt");
  });
}
