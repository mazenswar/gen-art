import { Line } from "./line.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 500;
canvas.width = 900;

const linesArr = [];
for (let i = 0; i < 30; i++) {
	linesArr.push(new Line(canvas));
}

linesArr.forEach((line) => {
	line.draw(ctx);
});
