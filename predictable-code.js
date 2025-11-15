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

const allQuestionsCorrect = student.questions.every(question => question.correct);
allQuestionsCorrect;

const atLeastOneCorrect = student.questions.some(question => question.correct);
atLeastOneCorrect;

const nestedArray = [
  [1, 2, [3, 4, [5, 6], 0]]
];
console.log(nestedArray.flat(2));

let personData = {
  name: 'João',
  idade: 20,
  cidade: 'São Paulo'
};

const personEntries = Object.entries(personData);
personEntries;

const personFromEntries = Object.fromEntries(personEntries);
personFromEntries;

const product = {
  name: "Monitor",
  price: 850,
  amount: 12,
  category: "technology"
};

const productEntries = Object.entries(product);
productEntries;

const numericProductValues = productEntries
  .filter(([key, value]) => typeof value === 'number')
  .flat(1);

numericProductValues;

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

const peopleEntries = Object.entries(
  people.map(person => [person.id, person.name]).flat(1)
);

peopleEntries;

const peopleMapped = Object.fromEntries(peopleEntries);
peopleMapped;

const extractedPeople = [];
for (let index = 2; index < peopleEntries.length; index += 2) {
  extractedPeople.push(peopleMapped[index], peopleMapped[++index]);
}
extractedPeople;

const peopleFromEntries = Object.fromEntries(peopleEntries);
peopleFromEntries;

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
  { questionId: "005", right: true }
];

let questionBaseMap = Object.fromEntries(
  quizQuestions.map(q => [q.questionId, 0])
);
questionBaseMap;

const normalizedQuestions = quizQuestions.map(question => {
  return [question.questionId, 0];
});

normalizedQuestions;

let correctAnswerCount = normalizedQuestions.map(question => {
  return [
    question[0],
    quizQuestions.filter(q => q.questionId === question[0] && q.right).length
  ];
});

correctAnswerCount;

let totalCorrectAnswers = normalizedQuestions.map(pair => {
  return [
    pair[0],
    quizQuestions.filter(q => q.questionId === pair[0] && q.right).length
  ];
});

totalCorrectAnswers;
