class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.05,
            'friction':0.05,
            'density':0.001
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;      
        World.add(world, this.body);
      }
      display(){
        console.log (this.body.speed);
        if (this.body.speed > 3 ){
        world.remove (world, this.body);
          push();
          this.visibility - this.visibility - 5;
          Tint(255,this.visibility);
          Image(this.image , this.body.position.x , this.body.position.y, 50 , 50);
          pop();
        }
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
  }