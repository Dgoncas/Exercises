const EXPRESS = require('express');

const route = EXPRESS.Router();

route.get('/',(req, resp) => {
    console.log('/ visited');
    resp.send('You are in /people, on the url:' +req.url);
});

route.get('/example',(req, resp) => {
    console.log('/example visited');
    resp.send('You are in /people, on the url:' +req.url);
});

module.exports = route;