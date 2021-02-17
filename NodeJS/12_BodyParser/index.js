const EXPRESS = require('express');
const PATH = require('path');
const BODYPARSER = require('body-parser');

const app = EXPRESS();

app.use('/public',EXPRESS.static(PATH.join(__dirname,'static')));
app.use(BODYPARSER.json());

app.get('/', (req,resp) => {
    resp.sendFile(PATH.join(__dirname,'static','index.html'));
});

app.post('/', (req, resp) => {
    console.log(req.body);
    //PROCESS THE DATA
    resp.json({success: true});
});

app.listen(3000);
console.log("> Started Server on port 3000 ...");