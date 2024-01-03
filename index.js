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
fs.readFile("./txt/textfiles.txt", "utf-8", (err,data1)=>
  {fs.readFile(`./txt/${data1}.txt`, "utf-8", (err,data2)=>{
    console.log(data2);
     fs.writeFile("./txt/finalrecords", `we combined ${data1}.\n and ${data2}`, (err)=>{
      console.log('compiled successfully'); 
     })
  })
})
console.log("reading file...")


