import { Line } from "./line.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 500;
canvas.width = 900;

const linesArr = [];
for (let i = 0; i < 10; i++) {
	linesArr.push(new Line(canvas));
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	linesArr.forEach((line) => {
		line.draw(ctx);
		line.update();
	});
	requestAnimationFrame(animate);
}

animate();
