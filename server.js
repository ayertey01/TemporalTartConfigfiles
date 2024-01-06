const http = require("http");
// files


//server goes here 
const server = http.createServer((req,res)=>{
  res.end("Hello server");
})

server.listen(8000)