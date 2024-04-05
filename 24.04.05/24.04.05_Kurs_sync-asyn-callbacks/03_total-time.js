const timeoutAPeriod = Math.ceil(Math.random() * 10) * 1000;
const timeoutBPeriod = Math.ceil(Math.random() * 10) * 1000;

console.log(timeoutAPeriod);
console.log(timeoutBPeriod);

setTimeout(() => {
  console.log("callback wird ausgeführt Timeout A");
}, timeoutAPeriod);

setTimeout(() => {
  console.log("callback wird ausgeführt Timeout B");
}, timeoutBPeriod);

// beide Timeouts zählen parallel runter
// dh die Timeout-Zeiten addieren sich nicht, sondern laufen nebeneinander ab
// Länge der gesamten Operation ist also nur so lang wie die längste Timeout-Zeit
