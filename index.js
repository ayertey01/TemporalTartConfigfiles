// const fs = require("fs");
// // synchronous method 
// const textIn = fs.readFileSync("./txt/inputs.txt", "utf-8");
// console.log(textIn);
// const textOut =
//   "this is a script on modifying my mistake\n" +
//   textIn +
//   "Created on " +
//   Date.now();

// fs.writeFileSync("./txt/output.txt", textOut);
// const peter = "ayertey01 ";
// console.log(`This was completed by ${peter}\n`);


//asynchronous method  
const fs = require("fs");
fs.readFile("./txt/textfile.txt", "utf-8", (err,data)=>{
  console.log(data);
})
console.log("reading file...")


