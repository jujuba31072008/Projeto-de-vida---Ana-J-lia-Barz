const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");


//precorre todos os botoes
for (let i = 0; i < botoes.length; i++) {

  // setando a funcao para cada botão
  botoes[i].onclick = function () {

    //percorrer todos os botoes
    for (let j = 0; j < botoes.length; j++) {
      //remove a classe ativo do botao e do conteudo
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    //setar como ativo somente oq eu cliquei
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}


const contadores = document.querySelectorAll(".contador");
const tempos = [
  new Date("2026-07-31T00:00:00"),
  new Date("2026-11-01T00:00:00"),  
  new Date("2026-06-30T00:00:00"),
  new Date("2026-06-15T00:00:00"),
];

let tempoAtual = new Date();

/*

function formatarMilissegundos(ms) {
  let segundos = Math.floor(ms / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  // Sobras
  segundos = segundos % 60;
  minutos = minutos % 60;
  horas = horas % 24;

  let resultado = "";
  if (dias > 0) resultado += `${dias} dias, `;
  if (horas > 0) resultado += `${horas} horas, `;
  if (minutos > 0) resultado += `${minutos} minutos, `;
  resultado += `${segundos} segundos`;

  return resultado;
}

*/
function comecaCronometro(){
  atualizaCronometro();
  setInterval(atualizaCronometro, 1000);//atualiza o cronometro a cada segundo
}



function atualizaCronometro() {

  for (let i = 0; i < contadores.length; i++) {
    document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
    document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
    document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
    document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
  }

}
function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;
  if (tempoFinal > 0) {
    return [dias, horas, minutos, segundos];
  } else {
    return [0, 0, 0, 0];
  }
}

//iniciando tudo
comecaCronometro();