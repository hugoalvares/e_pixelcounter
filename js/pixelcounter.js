function countRedPixels() {
	var image = document.getElementById('image');
	var context = document.getElementById('canvas').getContext('2d');
	context.canvas.width = image.width;
	context.canvas.height = image.height;
	context.drawImage(image, 0, 0);
	var data = context.getImageData(0, 0, image.width, image.height).data;

	var red;
	var green;
	var blue;
	var redCount = 0;
	for (var i = 0; i < data.length; i += 4) {
		red = data[i];
		green = data[i+1];
		blue = data[i+2];
		//var alpha = data[i+3];
		if ((red == 255) && (green == 0) && (blue == 0)) {
			redCount++;
			temp.push(i);
		}
	}
	console.log(redCount);
	alert(redCount);
}