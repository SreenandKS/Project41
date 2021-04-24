class Umbrella{
    constructor(x,y,width,height){
       var options = {
            'friction':0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,{options,isStatic:true});
        this.width = width;
        this.height = height
        this.image = loadImage("image-removebg-preview (1).png");
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        push();
        translate(position.x,position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
