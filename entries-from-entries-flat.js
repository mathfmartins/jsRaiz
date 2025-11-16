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
//every - and operator
const allQuestionsCorrect = student.questions.every(question => question.correct);
allQuestionsCorrect;

//some - or operator
const atLeastOneCorrect = student.questions.some(question => question.correct);
atLeastOneCorrect;

const nestedArray = [
  [1, 2, [3, 4, [5, 6], 0]]
];
console.log(nestedArray.flat(3));

let personData = {
  name: 'João',
  idade: 20,
  cidade: 'São Paulo'
};

const personEntries = Object.entries(personData);
personEntries;

const personFromEntries = Object.fromEntries(personEntries);
personFromEntries;

let product = {
  name: "Monitor",
  price: 850,
  amount: 12,
  category: "technology"
};

const productEntries = Object.entries(product);
productEntries;

const numericProductValues = productEntries
  .filter(([key, value]) => typeof value === 'number')
  
numericProductValues;
const productOnlyNumbers = Object.fromEntries(numericProductValues);
productOnlyNumbers;

const colorHexMap = {
  blue: "#0000FF",
  red: "#FF0000",
  green: "#00FF00"
};

const invertedColorMap = Object.entries(colorHexMap)
  .map(([color, hex]) => [hex, color])
  .flat(1);

invertedColorMap;

const wordList = ["sun", "moon", "sun", "star", "moon"];

const wordFrequency = wordList.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

wordFrequency;

const people = [
  { id: '001', name: "Alice", age: 25 },
  { id: '004', name: "Bob", age: 30 },
  { id: '003', name: "Alice", age: 28 },
  { id: '004', name: "Charlie", age: 35 }
];

const quizQuestions = [
  { questionId: "001", right: false },
  { questionId: "002", right: true },
  { questionId: "003", right: false },
  { questionId: "004", right: true },
  { questionId: "005", right: true },
  { questionId: "001", right: true },
  { questionId: "002", right: true },
  { questionId: "003", right: true },
  { questionId: "004", right: true },
  { questionId: "005", right: true },
  { questionId: "003", right: true },
  { questionId: "004", right: false },
  { questionId: "005", right: true },
  { questionId: "005", right: true },
  { questionId: "005", right: true },
  { questionId: "005", right: true },
  { questionId: "005", right: true },
];

let questionBaseMap = (quizQuestions.map((quiz) => {
 return [quiz.questionId, quiz.right]
}));
questionBaseMap;


let totalCorrectAnswers = questionBaseMap.reduce((acc, [key, value])=> {
  acc[key] = (acc[key] || 0) + 1;
  return  acc;
}, {});

totalCorrectAnswers;


const something = {
  name: "something name",
  price: 29.9,
  category: "something category",
  storaged: 10
};

const somethingEntries = Object.entries(something);
const stringOnly = 
Object.fromEntries(
somethingEntries.filter(([key, value]) => {
  return typeof (value) === 'string';
}));
stringOnly

let userScores = {
  alice: 82,
  bob: 47,
  charlie: 91,
  diana: 64
};

const highScores = Object.entries(userScores)
  .filter(([_, value]) => value >= 70
  ).map(([k, _]) => {
    return k;
  });

highScores;

const obj = {
  name: "Laptop",
  price: 1200,
  storage: 5
};

const stringArr =
Object.entries(obj).map(([key, value]) => {
  return [key, value.toString()];
}).flat(2);
stringArr;

const mixed = {
  id: 10,
  name: "Robert",
  active: true,
  score: 55,
  premium: false,
  nickname: "Rob"
};


const result =  Object.entries(mixed).reduce((acc, [_, value]) => {
    const type = typeof value;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});
result;


const users = [
  { id: '001', name: "Ana Silva", email: "ana.silva@example.com" },
  { id: '002', name: "Bruno Costa", email: "bruno.costa@example.com" },
  { id: '003', name: "Carla Souza", email: "carla.souza@example.com" },
  { id: '004', name: "Diego Martins", email: "diego.martins@example.com" }
];

const usersMap = users.map((user) => {
    return [ user.id,  user.name] ;
})
usersMap;
const invertion = Object.fromEntries(usersMap);
invertion;

const usersEntries = Object.fromEntries(users.map((u) => {
    return [u.id, u];
}));
usersEntries;

const laptop = {
  name: "Laptop",
  price: 1499,
  stock: 32,
  category: "electronics"
};

const laptopString = Object.entries(laptop).map(([key, value]) => {
  return  `${key}: ${value}`
}).flat(2);

laptopString;

const expenses = {
  food: 120,
  transport: 58,
  internet: 99,
  entertainment: 45
};

const sumNumeric = Object.entries(expenses).reduce((acc, [_, value]) => {
  return  acc += value;
}, 0)
sumNumeric;

const obj2 = { a: 5, b: 12, c: 20 };

const greaterThanTen = Object.entries(obj2).filter(([_, value]) => value > 10);
const result42 = Object.fromEntries(greaterThanTen);
result42;