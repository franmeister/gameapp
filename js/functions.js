console.log("Cargado JS");

$(document).ready(function(){
	$("#startGame").unbind().bind("click", function(){
    window.location.href = "./game.html";
    cargarOperaciones();
  });
});

// function testingAjax() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (xhttp.readyState == 4 && xhttp.status == 200) {
//       document.getElementById("ajaxTest").innerHTML = xhttp.responseText;
//     }
//   };
//   xhttp.open("GET", "./resources/ajax_info.txt", true);
//   xhttp.send();
// }

function cargarOperaciones(){
  console.log("Inicio Juego");
	generarOperacion();
}

function generarOperacion(){
	console.log("generarOperacion");
  var num1 = getRandom(0,1000);
  var num2 = getRandom(0,1000);
  console.log(num1 +" " +num2);
	$(document).ready(function(){
		$("#num1").html(num1);
    $("#num2").html(num2);
	});
}

function getRandom(min, max) {
  var num =Math.random() * (max - min) + min;
  return num.toFixed();
}