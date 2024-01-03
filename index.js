const fs = require("fs");
const textIn = fs.readFileSync("./txt/inputs.txt", "utf-8");
console.log(textIn);
const textOut =
  "this is a script on modifying my mistake\n" +
  textIn +
  "Created on " +
  Date.now();

fs.writeFileSync("./txt/output.txt", textOut);
const peter = "ayertey01 ";
console.log(`This wascompleted by ${peter}`);


fs.readFileSync("./package.json","utf-8");
console.log(fs)
