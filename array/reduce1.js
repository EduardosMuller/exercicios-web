const alunos = [
  { nome: "Tiago", nota: 7.3, bolsista: false },
  { nome: "Luisa", nota: 9.2, bolsista: true },
  { nome: "Rafael", nota: 9.8, bolsista: false },
  { nome: "Natalia", nota: 8.7, bolsista: true },
];

console.log(alunos.map((a) => a.nota));
const resultado = alunos
  .map((a) => a.nota)
  .reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
  }, 0);

console.log(resultado);
