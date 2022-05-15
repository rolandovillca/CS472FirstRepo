class Duck {
    constructor() {
        this.flying = false;
        this.quaking = false;
        this.xPos = 0;
        this.yPos = 0;
    }
    
    takeOff() {
        this.flying = true;
    }
    
    land() {
        this.flying = false;
    }
    
    startQuacking() {
        this.quaking = true;
    }
    
    stopQuacking() {
        this.quaking = false;
    }
    
    moveTo(x, y) {
        this.xPos = x;
        this.yPos = y;
    }
}