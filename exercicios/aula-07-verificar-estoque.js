function verificarEstoque(quantidade) {
  if (quantidade > 0) {
    return "há produto disponivel";
  } else {
    return "está esgotado o estoque";
  }
}

console.log(verificarEstoque(2));
console.log(verificarEstoque(0));