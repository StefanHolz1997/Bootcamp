const timeoutAPeriod = 3000;
const timeoutBPeriod = 4000;

console.log(timeoutAPeriod);
console.log(timeoutBPeriod);

setTimeout(function timeourCallback() {
  setTimeout(function timeourCallback() {
    console.log("fertig timeout B");
  }, timeoutAPeriod);
  console.log("fertig timeout A");
}, timeoutBPeriod);

// Console: A dann B
// Der B-Timeout wird gestartet, dann wird "fertig timeout A" ind die console geloggt
