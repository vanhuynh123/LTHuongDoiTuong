class hero{
    constructor(image,top,left,size){
        this.image = image;
        this.left = left;
        this.top = top;
        this.size= size;
    }
    getHeroElement(){
        return '<img width="'+this.size+'"'+
        'height="'+this.size+'"'+
        'src="'+this.image+'"'+
        'style= "top:' +this.top+'px;left:'+this.left+'px; position:absolute";/>';
    }
    moveRight(){
        this.left+=20;
        console.log(this.left);
    }
    moveDown(){
        this.top+=20;
        console.log(this.top);
    }
    moveLeft(){
        this.left-=20;
        console.log(this.left);
    }
}

var pikachu1 = new hero("pikachu1.jpeg",20,20,200);
    function start(){
         
        if(pikachu1.left<(window.innerWidth-pikachu1.size)){
            pikachu1.moveRight();
        }
        else if(pikachu1.left==window.innerWidth-pikachu1.size && pikachu1.top<window.innerHeight-pikachu1.size )
        {
            pikachu1.moveDown();
        }
        else if (pikachu1.top==window.innerHeight-pikachu1.size) {
            pikachu1.moveLeft();
        }
        document.getElementById("game").innerHTML= pikachu1.getHeroElement();
        setTimeout(start,100);
    }


start();
