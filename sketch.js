const message = "This is a template repository\nfor the elective course Creative Coding\nCommunication Design, Politecnico di Milano";

const SLEEPTIME = 3000; //time to sleep in milliseconds

//matrix to draw the windows logo from
const WINDOWSLOGO = [
	[-1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, -1, -1, -1],
	[-1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1],
	[0, -1, -1, -1, -1, -1, 0, 0, 0, [255, 0, 0], 0, 0, [0, 255, 0], 0, 0, 0],
	[0, -1, 0, -1, 0, 0, 0, 0, [255, 0, 0], [255, 0, 0], 0, 0, [0, 255, 0], [0, 255, 0], 0, 0],
	[-1, -1, 0, 0, 0, 0, 0, 0, [255, 0, 0], [255, 0, 0], 0, 0, [0, 255, 0], [0, 255, 0], 0, 0],
	[[255, 0, 0], -1, -1, -1, -1, -1, 0, 0, [255, 0, 0], 0, 0, 0, 0, [0, 255, 0], 0, 0],
	[[255, 0, 0], -1, [255, 0, 0], -1, [255, 0, 0], [255, 0, 0], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[-1, -1, [255, 0, 0], [255, 0, 0], [255, 0, 0], [255, 0, 0], 0, 0, 0, [0, 0, 255], 0, 0, [255, 255, 0], 0, 0, 0],
	[[0, 0, 255], -1, -1, -1, -1, -1, 0, 0, [0, 0, 255], [0, 0, 255], 0, 0, [255, 255, 0], [255, 255, 0], 0, 0],
	[[0, 0, 255], -1, [0, 0, 255], -1, [0, 0, 255], [0, 0, 255], 0, 0, [0, 0, 255], [0, 0, 255], 0, 0, [255, 255, 0], [255, 255, 0], 0, 0],
	[-1, -1, [0, 0, 255], [0, 0, 255], [0, 0, 255], [0, 0, 255], 0, 0, [0, 0, 255], 0, 0, 0, 0, [255, 255, 0], 0, 0],
	[0, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, -1, 0, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, 0, 0, 0],
	[-1, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, 0]
];

const START = [
	[-1, 0,  0,  0,  0],
	[ 0, 0, -1, -1,  0,  0, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0],
	[ 0, 0, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0],
	[ 0, 0, -1, -1, -1, -1, -1, -1, 0, 0,  0, -1, -1,  0,  0,  0,  0, -1, -1,  0,  0,  0, -1, 0, 0, 0],
	[-1, 0,  0,  0,  0, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1,  0,  0, -1,  0,  0, -1, -1, 0, 0],
	[-1,-1, -1, -1,  0,  0, -1, -1, 0, 0, -1, -1, -1,  0,  0,  0,  0,  0, -1,  0,  0, -1, -1, 0, 0],
	[-1,-1, -1, -1,  0,  0, -1, -1, 0, 0, -1, -1,  0,  0, -1, -1,  0,  0, -1,  0,  0, -1, -1, 0, 0],
	[ 0, 0, -1, -1,  0,  0, -1, -1, 0, 0, -1, -1,  0,  0, -1, -1,  0,  0, -1,  0,  0, -1, -1, 0, 0],
	[-1, 0,  0,  0,  0, -1, -1, -1,-1, 0,  0, -1, -1,  0,  0,  0,  0,  0, -1,  0,  0, -1, -1,-1, 0, 0]
];

class BouncingText {
	constructor() {
		this.x = width / 2;
		this.y = height / 2;
		this.angle = random(30, 60);
		this.speed = 5;
		this.color = color(255)
	}

	update() {
		this.x += cos(this.angle) * this.speed;
		this.y += sin(this.angle) * this.speed;

		push();
		colorMode(HSB, 360, 100, 100)

		//these checks need more texting to see if grouping conditions breaks edge cases or not
		if (this.x < 64) {
			if (this.angle > 90 && this.angle < 270) {
				this.angle = 180 - this.angle;
				this.color = color(random(360), 100, 100)
				if (this.angle < 0) {
					this.angle += 360;
				}
			}
		}
		else if (this.x > width - 64) {
			if (this.angle < 90 || this.angle > 270) {
				this.angle = 180 - this.angle;
				this.color = color(random(360), 100, 100)
				if (this.angle < 0) {
					this.angle += 360;
				}
			}
		}

		if (this.y < 32) {
			if (this.angle > 180) {
				this.angle = 360 - this.angle;
				this.color = color(random(360), 100, 100)
				if (this.angle < 0) {
					this.angle += 360;
				}
			}
		}
		else if (this.y > height-32) {
			if (this.angle < 180) {
				this.angle = 360 - this.angle;
				this.color = color(random(360), 100, 100)
			}
		}

		fill(this.color);
		text(message, this.x, this.y);
		pop();
	}
}

let wakeup = 0;
let wakeupTime = 0;

function preload() {
	// put preload code here
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	window.pixelSide = min(height / 480, width / 640);
	
	angleMode(DEGREES)

	textAlign(CENTER, CENTER);
	textSize(16);

	window.startingText = new BouncingText();
}

function draw() {

	checkTime();

	if (wakeup) {
		//desktop goes here
		windows98();
	}
	else {
		//screensaver goes here
		background(0);
		startingText.update();
	}
	
}

function mouseMoved() {
	wakeUp();
}

function mousePressed() {
	wakeUp();
}

function wakeUp() {
	wakeup = 1;
	wakeupTime = millis();
}

function checkTime() {
	if ((millis() - wakeupTime) > SLEEPTIME) {
		wakeup = 0;
	}
}

//function to recreate the iconic w98 gui
function windows98() {
	background(43, 118, 98)

	push();

	noStroke();

	//w98 taskbar
	fill(193, 192, 193); 
	rect(0, height - 28 * pixelSide, width, 28 * pixelSide);

	fill(223);
	rect(0, height - 28 * pixelSide, width, pixelSide);

	fill(255);
	rect(0, height - 27 * pixelSide, width, pixelSide);

	//w98 start button
	rect(2 * pixelSide, height - 24 * pixelSide, 53 * pixelSide, pixelSide)
	rect(2 * pixelSide, height - 24 * pixelSide, pixelSide, 21 * pixelSide)

	fill(223);
	rect(3 * pixelSide, height - 23 * pixelSide, 51 * pixelSide, pixelSide)
	rect(3 * pixelSide, height - 23 * pixelSide, pixelSide, 19 * pixelSide)

	fill(128);
	rect(3 * pixelSide, height - 4 * pixelSide, 52 * pixelSide, pixelSide)
	rect(54 * pixelSide, height - 23 * pixelSide, pixelSide, 20 * pixelSide)

	fill(0);
	rect(2 * pixelSide, height - 3 * pixelSide, 54 * pixelSide, pixelSide)
	rect(55 * pixelSide, height - 24 * pixelSide, pixelSide, 22 * pixelSide)

	drawMatrix(6 * pixelSide, height - 20 * pixelSide, WINDOWSLOGO);
	drawMatrix(25 * pixelSide, height - 18 * pixelSide, START);
	
	pop();
}

//draws a square pixel scaled to canvas height, assumes canvas is 480 pixels high
function drawPixel(x, y, color) {
	push();

	noStroke();
	fill(color);
	rect(pixelSide * x, pixelSide * y, pixelSide, pixelSide);

	pop();
}

//draws pixels from a matrix of colors cause I don't want to write drawPixel a hundred times
function drawMatrix(x, y, matrix) {
	push();
	translate(x, y);
	for (let i = 0; i < matrix.length; i++){
		for (let j = 0; j < matrix[i].length; j++){
			if (matrix[i][j] != -1) {
				drawPixel(j, i, matrix[i][j]);
			}
		}
	}
	pop();
}