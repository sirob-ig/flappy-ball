function keyPressed() {
	V_y = -4;
}

function drawBird() {
stroke(250,100,0);
	strokeWeight(3);
	fill(0,0,250);
	ellipse(x, y, 2*r);
	V_y += gravity;
	y += V_y;
}

function drawRect(x, y) {
	rectMode(CORNERS);
	stroke(250,100,0);
	strokeWeight(3);
	fill(0,0,250);
	rect(x, y, x + 10, height);
	
	rectMode(CORNERS);
	stroke(250,100,0);
	strokeWeight(3);
	fill(0,0,250);
	rect(x, 0, x + 10, y - 100);
}
function barriers() {
	if (absc < 0) {
		arr.shift();
		arr.push(height*Math.random()/3 + height/3);
		absc = delta;
	};
for (let i = 0; i < arr.length; i++) {
		drawRect(absc + delta*i, arr[i]);
	}
}

function trigger(x0, y0) {
	const a = (x > x0 - r);
	const b = (x < x0);
	const c = (y < y0 - 100);
	const d = (y > y0);
	const e = (y > y0 - r);
	const f = (y < y0 - 100 + r);
	const g = ((x - x0)**2 + (y - y0)**2 < r**2);
	const h = ((x - x0 - 10)**2 + (y - y0)**2 < r**2);
	const i = ((x -x0)**2 + (y - y0 +100)**2 < r**2);
	const j = ((x - x0 - 10)**2 + (y - y0 + 100)**2 < r**2);
	const k = (x < x0 + 10);
	
     return a && b && c ||
	    a && b && d ||
	   !c && f && !b && k ||
	    e && !b && k && !d ||
	    i && !c && b ||
	    g && b && !d ||
	    j && !c && l ||
	    h && !d && l
}


module.exports = {
	keyPressed,
	drawBird,
	drawRect,
	barriers,
	trigger
}
