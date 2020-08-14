class Bob{
    constructor(x,y,radius) {
        var options = {
            isStatic : false,
            'restitution' : 0.5,
            'friction' : 0.3,
			'density' : 1.2
		}
		this.x = x;
        this.y = y;
		this.radius = radius;

        this.body = Bodies.circle(this.x,this.y,this.radius/2, options);
        World.add(world, this.body);
            
    }

    display(){
      var pos = this.body.position;
	 
	 
      push();
     translate(pos.x, pos.y);
     strokeWeight(3);
     stroke("Green");
     fill(255);
     ellipse(0,0,this.radius,this.radius);
     pop();
      }
    }