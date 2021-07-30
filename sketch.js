var fireworks = [];
var gravity;
var birthdaySound;var GameState = "PLAY";

function setup() {
  createCanvas(400, 300);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  birthdaySound = loadSound("y2matecom-happy-birthday-song-audiotrimmercom-3_wtQTFXKm.mp3");
  stroke(255);
  strokeWeight(4);
  
}

function draw() {
 
  colorMode(RGB)
  
  textSize(20);
  text("Happy birthday Sivaaditya",90,100);
  background(0, 0, 0, 25);
  

  if (random(1) < 0.03) {
    fireworks.push(new Firework());
    
   }

  for (var i = fireworks.length-1; i >= 0; i--) {
     fireworks[i].update();
     fireworks[i].show();
     if (fireworks[i].done()) {
       //fireworks.spilce(i, 1);
     }
    
   }
  
   console.log(fireworks.length);
  
}