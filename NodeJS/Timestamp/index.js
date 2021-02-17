const HTTP = require('http');

HTTP.createServer((req, resp) => {

    resp.writeHead(200,{
        'Content-Type':'text/plain'
    });
    resp.write((new Date()).toGMTString());
    resp.end();

}).listen(3000, (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("> Server listening on port 3000 ...");
    }
});