const alunos = [
  { nome: "Tiago", nota: 7.3, bolsista: false },
  { nome: "Luisa", nota: 9.2, bolsista: true },
  { nome: "Rafael", nota: 9.8, bolsista: false },
  { nome: "Natalia", nota: 8.7, bolsista: true },
];

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
// Desafio 2: Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))