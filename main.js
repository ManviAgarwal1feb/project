canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=225;

function add() {
	background_imgTag= new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src= background_image;

	greencar_imgTag=new Image();
	greencar_imgTag.onload=uploadgreencar;
greencar_imgTag.src=greencar_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar_width,greencar_height);	
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38'){
			console.log("up");
			up();
		}
	
		if(keyPressed == '40'){
			console.log("down");
			down();
		}
		
		if(keyPressed == '37'){
			console.log("left");
			left();
		}
	
		if(keyPressed == '39'){
			console.log("right");
		right();
		}
		
		
}

function up()
{
	if(greencar_y>0){
		greencar_y=greencar_y-10;
		console.log("when up arrow pressed.x="+greencar_x+"y="+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_y<500){
		greencar_y=greencar_y+10;
		console.log("when down is pressed.x="+greencar_x+"y="+greencar_y);
		uploadBackground();
		uploadgreencar();}
}


function right()
{
	if(greencar_x<700){
		greencar_x=greencar_x+10;
		console.log("when right is pressed.x="+greencar_x+"y="+greencar_y);
		uploadBackground();
		uploadgreencar();
	

	}}
	function left()
{
	if(greencar_x>0){
		greencar_x=greencar_x-10;
		console.log("when left is pressed.x="+greencar_x+"y="+greencar_y);
		uploadBackground();
		uploadgreencar();
	

	}}

