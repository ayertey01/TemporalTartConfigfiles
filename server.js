const http = require("http");
const url = require("url");
// files

//server goes here 
const server = http.createServer((req,res)=>{
  // console.log(req.url);
  // console.log(req);
  // res.end("Hello server");
  const pathName = req.url;
  if(pathName === "/" || "/home"){
   console.log(`this is the home page`); 
  }
  else{
    console.log(`page not found`);
  }
})

server.listen(8000,'0.0.0.0',()=>{
  //change IP to 127.0.0.1 when you're off replit
  console.log("server running on port 8000");
  
})
