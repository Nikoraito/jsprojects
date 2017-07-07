function Entity(position, velocity, angle){
	this.position = position;	//vector2
	this.velocity = velocity; //vector2
	//this.angle = angle;				//value in rads
	this.radius_squared;			//scalar
	
	this.draw =	function(){
		
	}
	
	this.die		=	function(){
		
	}
}  


function Player(position){
	this.isPlayer=true;
	this.isBullet = false;
	this.isAsteroid = false;
	
	this.weapon; 

	this.position = position;
	this.angle = 0;
	this.angvel = 0;
	this.velocity = new Vector2(0, 0);
	this.radius = 25;
	this.radius_squared = this.radius*this.radius;
	this.thrust = 0;
	this.thrustmax	=	125;
	this.spinmax=2.0;
	this.dead = false;

	this.draw = function(context){
		context.beginPath();
		context.fillStyle="#FFF";
    context.moveTo(-20, 0);
    context.lineTo(15, 10);
    context.lineTo(15, -10);
		context.fill();
	}
	
	this.fire = function(){
		ents.push(new Bullet(
			this.position.add(new Vector_Radial(this.angle, -(this.radius+2)).to_vector2()), 
			this.velocity.add(new Vector_Radial(this.angle, -200).to_vector2())
		)
		);
	}
	this.die = function(){
		this.dead = true;
		end();
	}
	
} 