class apple{
    weight;
    constructor(weight){
        this.weight=10;
    }
    decrease(){
        this.weight--;
    }
    isEmpty(){
        return this.weight<=0;
    }
    getWeight(){
        return this.weight;
    }
}

