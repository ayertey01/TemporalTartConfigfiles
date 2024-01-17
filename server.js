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
   res.end(`this is the home page`); 
  }
  else{
    res.writeHead(404,
                  {
                    "Content-Type":"text/html"
                  });
  }
  res.end(`<h1>Oops! page not found</h1>`);
})

server.listen(8000,'0.0.0.0',()=>{
  //change IP to 127.0.0.1 when you're off replit
  console.log("server running on port 8000");
  
})
