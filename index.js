const http = require("http");
const url = require("url");
const fs = require("fs");
// files

//server goes here 
const server = http.createServer((req,res)=>{
  //console.log(req.url);
  //console.log(req);
  const pathName = req.url;
  if(pathName === "/" || "/Overview"){
    res.end("This is the overview page");
  }
  else if(pathName === "/About"){
    res.end("This is the about page ");
  }

  else if(pathName ==="/API"){
    res.end(`this is the api resquest`);
    fs.readfile(`./txt/data.json`,"utf-8",
               (err,data))
  }
  else{
    res.writeHead(404,{
      "Content-Type":"text/html"
      
    })
    res.end(`<h1>Oops! page not found</h1>`);
  }
})

server.listen(8000  ,'127.0.0.1',()=>{
  //change IP to 127.0.0.1 when you're off replit
  console.log("server running on port 8000");
  
})
