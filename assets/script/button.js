export { Button } 

class Button {
    constructor(symbol) {
        this.key = symbol; //symbol by self
        this.which = null; //position of the key button on a keyboard
        this.location = 1; //how much places has this button
        this.altKey = false;
        this.ctrlKey = false;
        this.shiftKey = false;
    }

    //getters and setters
    setKey(key) {
        this.key = key;
    }
    setWhich(position) {
        this.which = position;
    }
    setLocation(location) {
        this.location = location;
    }
    setAltKey(altKey) {
        this.altKey = altKey;
    }
    setCtrlKey(ctrlKey) {
        this.ctrlKey = ctrlKey;
    }
    setShiftKey(shiftKey) {
        this.shiftKey = shiftKey;
    }
    getKey() {
        return this.key;
    }
    getWhich() {
        return this.which;
    }
    getLocation() {
         return this.location;
    }
    getAltKey() {
         return this.altKey;
    }
    getCtrlKey() {
         return this.ctrlKey;
    }
    getShiftKey() {
         return this.shiftKey;
    }
}