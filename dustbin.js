class Dustbin{
    constructor(x,y,width,height){
    this.x = x
    this.y = y
    this.thickness = 20;
    this.width=width;
    
    this.angle = 0;
    var options ={
        isStatic:false
    }
    
    this.bottom = Bodies.rectangle(this.x,this.y,120,20,options)
    this.left = Bodies.rectangle(this.x/2,this.y-100,this.thickness,500,options)
    this.right = Bodies.rectangle(this.x + this.x/2,this.y-100,this.thickness,120,options)

    World.add(world,this.bottom)
    World.add(world,this.left)
    World.add(world,this.right)
     
    Matter.Body.setAngle(this.left,this.angle)
    Matter.Body.setAngle(this.right,-1*this.angle)







    }
    display(){
        rectMode(CENTER)
        push()
        translate(this.left.position.x,this.left.position.y)
        //angleMode(RADIANCE)
        rotate(this.angle)
        rect(0,0,this.left.width,this.left.height)
        pop()

       // rect(this.bottom.position.x,this.bottom.position.y,this.bottom.width,this.bottom.height)

        
        rectMode(CENTER)
        push()
        translate(this.right.position.x,this.right.position.y)
       // angleMode(RADIANCE)
        rotate(-1*this.angle)
        rect(0,0,this.right.width,this.right.height)
        pop()

        rectMode(CENTER)
        push()
        translate(this.bottom.position.x,this.bottom.position.y)
        //angleMode(RADIANCE)
        rect(0,0,this.bottom.width,this.bottom.height)
        pop()
        
       // rect(this.bottom.position.x,this.bottom.position.y,this.bottom.width,this.bottom.height)

        
        //rect(this.bottom.position.x,this.bottom.position.y,this.bottom.width,this.bottom.height)


        //rect(this.left.position.x,this.left.position.y,this.left.width,this.left.height)
         




    }
}