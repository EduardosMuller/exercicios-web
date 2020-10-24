// pessoa -> 123 -> {...}
const pessoa = { nome: "Tiago" };
pessoa.nome = "Rafael";
console.log(pessoa);

Object.freeze(pessoa);

pessoa.nome = "Maria";
console.log(pessoa.nome);
