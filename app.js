
var numberofsounds = document.querySelectorAll(".drum").length ;
for (var i = 0; i < numberofsounds ; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click",function handleClick(){

	var palysounds= this.innerHTML; //Identify whic button clicked
	makesounds(palysounds); // Play the sound when a button clicked
	buttonAnimation(palysounds); // Play animation

	 
    });

}

// Create a keypress event by using a addEventListener.
document.addEventListener("keypress" , function(event){

		makesounds(event.key);
		buttonAnimation(event.key);

		}
	);


// A function  to play sounds. In this case we have used z,x,c,v,b,n,m keys.
//Each key have differnt sounds
function makesounds(key){

	switch(key){
		case 'z':
		 var tom1 = new Audio("sounds/tom-1.mp3");
		 tom1.play();
		 break;

		case 'x':
		 var tom2 = new Audio("sounds/tom-2.mp3");
		 tom2.play();
		 break;

		case 'c':
		 var tom3 = new Audio("sounds/tom-3.mp3");
		 tom3.play();
		 break;

		case 'v':
		 var tom4 = new Audio("sounds/tom-4.mp3");
		 tom4.play();
		 break;

		case 'b':
		 var snare = new Audio("sounds/snare.mp3");
		 snare.play();
		 break;

		case 'n':
		 var crash = new Audio("sounds/crash.mp3");
		 crash.play();
		 break;

		case 'm':
		 var kick = new Audio("sounds/kick-bass.mp3");
		 kick.play();
		 break;

		default:
			alert("Error!!!");
		
	    }
}

//Button animation
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  // Play a shadow animation when a button clicked or key pressed
  activeButton.classList.add("pressed");

  // Removing the button press animation
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}