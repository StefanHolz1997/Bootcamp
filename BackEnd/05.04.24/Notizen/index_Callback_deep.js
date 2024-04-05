const person = {
  name: "Beate",
  alter: 39,
  emails: ["beate@gmail.com", "b.hubert@company.at"],
};

person.emails[0] = "beate.privat@gmail.com";

console.log(person.emails[0]);

// von OBEN nach UNTEN --> Synchoner Code Ausführung

// Gegenstück zu synchroner Code Ausführung -> Asynchroner Code Execution

setTimeout(function timeourCallback() {
  console.log("fertig timeout A");
}, Math.random() * 3000);

setTimeout(function timeourCallback() {
  console.log("fertig timeout B");
}, Math.random() * 2000);

// Man kann nicht mehr 100% sagen welcher timeout-Callback (A oder B) zuerst ausgeführt wird ...
// Man kann aber garantieren, dass die setTimeout-Statements in der Reihenfolge GESTARTET werden
