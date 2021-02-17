const EXPRESS = require('express');
const PATH = require('path');

const app = EXPRESS();

app.use('/public',EXPRESS.static(PATH.join(__dirname,'static')));

app.get('/', (req, res)=>{
    res.sendFile(PATH.join(__dirname,'static','index.html'));
});

app.listen(3000);
console.log('> Server listening on port 3000 ...');