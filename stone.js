class Stone {
    constructor(x,y,width, height){
        var options = {
            'restitution' : 0.8,
		    'density' : 12,
		    'friction' :0.9
        }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width
    this.height = height
    World.add(world, this.body)
  };
  display(){
    

    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    strokeWeight(3);
    stroke('white')
    fill('black')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};

      