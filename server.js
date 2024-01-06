const http = require("http");
// files


//server goes here 
const server = http.createServer((req,res)=>{
  res.end("Hello server");
})

server.listen(8000,'0.0.0.0',()=>{
  console.log("server running on port 8000");
  
})