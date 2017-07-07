function Asteroid(position, velocity){
	this.isPlayer=false;
	this.isBullet = false;
	this.isAsteroid = true;
	
	this.position = position;
	this.velocity = velocity;
	this.angle =0;
	this.angvel =0;
		
	this.num_sides;
	this.points=[];
	this.sides=[];
	
	this.dead = false;

	
	
	this.generate = function(radius){

		
		this.radius = 0;
		this.radius_squared =0;
		
		this.num_sides = 3+(Math.ceil(Math.random()*8));
		
		for(var i = 0; i < this.num_sides; i++){
			this.points.push(new Vector_Radial(((1.0*i)/this.num_sides)*2*Math.PI, Math.max(Math.random()*radius, radius*0.45)).to_vector2());
			if(this.radius < this.points[i].get_length()) {this.radius = this.points[i].get_length();}
			
			//Generate points between two radii from the center
		}
		
		for(var i = 0; i < this.points.length; i++){
			if (i == 0) {
				this.sides.push([this.points[0], this.points[this.points.length-1]]);
			}
		else{
				this.sides.push([this.points[i], this.points[i-1]]);
			}
		}
		
		this.radius_squared = this.radius*this.radius;
	}

	this.draw = function(context){
		context.strokeStyle="#FFF";
		context.beginPath();
		for(side of this.sides){
			context.moveTo(side[0].x, side[0].y);
			context.lineTo(side[1].x, side[1].y);
		}
		context.stroke();
	}
	
	this.die = function(){
		if (this.radius/3 > 10 && this.num_sides > 3){
			for(var i = 0; i < this.num_sides-2; i++){
				ents.push(new Asteroid(this.position.add(new Vector2((this.radius/2)-Math.random()*this.radius, (this.radius/2)-Math.random()*this.radius)), this.velocity.add(new Vector2(20-Math.random()*40, 20-Math.random()*40)))      );
				ents[ents.length-1].generate(this.radius/2.5);
			}
		}
		
		score++;
		
		this.dead = true;
	}

	
}