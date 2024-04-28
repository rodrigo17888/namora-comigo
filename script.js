document.addEventListener("DOMContentLoaded", function () {
  // Encontrar o elemento de imagem pelo ID
  var imagemElement = document.getElementById("image");

  // Encontrar o botão pelo ID
  var btnAceito = document.getElementById("sim");

  const h1 = document.querySelector("h1");
  const h2 = document.querySelector(".pergunta");
  const btn1 = document.querySelector("#sim");
  const btn2 = document.querySelector("#nao");
  btnAceito.addEventListener("click", function () {
    h1.innerHTML = "Aceitouuuu!";
    h2.innerHTML = "Você não vai se arrepender !";
    h2.style.marginTop = "50px";
    h2.style.fontSize = "20px";
    btn1.style.display = "none";
    btn2.style.display = "none";
  });

  // Função para trocar a imagem pelo vídeo
  function trocarParaVideo() {
    // Criar um elemento de vídeo
    var videoElement = document.createElement("video");

    // Configurar atributos do vídeo (src, controls, etc.)
    videoElement.src = "videos/olhar-sedutor.mp4";
    videoElement.controls = true;
    videoElement.style.marginTop = "40px";
    videoElement.style.width = "300px";

    // Substituir a imagem pelo vídeo
    imagemElement.parentNode.replaceChild(videoElement, imagemElement);

    // Remover o ouvinte de clique após a troca
    btnAceito.removeEventListener("click", trocarParaVideo);
  }

  // Adicionar um ouvinte de clique ao botão
  btnAceito.addEventListener("click", trocarParaVideo);
});

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
