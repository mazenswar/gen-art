import { Chaos } from "./chaos.js";
import { Line } from "./line.js";
import { Spiral } from "./spirals.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 800;
canvas.width = 900;

// global settings
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowColor = "black";
// ctx.shadowX;

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
ctx.strokeStyle = gradient1;
// lines
const linesArr = [];
for (let i = 0; i < 100; i++) {
	linesArr.push(new Line(canvas));
}
// spirals
const spiralsArr = [];
for (let i = 0; i < 100; i++) {
	spiralsArr.push(new Spiral(canvas));
}
// chaos
const chaosArr = [];
for (let i = 0; i < 20; i++) {
	chaosArr.push(new Chaos(canvas));
}

// animate
function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	chaosArr.forEach((c) => {
		c.draw(ctx);
		c.update();
	});
	requestAnimationFrame(animate);
}

animate();
