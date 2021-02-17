const EXPRESS = require('express');
const PATH = require('path');
const BODYPARSER = require('body-parser');
const JOI = require('joi');

const app = EXPRESS();

app.use('/public', EXPRESS.static(PATH.join(__dirname,'static')));
app.use(BODYPARSER.urlencoded({extended: false}));

app.get('/', (req, resp) => {
    resp.sendFile(PATH.join(__dirname,'static','index.html'));
});

app.post('/', (req,resp) => {
    
    const schema = JOI.object().keys({
        email: JOI.string().trim().email().required(),
        pass: JOI.string().min(5).max(10).required()
    });

    const {error, value} = schema .validate(req.body);

    if(error){
        console.log(error);
        resp.json({ succesfull: false, error: error.details[0].message});
    }else{
        console.log('Data validated Succesfully');
        console.log(value);
    }

});

app.listen(3000);
console.log("> Server started on port 3000 ..."); 