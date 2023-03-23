import { Line } from "./line.js";
import { Spiral } from "./spirals.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 500;
canvas.width = 900;

// global settings
// linear gradient
const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient1.addColorStop("0.2", "pink");
gradient1.addColorStop("0.4", "violet");
gradient1.addColorStop("0.6", "purple");
gradient1.addColorStop("0.8", "navy");

// radial gradient
const gradient2 = ctx.createRadialGradient(
	canvas.width * 0.5,
	canvas.height * 0.5,
	30,
	canvas.width * 0.5,
	canvas.height * 0.5,
	200
);
gradient2.addColorStop("0.2", "pink");
gradient2.addColorStop("0.4", "violet");
gradient2.addColorStop("0.6", "purple");
gradient2.addColorStop("0.8", "navy");
// pattern image
const patternImage = document.getElementById("patternImage");
const pattern1 = ctx.createPattern(patternImage, "no-repeat");

// stroke
ctx.strokeStyle = pattern1;
// lines
const linesArr = [];
for (let i = 0; i < 100; i++) {
	linesArr.push(new Line(canvas));
}
// spirals
const spiralsArr = [];
for (let i = 0; i < 200; i++) {
	spiralsArr.push(new Spiral(canvas));
}

// animate
function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	spiralsArr.forEach((spiral) => {
		spiral.draw(ctx);
		spiral.update();
	});
	requestAnimationFrame(animate);
}

animate();
