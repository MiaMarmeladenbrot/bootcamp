const timeoutAPeriod = 3000;
const timeoutBPeriod = 0;

console.log(timeoutAPeriod);
console.log(timeoutBPeriod);

setTimeout(() => {
  setTimeout(() => {
    console.log("callback wird ausgeführt Timeout B");
  }, timeoutBPeriod);

  console.log("callback wird ausgeführt Timeout A");
}, timeoutAPeriod);

// egal, wie viele Sekunden der zweite Timeout hat, wird der A-console.log zuerst ausgeführt
// der B-Timeout stellt sich immer erst mal hinten an, egal, wie lange er warten soll
