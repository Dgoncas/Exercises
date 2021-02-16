const JOI = require('joi');

const userInput = {
    presonalInfo: {
        name: 'Paco',
        street: 'asdadad',
        city: 'asdasd',
        age: 23,
        state: 'fl'
    },
    preferences: [{example: 'example1'},{example: 'example2'},{example: 'example3'}]
};

const personalInfoSchema = JOI.object().keys({
    name: JOI.string().trim().required(),
    street: JOI.string().trim().required(),
    city: JOI.string().trim().required(),
    age: JOI.number().required(),
    state: JOI.string().length(2).required()
});

const preferencesSchema = JOI.array().items(
    JOI.object().keys({
        example:JOI.string().trim().required()
    })
);

const schema = JOI.object().keys({
    presonalInfo: personalInfoSchema,
    preferences: preferencesSchema
});


const {error, value} = schema.validate(userInput);

if(error){
    console.log(error);
}else{
    console.log('DATA VALIDATED SUCCESFULLY');
    console.log(value);
    //DATA PROCESSING GOES HERE
}