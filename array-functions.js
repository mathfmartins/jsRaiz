const usuarios = [
  {
    nome: "João Silva",
    idade: 28,
    sexo: "M",
    uf: "SP",
    interesses: ["tecnologia", "futebol", "música", "gastronomia"]
  },
  {
    nome: "Maria Oliveira",
    idade: 34,
    sexo: "F",
    uf: "RJ",
    interesses: ["anime", "viagens", "gastronomia"]
  },
  {
    nome: "Carlos Souza",
    idade: 22,
    sexo: "M",
    uf: "MG",
    interesses: ["programação", "cinema", "moda", "dança"]
  },
  {
    nome: "Ana Costa",
    idade: 29,
    sexo: "F",
    uf: "MG",
    interesses: ["futebol", "cinema", "moda"]
  }
];


const agrupamentoPorSexo = usuarios.reduce((acc, usuario) => ({
        ...acc,
        [usuario.sexo]: acc[usuario.sexo] + 1
    }), {M: 0, F: 0 });

console.log(agrupamentoPorSexo)


const agrupamentoPorEstado = usuarios.reduce((acc, usuario) => {
    return ({
        ...acc,
        [usuario.uf]: [...(acc[usuario.uf] ?? []), ...usuario.interesses]
    })

}, {})
console.log(agrupamentoPorEstado)

const agrupamentoTotalPessoaPorInteresses = usuarios.reduce((acc, usuario) => ({
 ...acc,
  ...Object.fromEntries(
    usuario.interesses.map(interesse =>
        [interesse, (acc[interesse] ?? 0) + 1])
  )
}), {}) 
console.log(agrupamentoTotalPessoaPorInteresses);
