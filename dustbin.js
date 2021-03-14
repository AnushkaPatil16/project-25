class dustbin{
    constructor(x,y,w,h){

        this.dust = Bodies.rectangle(x,y,w,h);
        this.width = w;
        this.heigth = h;
        World.add(world,this.dust); 
    }

    display(){
        
        push() 
        translate(this.dust.position.x,this.dust.position.y); 
        rectMode(CENTER); 
        rotate(this.dust.angle)
        stroke("black");
        fill("whith");
        rectMode(CENTER);
        rect(0,0,this.width,this.heigth);
        pop() 
    }
}