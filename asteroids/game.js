var m; //the main menu setInterval
var u; //the update loop setInterval
var r; //the render loop setInterval
var p; // the player
var ents 		=	[];
var ingame	=	false;	//flag for being in a match

var dt 				= 1000/300; //delta time for setInterval
var dt_phys 	= dt/1000; 	//dt for physics

var dt_vis 		= 1000/40;	//dt for frames 

var gamex=800; //Establish dimensions of the canvas window
var gamey=600; //TODO: derive gc's properties from inside code;
var ingame=false;	//flag for being in a match	
	
var score;
	
	
	
	
	
var palette = {
	bg:		'rgb(0,0,0)',
	text:	'rgb(255,255,255)',
	field1:	'rgb(0,0,127)',
	field2:	'rgb(127,0,0)'
};
	
var audio = {
	
};

window.onload=function(){
	gc=document.getElementById("gc"); //GameCanvas
	c=gc.getContext("2d");
	document.addEventListener("keydown",keyDown);
	document.addEventListener("keyup",keyUp);
	start_game();
}
	
	
function main_menu(){
	
	c.fillStyle=palette.bg;
	c.fillRect(0,0,gamex,gamey);
	c.font="24px Courier";
	c.fillStyle="white";
	c.fillText("PRESS ENTER TO PLAY",10,30);
	
}

	
function start(){
	gc.setAttribute("width",""+gamex);
	gc.setAttribute("height",""+gamey);
	
	m = setInterval(main_menu,dt_vis);
}

function end(){
	clearInterval(u);
	clearInterval(r);
	ingame = !ingame;
	start();
}


function start_game(){
	ents =	[];
	ingame = true;
	clearInterval(m);
	score = 0;
	
	for(var i = 0; i < 12; i++){
		ents.push(new Asteroid(new Vector2((gamex*Math.random()), (gamey*Math.random())), new Vector2(50-(100.0*Math.random()), 50-(100.0*Math.random()))));//
	}
	for(e of ents){
		e.generate(40+Math.random()*10);
	}
	
	
	p = new Player( new Vector2(gamex/2, gamey/2));
	ents.push(p);
	
	u=setInterval(update,dt); 
	r=setInterval(render,dt_vis);
	
}

function render(){
	
	c.fillStyle=palette.bg;
	c.fillRect(0,0,gamex,gamey);

	c.font="24px Courier";
	c.fillStyle=palette.text;
	c.fillText("SCORE: " + score,15,15);
	
	for (e of ents){
			c.translate(e.position.x, e.position.y);		//move to the center of the entity
			c.rotate(e.angle);			//rotate to the angle of the entity
			e.draw(c);
			//console.log(e.position);
			c.rotate(-e.angle);			//revert angle
			c.translate(-e.position.x, -e.position.y);	//revert position
	}
}

function update(){

	p_tv = new Vector_Radial(p.angle, p.thrust);
	p.velocity.x += p_tv.get_x()*dt_phys;
	p.velocity.y += p_tv.get_y()*dt_phys;
	
	for(var i = 0; i<ents.length; i++){
		for(var j = i+1; j<ents.length; j++){
				if(
					(ents[i].isBullet && (ents[j].isPlayer || ents[j].isAsteroid))
					|| (ents[i].isAsteroid && (ents[j].isPlayer || ents[j].isBullet))
					|| (ents[i].isPlayer && (ents[j].isAsteroid || ents[j].isBullet))
					){
						if(ents[i].position.sub(ents[j].position).get_length_squared() <= ents[i].radius_squared+ents[j].radius_squared){
							if(ents[i].position.sub(ents[j].position).get_length() <= ents[i].radius+ents[j].radius){
								ents[i].die();
								ents[j].die();
							}
						}
				}
		}
	if(ents[i].dead)ents.splice(i,1);
	}
	
	
	
	
	/*
	for(var k = 0; k<ents.length; k++){
			if(p.position.sub(ents[k].position).get_length_squared() < p.radius_squared && !ents[k].isPlayer){
				
				console.log(p.position.x +", "+ ents[k].position.x);
				if(p.position.sub(ents[k].position).get_length() < p.radius){
					//console.log("b" + p.position.sub(ents[k].position).get_length());
					
					p.die();
					if (p.dead ==true)
					break;
				}
		}
	}*/

	
	//move the rest of the entities, 
	for(var i = 0; i<ents.length; i++){
		move(ents[i], dt_phys);
	}	
}
function keyDown(evt){
	switch(evt.keyCode){ 
		case 13:
			 if(!ingame) start_game();
			 break; 
			case 37: //Left
			case 65: //A
				{	p.angvel = -1 * p.spinmax;
				} break;
			case 38: //Down
			case 83: //S
				{ p.thrust = -1 * p.thrustmax;
				} break;
			case 39: //Right
			case 68: //D
				{ p.angvel = 1 * p.spinmax;
				} break;
			case 40: //Up
			case 87: //W
				{ p.thrust = 1 * p.thrustmax;
				} break;
	}
}
function keyUp(evt){
	switch(evt.keyCode){ 
			case 32: 
			{ if(!p.dead) p.fire();
				
			} break;
			case 37: //Left
			case 65: //A
				{	p.angvel = 0;
				} break;
			case 38: //Down
			case 83: //S
				{ p.thrust = 0;
				} break;
			case 39: //Right
			case 68: //D
				{ p.angvel = 0;
				} break;
			case 40: //Up
			case 87: //W
				{ p.thrust = 0;
				} break;
	}
}