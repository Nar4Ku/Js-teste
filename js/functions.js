//Para ligar/desligar
var lamp = {
  ligada: false,
  elemento: document.getElementById("lamp"),

  turnOn: function() {
    this.elemento.src = "imagens/lampada-acesa.jpg";
    this.ligada = true;
  },

  turnOff: function() {
    this.elemento.src = "imagens/lampada-apagada.jpg";
    this.ligada = false;
  }
};

var liga = document.getElementById("liga");
liga.onclick = function() {
  if (lamp.ligada) {
    lamp.turnOff();
  } else {
    lamp.turnOn();
  }
};

// Setar o tempo

var carga = setInterval(function() {
  var valor = document.getElementById("porcentagem");
  var porcentagem = valor.textContent;
  var calc = parsetInt(porcentagem) - 1;
  document.getElementById("porcentagem").innerHTML = calc;
}, 1000);

//trocar bateria

var trocaBateria = document.getElementById("troca");
trocaBateria.onclick = clearInterval();
