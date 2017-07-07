function Powerup(position, velocity){
	this.isPlayer=false;
	this.isPowerup = true;
	this.isBullet = false;
	this.isAsteroid = false;
	
	this.position = position;
	this.velocity = velocity;
	this.angle = 0;
	this.angvel = 0;
	this.dead = false;
	this.radius = 2;
	this.radius_squared = this.radius*this.radius;
	
	this.draw =	function(context){
		context.fillStyle="#F00";
		context.fillRect(0,0,1,1);
	}
	
	this.die = function(){
		this.dead = true;
		
	}
	
} 