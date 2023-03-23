export class Spiral {
	constructor(canvas) {
		this.canvas = canvas;
		this.x = Math.random() * this.canvas.width;
		this.y = Math.random() * this.canvas.height;
		this.speedX = Math.random() * 0.5 + 1;
		this.speedY = 8;
		this.lineWidth = Math.floor(Math.random() * 10 + 5);
		this.hue = Math.floor(Math.random() * 360);
		this.history = [{ x: this.x, y: this.y }];
		this.maxLength = Math.random() * 10 + 20;
		this.lifeSpan = this.maxLength * 5;
		this.timer = 0;
		this.angle = 0;
		this.curve = 0.1;
		this.vc = 0.25;
	}

	reset() {
		this.x = Math.random() * this.canvas.width;
		this.y = Math.random() * this.canvas.height;
		this.history = [{ x: this.x, y: this.y }];
		this.timer = 0;
		this.angle = 0;
		this.curve = 0;
	}
	draw(context) {
		// context.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
		context.lineWidth = this.lineWidth;
		context.beginPath();
		context.moveTo(this.history[0].x, this.history[0].y);
		for (let i = 0; i < this.history.length; i++) {
			context.lineTo(this.history[i].x, this.history[i].y);
		}
		context.stroke();
	}
	update() {
		this.timer++;
		this.angle += 0.1;
		this.curve += this.vc;
		if (this.timer < this.lifeSpan) {
			this.x += Math.sin(this.angle) * this.curve;
			this.y += this.speedY;
			// this.x += Math.sin(this.x);
			// this.y += Math.sin(this.y);
			this.history.push({
				x: this.x,
				y: this.y,
			});
			if (this.history.length > this.maxLength) {
				this.history.shift();
			}
		} else if (this.history.length <= 1) {
			this.reset();
		} else {
			this.history.shift();
		}
	}
}
