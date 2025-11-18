// CALCULADORA DE IMC!
function imc() {
  // Variáveis dos campos.
  let nome = document.getElementById("nome").value;
  let peso = document.getElementById("peso").valueAsNumber;
  let altura = document.getElementById("altura").valueAsNumber;

  // Exige que preencha os campos!
  if (!nome || isNaN(peso) || isNaN(altura || altura <= 0)) {
    alert("Preencha todos os campos!");
    return;
  }

  // Cria uma variável Valor com o Resultado do IMC.
  let valor = peso / (altura * altura);
  // Cria uma variável Mensagem.
  let mensagem = "";
  if (valor <= 18.5) mensagem = "Você está Abaixo do Peso!";
  else if (valor <= 24.9) mensagem = "Você está com o Peso Normal!";
  else if (valor <= 29.9) mensagem = "Você está com Sobrepeso!";
  else if (valor <= 34.9) mensagem = "Você está com Obesidade Grau 1!";
  else if (valor <= 39.9) mensagem = "Você está com Obesidade Grau 2!";
  else mensagem = "Você está com Obesidade Grau 3!";

  const container = document.getElementById("resultado");
  // Campo da nova mensagem.
  const novoResultado = document.createElement("p");
  novoResultado.textContent = `${nome}, seu IMC é ${valor.toFixed(
    2
  )}. ${mensagem}`;

  // Adiciona ao container
  container.appendChild(novoResultado);

  // Faz a animação
  requestAnimationFrame(() => {
    novoResultado.classList.add("anima");
  });
}

// CALCULADORA METABOLICA
function metabolica() {
  let nome = document.getElementById("nome").value;
  let peso = document.getElementById("peso").valueAsNumber;
  let altura = document.getElementById("altura").valueAsNumber;
  let idade = document.getElementById("idade").valueAsNumber;
  let sexo = document.querySelector('input[name="sexo"]:checked').value;
  let tmb;

  // Exige que preencha os campos!
  if (!nome || isNaN(peso) || isNaN(altura || altura <= 0)) {
    alert("Preencha todos os campos!");
    return;
  }

  // Calcula para o Sexo Masculino.
  if (sexo === "homem") {
    peso = peso * 10;
    altura = 6.25 * altura;
    idade = 5 * idade;

    tmb = peso + altura - idade + 5;

    // Calcula para o Sexo Feminino.
  } else if (sexo === "mulher") {
    peso = peso * 10;
    altura = 6.25 * altura;
    idade = 5 * idade;

    tmb = peso + altura - idade - 161;
  }

  // Cria histórico de taxas!
  const container = document.getElementById("resultado");
  const resultado = document.createElement("p");
  resultado.textContent = `${nome}, sua Taxa Metabolica é ${tmb.toFixed(
    2
  )} Kcal!.`;
  container.appendChild(resultado);

  // Faz a animação
  requestAnimationFrame(() => {
    resultado.classList.add("anima");
  });
}
