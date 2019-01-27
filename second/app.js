//Event module and emitter class.
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(a,b)=>{
    console.log(a+b);
});
eventEmitter.emit('tutorial',1,2);

//Event using custom objects
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let nitin = new Person('Nitin');

nitin.on('name',()=>{
    console.log("my name is " + nitin._name);
});

nitin.emit('name');