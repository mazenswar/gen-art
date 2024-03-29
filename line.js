export class Line {
	constructor(canvas) {
		this.canvas = canvas;
		this.x = Math.random() * this.canvas.width;
		this.y = Math.random() * (this.canvas.height * 0.5);
		this.speedX = Math.random() * 0.5 + 1;
		this.speedY = 8;
		this.lineWidth = Math.floor(Math.random() * 15 + 10);
		this.hue = Math.floor(Math.random() * 360);
		this.history = [{ x: this.x, y: this.y }];
		this.maxLength = Math.random() * 150 + 10;
		this.lifeSpan = this.maxLength * 10;
		this.timer = 0;
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
		if (this.timer < this.lifeSpan) {
			this.x += this.speedX + Math.random() * 50 - 25;
			this.y += this.speedY + Math.random() * 50 - 25;
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
	reset() {
		this.x = Math.random() * this.canvas.width;
		this.y = Math.random() * (this.canvas.height * 0.5);
		this.history = [{ x: this.x, y: this.y }];
		this.timer = 0;
	}
}
