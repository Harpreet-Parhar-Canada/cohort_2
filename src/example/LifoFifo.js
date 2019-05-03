class LifoFifo {
    constructor() {
        this.arr = [];
    }

    insertion (item) {
       this.arr.push(item);
        return this.arr;
    }

    delFifo() {
        if(this.arr.length > 0) {
            this.arr.shift();
        }
    
        return this.arr;
    }

    delLifo() {
        if(this.arr.length > 0) {
            this.arr.pop();
        }
        
        return this.arr;
    }
    
}

export default LifoFifo;