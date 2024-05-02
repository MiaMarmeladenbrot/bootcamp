setTimeout(() => {
  console.log("callback wird ausgeführt Timeout A");
}, Math.random() * 3000);

setTimeout(() => {
  console.log("callback wird ausgeführt Timeout B");
}, Math.random() * 2000);

// Man kann nicht mehr 100% sagen, welcher Timeout zuerst ausgeführt wird
