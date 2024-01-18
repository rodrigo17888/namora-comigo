function fuja() {
  let btnNao = document.getElementById("nao");

  let larguraJanela = window.innerWidth;
  let alturaJanela = window.innerHeight;

  let maxX = larguraJanela - btnNao.offsetWidth;
  let maxY = alturaJanela - btnNao.offsetHeight;

  let aleatorioX = Math.floor(Math.random() * maxX);
  let aleatorioY = Math.floor(Math.random() * maxY);

  btnNao.style.left = aleatorioX + "px";
  btnNao.style.top = aleatorioY + "px";
}

function aceito() {
  alert("Parabéns, você fez uma ótima escolha hehehe !!!");
}
