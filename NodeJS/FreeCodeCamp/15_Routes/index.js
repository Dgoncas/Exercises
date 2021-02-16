const EXPRESS = require('express');

const app = EXPRESS();

app.use('/people',require('./routes/people'));

app.get('/', (req,resp) => {
    resp.send('You are in the / page');
});

app.listen(3000, () => console.log(' > Server started on port 3000 ...'));