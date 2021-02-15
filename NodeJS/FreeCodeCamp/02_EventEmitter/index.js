const EventEmitter = require('events');

const eventEmitter = new EventEmitter();
eventEmitter.on("trigger", (param1,param2) => console.log("triggered "+param1+" "+param2));

eventEmitter.emit("trigger","param1","param2");

class test extends EventEmitter{

    constructor(name){
        super();
        this._name = name;
        this.on(name, () => console.log("My name is "+this._name));
    }

    get name(){
        return this._name;
    }

}

const test1 = new test('TEST 1');
const test2 = new test('TEST 2');

test1.emit(test1.name);
test2.emit(test2.name);