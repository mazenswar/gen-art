export class Line {
	constructor(canvas) {
		this.canvas = canvas;
		this.x = Math.random() * this.canvas.width;
		this.y = Math.random() * this.canvas.height;
		this.lineWidth = Math.floor(Math.random() * 15 + 1);
		this.hue = Math.floor(Math.random() * 360);
		this.history = [{ x: this.x, y: this.y }];
	}

	draw(context) {
		context.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
		context.lineWidth = this.lineWidth;
		context.beginPath();
		context.moveTo(this.history[0].x, this.history[0].y);
		for (let i = 0; i < this.history.length; i++) {
			context.lineTo(this.history[i].x, this.history[i].y);
		}
		context.stroke();
	}
	update() {
		this.history.push({
			x: Math.random() * this.canvas.width,
			y: Math.random() * this.canvas.height,
		});
		if (this.history.length > 10) {
			this.history.shift();
		}
	}
}
