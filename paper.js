class Paper{
    constructor(x,y,radius){
        this.x=x
        this.y=y
        this.radius = radius
        this.angle = this.angle

        var options = {
            isStatic: false,
            density:1.2,
            restitution:0.3,
            friction:0.5
            
        }
        this.paper = Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world,this.paper);
    }

    display(){
        fill('purple');
        rectMode(CENTER)
        push()
        translate(this.paper.position.x,this.paper.y)
        //angleMode(RADIANCE)
        rotate(this.angle)
        ellipse(this.x,this.y,this.paper.width,this.paper.height)
        pop()
    }
}