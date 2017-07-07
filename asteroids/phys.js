

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
};

//Engine functions : processing the game physics logic

function move(entity, dt){
	
			if(entity.position.x>gamex) entity.position.x = 0;
			if(entity.position.x<0) entity.position.x = gamex;
			if(entity.position.y>gamey) entity.position.y = 0;
			if(entity.position.y<0) entity.position.y = gamey;
	
	
	entity.angle += entity.angvel*dt;
	entity.position.x += entity.velocity.x*dt;
	entity.position.y += entity.velocity.y*dt;
}

///////////
//objects//
///////////
function Vector2(x, y){
	this.x = x;
	this.y = y;
	
	this.get_length_squared = function(){ 
		return this.x*this.x + this.y*this.y;
	}
	
	this.get_length = function(){
		return Math.sqrt(this.get_length_squared());
	}
	
	this.get_x = function(){
		return this.x;
	}
	
	this.get_y = function(){
		return this.y;
	}
	
	this.to_vector_rad = function() {
		return new Vector2(Math.atan(this.y/this.x), this.get_length());
	}
	
	this.sub = function(v){
		return new Vector2(this.x - v.get_x(), this.y - v.get_y());
	}
	this.add = function(v){
		return new Vector2(this.x + v.get_x(), this.y + v.get_y());
	}
	this.neg = function(){
		return new Vector2(0-this.x, 0-this.y);
	}
	this.scale = function(s){
		return new Vector2(this.x*s, this.y*s);
	}

}

function Vector_Radial(direction, length){
	this.direction = direction;	//in rads
	this.length = length;	//in pixels
	
	this.get_length_squared = function(){ 
		return this.length*this.length;
	}	
	this.get_length= function(){ 
		return this.length;
	}	
	
	this.to_vector2 = function() {
		return new Vector2(Math.cos(this.direction)*this.length, Math.sin(this.direction)*this.length);
	}
	
	this.get_x = function(){
		return Math.cos(this.direction)*this.length;
	}
	
	this.get_y = function(){
		return Math.sin(this.direction)*this.length;
	}
	
}

function dot_product(v1, v2){
	return (v1.get_x() * v2.get_x()) + (v1.get_y() * v2.get_y())
}
/*
function intersecting(p1, p2, q1, q2){	//
	v_e = p2.sub(p1);
	v_f = q2.sub(q1);
	v_p = new Vector2(0-e.get_y(), e.get_x());
	h = dot_product(p1.sub(q1), v_p) / dot_product(v_f, v_p);
	
	if (0 < h && h < 1){return true;}
	else{return false;}
	
}

function intersection(p1, p2, q1, q2){	//
	v_e = p2.sub(p1);
	v_f = q2.sub(q1);
	v_p = new Vector2(0-e.get_y(), e.get_x());
	h = dot_product(p1.sub(q1), v_p) / dot_product(v_f, v_p);
	
	if (0 < h && h < 1){
		return q1.add(v_f.scale(h));
	}
	else return null;
	
}*/



























