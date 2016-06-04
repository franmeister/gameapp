console.log("OK");

function startGame() {
	console.log("Inicio Juego");
	window.location.href = "./game.html";
}

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