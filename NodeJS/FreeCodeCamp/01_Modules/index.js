const testModule = require('./test-module');

console.log('Hello World !');
console.log(testModule);

console.log(testModule.PI);
console.log(testModule.sum(1,2));
console.log(new testModule.someObject());