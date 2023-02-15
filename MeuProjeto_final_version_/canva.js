// código para desenhar no canva do arquivo html


var paleta = document.querySelector('input'); // pega a cor que o usuário define
var tela = document.querySelector('canvas'); // canva no html
var pincel = tela.getContext('2d'); // para preencher o fundo do canva
pincel.fillStyle = '#F2B3BF';
pincel.fillRect(0, 0, 600, 400);
var desenha = false;

// o desenhar propriamente dito
function desenhaCirculo(evento) {
	if (desenha) {
		var x = evento.pageX - tela.offsetLeft;
		var y = evento.pageY - tela.offsetTop;
		pincel.fillStyle = paleta.value; // sempre pega o valor atual da paleta!
		pincel.beginPath();
		pincel.arc(x, y, 3, 0, 2 * 3.14);
		pincel.fill();
	}
	console.log(x + ',' + y);
}

tela.onmousemove = desenhaCirculo;
// atribuindo diretamente a função anônima
tela.onmousedown = function() {
desenha = true;
}
// atribuindo diretamente a função anônima
tela.onmouseup = function() {
desenha = false;
}