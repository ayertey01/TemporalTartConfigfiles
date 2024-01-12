const http = require("http");
const url = require("url");
// files

//server goes here 
const server = http.createServer((req,res)=>{
  console.log(req.url);
  console.log(req);
  res.end("Hello server");
})

server.listen(8000,'0.0.0.0',()=>{
  //change IP to 127.0.0.1 when you're off replit
  console.log("server running on port 8000");
  
})
