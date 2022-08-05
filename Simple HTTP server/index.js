const http =require("http")
const fs =require("fs")
const port= 9091

const server= http.createServer(function(req,res){
    if (req.url=="/"){
       res.writeHead("200","Content-Type: text/html")
        fs.createReadStream("./index.html","utf-8").pipe(res)
    }

    else if(req.method=="POST" && req.url==="/post"){
    var data=""
    req.on("data",function(chunk){
       data+=chunk

    })
    req.on("end",function(){
        res.writeHead("200","Content-Type: text/html")
        res.end(data) 
    })
    }
})

server.listen(port,function(){
    console.log(`server is running at port ${port}`)
})