var c = document.querySelector("canvas");
var ctx = c.getContext("2d");

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function RGBnumAletorio() {
	var x = Math.floor(getRandomArbitrary(0, 255));

		return x;
}

	
for (var i = 0; i < 5; i++) {
	for(var j = 0; j < 5; j++){

		var espacio = 40;
		var largo = 60;
		var ancho = largo;
		var equis = 50 + (ancho + espacio) * i;
		var ye =  50 + (ancho + espacio) * j;
		var RGBvalor = RGBnumAletorio();
		var RGBcolor = 'rgb(' + RGBvalor * j + ','+ RGBvalor +','+ RGBvalor +')';


		//console.log(RGBvalor);
		ctx.beginPath();

		ctx.rect(equis, ye, ancho, largo);
	 	ctx.strokeStyle = RGBcolor;

		ctx.stroke();
		ctx.beginPath();
		ctx.rect(equis+10, ye+10, ancho-20, largo-20);
	 	ctx.strokeStyle = RGBcolor ;
		ctx.stroke();
	}
console.log(RGBcolor);
}

