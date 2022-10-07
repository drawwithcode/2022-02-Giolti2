const message = "This is a template repository\nfor the elective course Creative Coding\nCommunication Design, Politecnico di Milano";

class BouncingText {
	constructor() {
		this.x = width / 2;
		this.y = height / 2;
		this.angle = random(30, 60);
		this.speed = 5;
		this.color = color(0,0,0)
	}

	update() {
		this.x += cos(this.angle) * this.speed;
		this.y += sin(this.angle) * this.speed;

		//these checks need more texting to see if grouping conditions breaks edge cases or not
		if (this.x < 64) {
			if (this.angle > 90 && this.angle < 270) {
				this.angle = 180 - this.angle;
				this.color = color(random(100,200), random(100,200), random(100,200))
				if (this.angle < 0) {
					this.angle += 360;
				}
			}
		}
		else if (this.x > width - 64) {
			if (this.angle < 90 || this.angle > 270) {
				this.angle = 180 - this.angle;
				this.color = color(random(100,200), random(100,200), random(100,200))
				if (this.angle < 0) {
					this.angle += 360;
				}
			}
		}

		if (this.y < 32) {
			if (this.angle > 180) {
				this.angle = 360 - this.angle;
				this.color = color(random(100,200), random(100,200), random(100,200))
				if (this.angle < 0) {
					this.angle += 360;
				}
			}
		}
		else if (this.y > height-32) {
			if (this.angle < 180) {
				this.angle = 360 - this.angle;
				this.color = color(random(100,200), random(100,200), random(100,200))
			}
		}

		push();
		fill(this.color);
		text(message, this.x, this.y);
		pop();
	}
}

function preload() {
	// put preload code here
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	angleMode(DEGREES)

	textAlign(CENTER, CENTER);
	textSize(16);

	window.startingText = new BouncingText();
}

function draw() {
	// put drawing code here
	background(255);
	startingText.update();
}
