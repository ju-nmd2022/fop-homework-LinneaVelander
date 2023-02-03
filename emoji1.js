// let x = 100;
// let s = 0.1;
// let emojiRotation = 0;

// function emoji(x, y, s) {
//   noStroke();

//   //Face
//   fill(250, 180, 60);
//   ellipse(x + 300 * s, y + 300 * s, 400 * s);

//   //Mouth
//   fill(220, 140, 30);
//   arc(x + 300 * s, y + 320 * s, 250 * s, 80 * s, 0, PI, PIE);

//   //Blinking eye
//   stroke(220, 140, 30);
//   strokeWeight(5);
//   line(x + 190 * s, y + 235 * s, x + 270 * s, y + 235 * s);

//   //Eye
//   noStroke();
//   fill(255, 255, 255);
//   ellipse(x + 370 * s, y + 240 * s, 80 * s);

//   //Pupil
//   fill(50, 50, 50);
//   ellipse(x + 370 * s, y + 240 * s, 30 * s);

//   //Tounge
//   fill(255, 100, 180);
//   arc(x + 300 * s, y + 340 * s, 120 * s, 290 * s, 0, PI, PIE);

//   stroke(210, 0, 150);
//   strokeWeight(3);
//   line(x + 300 * s, y + 380 * s, x + 300 * s, y + 460 * s);
// }

// function draw() {
//   background(255, 255, 255);
//   fill(0, 255, 255);
//   ellipse(x, 100, 200);

//   x = x + 2;
// }

// function draw() {
//   clear();

//   push();
//   translate(x, 150);
//   rotate(emojiRotation);
//   emoji(x, 0, s);
//   pop();

// x = x + 2;
// s = s + 0.003;
// emojiRotation = emojiRotation + 0.1;
// }

// function draw() {
//   clear();
//   emoji(mouseX, mouseY, 0.5);
// }

//Drawing program
// let lastX = 0;
// let lastY = 0;

// function draw() {
//   strokeWeight(8);
//   stroke((mouseX / width) * 255, 0, (mouseY / height) * 255);
//   line(lastX, lastY, mouseX, mouseY);

//   lastX = mouseX;
//   lastY = mouseY;
// }

// Mouse pressed, released and clicked.
// function mousePressed() {
//     console.log("hello");
// }

// function mouseReleased() {
//     console.log("hej");
// }

// function mouseClicked() {
//     console.log("Klick!");
// }

// Growing circle
// let size = 10;

// function mouseClicked() {
//     size = size + 10;
// }

// function draw() {
//     ellipse(width / 2, height / 2, size);
// }

// Draw emoji on click
// function mouseClicked() {
//     emoji(mouseX, mouseY, 0.5);
// }

// Draw lines when mouse is clicked
// let lastX = width / 2;
// let lastY = height / 2;

// function mouseClicked() {
//   line(lastX, lastY, mouseX, mouseY);

//   lastX = mouseX;
//   lastY = mouseY;
// }

// If statements
// function draw() {

//     if (mouseX < 200) {
//         background(255, 0, 0);
//     } else if (mouseX < 400) {
//         background(0, 0, 255);
//     } else {
//         background(0, 255, 0);
//     }
// }

// Animate an ellipse.
// let x = 100;
// let y = 100;
// let direction = "forward";
// function draw() {
//     background (255, 220, 210);
//    ellipse(x, y + 20, 200);

//    if (direction === "forward") {
//     if (x < 300) {
//         x = x + 5;
//        } else {
//         direction = "backwards";
//        }
//    } else if (direction === "backwards"){
//         if (x > 100) {
//             x = x - 5;
//         } else {
//             direction = "forward";
//         }
//        }

// }

// Drawing program 2.0
// let lastMouseX = 0;
// let lastMouseY = 0;
// let mouseIsActive = false;

// function draw() {
//     stroke(255, 255, 255);
//     strokeWeight(4);
//   if (mouseIsPressed) {
//     if (mouseIsActive) {
//         line(mouseX, mouseY, lastMouseX, lastMouseY);
//     }

//     lastMouseX = mouseX;
//     lastMouseY = mouseY;
//     mouseIsActive = true;
//   } else {
//     mouseIsActive = false;
//   }
// }

// Change between different states/screens
// function startScreen() {
//     background(0, 0, 255);
//     text("Start", 200, 100);
// }

// function gameScreen() {
//     background(255, 255, 0);
//     text("Game", 200, 100);
// }

// function resultScreen() {
//     background(255, 0, 0);
//     text("Result", 200, 100);
// }

// let state = "start";
// let gameTimer = 0;

// function draw() {
//     if (state === "start") {
//         startScreen();
//     } else if (state === "game") {
//         gameScreen();
//         gameTimer = gameTimer + 1;
//         if(gameTimer >= 100) {
//             gameTimer = 0;
//             state = "result";
//         }
//     } else if (state === "result") {
//         resultScreen();
//     }
// }

// function mouseClicked() {
//     if (state === "start") {
//         state = "game";
//     } else if (state === "result") {
//         state = "game";
//     }
// }

//Logical operators

// function draw() {
//     if (mouseX > 200 && mouseX < 400) {
//         background(255, 0, 0);
//     } else {
//         background(255, 255, 255);
//     }
// }

// Make a button

// function button(x, y, w, h) {
//   noStroke();
//   fill(255, 0, 0);
//   rect(x, y, w, h);

//   fill(255, 255, 255);
//   text("Hello", x + w / 2, y + h / 2);
// }

// let buttonIsClicked = false;

// function draw() {
//   if (buttonIsClicked) {
//     background(0, 255, 255);
//   } else {
//     background(255, 255, 255);
//   }

//   button(100, 100, 200, 60);
// }

// function mousePressed() {
//   if (mouseX > 100 && mouseX < 100 + 200 && mouseY > 100 && mouseY < 100 + 60) {
//     buttonIsClicked = true;
//   }
// }

// function mouseReleased() {
//   buttonIsClicked = false;
// }

// Keyboard input
// function keyPressed() {
//     console.log("Key " + keyCode + " Pressed");
// }

// function keyReleased() {
//     console.log("Key " + keyCode + " Released");
// }

// Move an ellipse with keyboard input
// function circle(x, y) {
//   fill(240, 130, 150);
//   ellipse(x, y, 200);
// }
// const speed = 5;
// let x = 200;
// let y = 200;

// function draw() {
//   if (keyIsDown(37)) {
//     x = x - speed;
//   } else if (keyIsDown(39)) {
//     x = x + speed;
//   }
//   if (keyIsDown(38)) {
//     y = y - speed;
//   } else if (keyIsDown(40)) {
//     y = y + speed;
//   }
//   background(255, 255, 255);

//   circle(x, y);
// }
