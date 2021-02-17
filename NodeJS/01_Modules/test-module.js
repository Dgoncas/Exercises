const PI = 3.14;
const sum = (n1,n2) => n1+n2;

class someObject{
    constructor(){
        console.log("Object created");
    }
}

//module.exports.PI = PI;
//module.exports.sum = sum;
//module.exports.someObject = someObject;

module.exports ={ PI:PI, sum:sum, someObject: someObject};