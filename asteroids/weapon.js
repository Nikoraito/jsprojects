var weapons = {
	singleshot: function(owner){
		ents.push(new Bullet(
			owner.position.add(new Vector_Radial(owner.angle, -(owner.radius+2)).to_vector2()), 
			owner.velocity.add(new Vector_Radial(owner.angle, -200).to_vector2())
		))
	},
	scattershot: function(owner){
		for(var i = -1; i <= 1; i++){
		ents.push(new Bullet(
			owner.position.add(new Vector_Radial(owner.angle+(i/3), -(owner.radius+2)).to_vector2()), 
			owner.velocity.add(new Vector_Radial(owner.angle+(i/3), -200).to_vector2())
		))}
	},
	tripleshot: function(owner){
		ents.push(new Bullet(
			owner.position.add(new Vector_Radial(owner.angle, -(owner.radius+2)).to_vector2()), 
			owner.velocity.add(new Vector_Radial(owner.angle, -200).to_vector2())
		)
	)},
	missileshot: function(owner){}
}

function Weapon(){
	this.projectile;
}

function Bullet(position, velocity){
	this.isPlayer=false;
	this.isBullet = true;
	this.isAsteroid = false;
	
	this.position = position;
	this.velocity = velocity;
	this.angle = 0;
	this.angvel = 0;
	this.dead = false;
	this.radius = 2;
	this.radius_squared = this.radius*this.radius;
	
	this.draw =	function(context){
		context.fillStyle="#FFF";
		context.fillRect(0,0,1,1);
	}
	
	this.die = function(){
		this.dead = true;
	}
	
} 

function Missile(position, velocity){
	this.isPlayer=false;
	this.isBullet = true;
	this.isAsteroid = false;
	//ACCELERATION
	this.position = position;
	this.velocity = velocity;
	this.angle = 0;
	this.angvel = 0;
	this.dead = false;
	this.radius = 2;
	this.radius_squared = this.radius*this.radius;
	
	this.draw =	function(context){
		context.fillStyle="#FFF";
		context.fillRect(0,0,4,4);
	}
	
	this.die = function(){
		this.dead = true;
	}
	
} 
