const http = require("http");
const fs = require("fs");

http.createServer(function(req, res){
    const file = req.url.substr(1);
    const filename = file === "" ? "index.html" : file;
    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {"Content-Type":"text/html"});
            return res.end(
                '<h1 style="text-align:center">ERROR: Page Not Found</h1>'
            );
        }
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write(data);
        return res.end();
    })
}).listen(5000, ()=>{
    console.log("Server is running at PORT 5000")
});