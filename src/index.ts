/// <reference path='tsd.d.ts' />

import pixelbutler = require('pixelbutler');

console.log('yo!');

var $pb = new pixelbutler.Stage({
	width: 160,
	height: 120,
	scale: 'max',
	center: true,
	canvas: 'screen'
});

var p1 = {r: 48, g: 48, b: 200};
var p2 = {r: 48, g: 48, b: 255};
var p3 = {r: 64, g: 64, b: 255};
var circleC = {r: 93, g: 27, b: 175};

var frame = 0;

function step() {
	frame++;

	$pb.clear();
	$pb.fillCircle(80, 60, 48, circleC);

	$pb.text(50 + Math.sin(frame / 13) * 50, 5, 'Hello Warld!', pixelbutler.hsv(frame % 360, 100, 100));

	$pb.text(5, 80,
		'Woooooaaaaah! Lorez FramebufferJS!'.substring(0, frame / 5),
		pixelbutler.hsv(220, pixelbutler.rand(100), pixelbutler.rand(100))
	);

	for (var i = 0; i < 15; i++) {
		var x = (i ^ (i << 12)) % 160;
		var y = ((i ^ (i << 7)) + frame * 4) % 120;
		$pb.setPixel(x, y, p1);
		$pb.setPixel(x, y + 1, p2);
		$pb.setPixel(x, y + 2, p3);
	}

	$pb.render();

	window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
