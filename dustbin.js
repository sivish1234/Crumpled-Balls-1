class dustbin {
    constructor(x,y,width,height) {
      var options = {
        isStatic: true
     }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.lW = Bodies.rectangle(x-width/2,y-height/2-25,20,90,options);
        this.rW = Bodies.rectangle(x+width/2,y-height/2-25,20,90,options);

        World.add(world,this.body);
        World.add(world,this.lW);
        World.add(world,this.rW);
    }
     display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("white");
        rect(0, 0, this.width, this.height);
        pop();

        var posL = this.lW.position
        push();
        translate(posL.x, posL.y);
        rectMode(CENTER);
        fill("white");
        rect(0,0,20,90);
        pop();
    
        var posR = this.rW.position
        push();
        translate(posR.x, posR.y);
        rectMode(CENTER);
        fill("white");
        rect(0,0,20,90);
        pop();
     }
}