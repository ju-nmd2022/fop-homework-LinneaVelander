background(246, 226, 199);
noStroke();

//Face
fill(250, 180, 60);
ellipse(300, 300, 400);

//Mouth
fill(220, 140, 30);
arc(300, 320, 250, 80, 0, PI);

//Blinking eye
stroke(220, 140, 30);
strokeWeight(5);
line(190, 235, 270, 235);

//Eye
noStroke();
fill(255, 255, 255);
ellipse(370, 240, 80);

//Pupil
fill(50, 50, 50);
ellipse(370, 240, 30);

//Tounge
fill(255, 100, 180);
arc(300, 340, 120, 290, 0, PI);

stroke(210, 0, 150);
strokeWeight(3);
line(300, 380, 300, 460);
