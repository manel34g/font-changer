time = setInterval(fontChange,75)
function fontChange () {
	var elmnt = document.getElementsByClassName('letter')[rndNum(12,0)];
	elmnt.style.transform = "skew(" + rndNum(30,0)+"deg, "+ rndNum(30,0)+"deg)";
	elmnt.style.backgroundColor = "rgb("+ rndNum(255,0) + "," + rndNum(255,0) + "," + rndNum(255,0)+ ")"
}
function rndNum (Max,Min){
	var Num = Math.floor((Max - Min)*Math.random())
	return Num
}