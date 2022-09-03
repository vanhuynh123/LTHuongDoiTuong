class human{
    name;
    gender;
    weight;
    constructor(name,gender,weight){
        this.name=name;
        this.gender=gender;
        this.weight=weight;
    }
    talk(str){
        console.log(str);
    }
   
    eat(apple){
        if(apple.getWeight()>0){
            apple.decrease();
            this.weight++;
        };
        
    }
    checkApple(apple){
        return apple.weight>0;
    }
    say(c){
        
        this.c;
    }
    getName(){
        return this.name;
    }
    getGender(){
        return this.gender;

    }
    getWeight(){
        return this.weight;
    }

}
