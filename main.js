function gerarSenha() {
  const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()_+{}[]<>?";

  const usarMaiusculas = document.getElementById("maiusculas").checked;
  const usarMinusculas = document.getElementById("minusculas").checked;
  const usarNumeros = document.getElementById("numeros").checked;
  const usarSimbolos = document.getElementById("simbolos").checked;
  const tamanho = parseInt(document.getElementById("tamanho").value);

  let caracteres = "";
  if (usarMaiusculas) caracteres += letrasMaiusculas;
  if (usarMinusculas) caracteres += letrasMinusculas;
  if (usarNumeros) caracteres += numeros;
  if (usarSimbolos) caracteres += simbolos;

  if (caracteres === "") {
    alert("Selecione ao menos uma opção de caractere!");
    return;
  }

  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[randomIndex];
  }

  document.getElementById("senha").value = senha;
}



