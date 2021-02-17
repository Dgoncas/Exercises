const EXPRESS = require('express');
const PATH = require('path');
const BODYPARSER = require('body-parser');

const app = EXPRESS();

app.use('/public', EXPRESS.static(PATH.join(__dirname,'static')));
app.use(BODYPARSER.urlencoded({extended: false}));

app.get('/', (req, resp) => {
    resp.sendFile(PATH.join(__dirname,'static','index.html'));
});

app.post('/', (req,resp) => {
    const email = req.body.email;
    const pass = req.body.pass;
    console.log(req.body);
    
    resp.send('Recieved data:'+email+" | "+pass);
});

app.listen(3000);
console.log("> Server started on port 3000 ...");