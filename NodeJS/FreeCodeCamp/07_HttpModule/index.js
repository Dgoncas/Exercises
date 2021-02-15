const HTTP = require('http');
const FS = require('fs');

HTTP.createServer( (req , resp) =>{

    if(req.url === '/'){
        resp.writeHead(200,{
            'Content-Type' : 'text/html'
        });

        const readStream = FS.createReadStream('./index.html');

        readStream.pipe(resp);
    }

}).listen(3000);