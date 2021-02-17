const HTTP = require('http');

const httpServer = HTTP.createServer((req, res) => {
    const url = req.url;
    console.log(req.headers);
    console.log(req.method);

    if(url === "/")
        res.write("Base Route");
    else
        res.write("Route: "+url);

    res.end();
});

httpServer.listen(3000);