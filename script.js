// * setInterval
// function acao() {
//   document.write(`Executando ...<br/>`);
// }
//
// setInterval(acao, 2000);

// setInterval(() => {
//   return document.write(`Executando2 ...<br/>`);
// }, 3000);

// let timer = setInterval(() => {
//   return document.write(`Executando3 ...<br/>`);
// }, 1500);

// * Outro temporizador
function acao2() {
  document.write("Executando2 ...<br/>");
}
setTimeout(acao2, 5000);
