class paper {
    constructor(x,y){
      var options ={
        isStatic:false,
        restitution:0.5,
        friction:0.5,
        density:1.2
     }
        this.body = Bodies.circle(x, y, 25, options);
        World.add(world, this.body);
    }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill("orange");
        ellipse(0, 0, 20, 20);
        pop();
     }
   }