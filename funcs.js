

document.getElementById("random").onclick = function(){
	var num = Math.floor(Math.random() *10);
	document.getElementById("temperature").value = num;
	
};

document.getElementById("f2c").onclick = function(){
	var f =document.getElementById("temperature").value;
	var temperature = (f - 32) / 1.8;
	var result = document.getElementById("result")
	result.innerHTML = temperature;
	if (temperature <= 10) {
	    result.style.color = "blue";
	}
	else if (temperature >= 32) {
	    result.style.color = "red";
	}
	else {
	    result.style.color = "black";
	}
};
document.getElementById("c2f").onclick = function(){
    var c =document.getElementById("temperature").value;
    var temperature = (c * 1.8) + 32;
    var result = document.getElementById("result")
    result.innerHTML = temperature;
}


