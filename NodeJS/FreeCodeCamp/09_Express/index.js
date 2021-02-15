const EXPRESS = require('express');

const app = EXPRESS();
app.on('mount' , (app) => console.log('> Server listening'));

app.get('/', (req, resp) => {
    resp.send('Base Route');
});

app.get('/example', (req, resp) => {
    resp.send('Example Route with no params');
});

app.get('/example/:name/:age',(req,resp)=>{
    resp.write('\tName:\t' + req.params.name + '\tAge:\t' + req.params.age +'\n');
    resp.write('\tQuery1:\t' + req.query.query1 + '\tQuery2:\t'+req.query.query2+'\n');
    console.log(req.query);
    resp.end();
});

app.listen(3000);
console.log('> Server listening on port 3000');
