const ano_nascimento = document.getElementById("anonasc");
const ano_atual = document.getElementById("anoatual");
const idade_anos = document.getElementById("idadeanos");
const idade_meses = document.getElementById("idademeses");
const idade_semanas = document.getElementById("idadesemanas");
const idade_dias = document.getElementById("idadedias");

function calc_idade() {
  console.log("anonasc", ano_nascimento.value);
  console.log("anoatual", ano_atual.value);

  idade_anos.value = Number(ano_atual.value) - Number(ano_nascimento.value);

  idade_meses.value = idade_anos.value * 12;
  idade_semanas.value = idade_anos.value * 52;
  idade_dias.value = idade_anos.value * 365;
}