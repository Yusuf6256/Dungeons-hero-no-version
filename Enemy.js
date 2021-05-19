class Enemies
{
    constructor(x,y,w,h){
    
    var options = 
    {
        velocity: { x: -20, y: 0 }
    }
    this.animation = loadAnimation("images/Enemy/Enemy2/Enemy Walk/Enemy 2 (5).png",
    "images/Enemy/Enemy2/Enemy Walk/Enemy 2 (6).png","images/Enemy/Enemy2/Enemy Walk/Enemy 2 (7).png",
    "images/Enemy/Enemy2/Enemy Walk/Enemy 2 (8).png","images/Enemy/Enemy2/Enemy Walk/Enemy 2 (9).png",
    "images/Enemy/Enemy2/Enemy Walk/Enemy 2 (10).png")


    this.enemy = Bodies.rectangle(x,y,w,h,options)
    this.w = w
    this.h = h

    World.add(world,this.enemy)
    }

    display()
    {
        var angle = this.enemy.angle;
        push();
        translate(this.enemy.position.x,this.enemy.position.y)
        rotate(angle);
        imageMode(CENTER);
        image(this.animation, 0, 0, this.w,this.h)
        pop();
    }
}