/*
    Task
    - Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
    - In the respective child classes, call `super()` with it's type.
*/

// Task: Add code here

class BaseSignal {
    constructor( type ){
        if(this.constructor.type === "base"){
            throw new Error("This class cannot be instantiated");
        }
        this.type = type;
    }
    //If the constructor type != base, send signal.
    send() {
        console.log(`Sending ${this.type} signal`);
    }
}


// TV Signal to inherit baseSignal
class TvSignal extends BaseSignal {
  constructor(type){
        super(type);
    }
}

class AirconSignal extends BaseSignal {
constructor(type){
        super(type);
    }
}

class DoorSignal extends BaseSignal {
 constructor(type){
        super(type);
    }
}

const tv = new TvSignal('tv');
tv.send(); // prints "Sending tv signal"

const door = new DoorSignal('door');
door.send(); // prints "Sending door signal"

const aircon = new AirconSignal('aircon');
aircon.send(); // prints "Sending aircon signal"