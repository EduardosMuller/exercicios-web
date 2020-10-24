// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: "Maria", salario: 12348.99 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

// usar spread com array
const grupoA = ["Tiago", "Natalia", "Rafael"];
const grupoFinal = ["Luisa", "Maria", ...grupoA];
console.log(grupoFinal);
