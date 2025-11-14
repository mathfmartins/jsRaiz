const student = {
  name: "João",
  age: 20,
  questions: [
    { number: 1, correct: false },
    { numero: 2, correct: true },
    { numero: 3, correct: false },
    { numero: 3, correct: false }
  ]
};

// every, AND operator
const everyCorrects = student.questions.every(question => question.correct);
everyCorrects;

// some, OR operator
const someCorrect  = student.questions.some(question => question.correct);
someCorrect;

//flat
const arr = [
  [1, 2, [3, 4, [5,6], 0]]
]
console.log(arr.flat(2));

//entries and fromEntries
let obj = {
  name: 'João',
  idade: 20,
  cidade: 'São Paulo'
}

const objEntries = Object.entries(obj);
objEntries;  

const fromEntries = Object.fromEntries(objEntries);
fromEntries;

const product = {
  name: "Monitor",
  price: 850,
  amount: 12,
  category: "eletrônicos"
};

const entriesProduto = Object.entries(product);
const apenasNumeros = entriesProduto.filter((value) => typeof value === 'number').flat(1);
apenasNumeros;

const colors = {
  blue: "#0000FF",
  red: "#FF0000",
  green: "#00FF00"
};

const invertion = Object.entries(colors).map(([key, value]) => [value, key]).flat(1);
invertion;










// const colorEntries = Object.fromEntries(Object.entries(cores).map(([key, value]) => [value, key]));
// colorEntries;

const dados = {
  Nome: "Carlos",
  EMAIL: "carlos@example.com",
  Cidade: "Rio"
};

const dadosNormalizados =
Object.fromEntries(
Object.entries(dados)
.map(([key, value]) => [key.toLocaleLowerCase(), value]));

dadosNormalizados;

debugger
const palavras = ["sol", "lua", "sol", "estrela", "lua"];
const contagem = palavras.reduce((acc, palavra) => {
  acc[palavra] = (acc[palavra] || 0) + 1;
  return acc;
}, {});