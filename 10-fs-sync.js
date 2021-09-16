const { readFileSync, writeFileSync } = require("fs");
// const fs = require('fs')
// fs.read

console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result-sync.txt",
  `The result is: ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next one");
