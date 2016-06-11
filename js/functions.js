console.log("Cargado JS");

$(document).ready(function(){
	$("#startGame").bind("click", function(){
		cargarOperaciones();
	});
});

function testingAjax() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("ajaxTest").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "./resources/ajax_info.txt", true);
  xhttp.send();
}

function cargarOperaciones(){
	console.log("Inicio Juego");
	window.location.href = "./game.html";
	generarOperacion();
}

function generarOperacion(){
	console.log("generarOperacion");
	$(document).ready(function(){
		$("#num1").text("2");
	});
}