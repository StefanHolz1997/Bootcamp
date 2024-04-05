const timeoutAPeriod = Math.ceil(Math.random() * 10) * 1000;
const timeoutBPeriod = Math.ceil(Math.random() * 10) * 1000;

console.log(timeoutAPeriod);
console.log(timeoutBPeriod);

setTimeout(function timeourCallback() {
  console.log("fertig timeout A");
}, timeoutAPeriod);

setTimeout(function timeourCallback() {
  console.log("fertig timeout B");
}, timeoutBPeriod);
