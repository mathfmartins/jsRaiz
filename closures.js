//A function can access variables from outside itself
// even after an external function has finished executing.

function outside() {
    let count = 0;

    function inside() {
        count++;
        console.log(count);
    }

    return inside;
}

const myFn = outside();

myFn(); // 1
myFn(); // 2
myFn(); // 3

function firstNameFn(firstName, fn) {
    return fn(firstName)
}

function lastNameFn(lastName) {
    return function(firstName) {
        return `${firstName} ${lastName}`;
    }
}

function multiReduce(mult) {
    return function (acc, current) {
        return [...acc, (current * mult)]
    }
    console.log(acc);
}

const reduceValues = [10, 20, 30].reduce(multiReduce(2), [])

const fullName = lastNameFn('Martins', firstNameFn);
console.log(fullName('Matheus'));
console.log(fullName('Jõao'));
console.log(fullName('Henrique'));
console.log(fullName('Paulo'));


function sum(a, b, fn) {
     return fn(a + b);
}

function multi(num) {
    return function(value) {
        return num * value;
    }
}

console.log(sum(3, 7, multi(10)))

function oddFn() {
    return function(acc, current) {
        return current % 2 !== 0 ? [...acc, current] : acc; 
    }
}

const impares = [1,2,3,4,5].reduce(oddFn(), []);
console.log(impares);


const products = [
  {
    name: 'Sapiens',
    category: 'book',
    price: 49.90
  },
  {
    name: 'Clean Code',
    category: 'book',
    price: 79.90
  },
  {
    name: 'The Pragmatic Programmer',
    category: 'book',
    price: 89.90
  },
  {
    name: 'Laptop',
    category: 'electronics',
    price: 4599.90
  },
  {
    name: 'Smartphone',
    category: 'electronics',
    price: 2899.90
  },
  {
    name: 'Headphones',
    category: 'electronics',
    price: 299.90
  },
  {
    name: 'Keyboard',
    category: 'electronics',
    price: 199.90
  },
  {
    name: 'Office Chair',
    category: 'furniture',
    price: 899.90
  },
  {
    name: 'Desk',
    category: 'furniture',
    price: 1299.90
  },
  {
    name: 'Running Shoes',
    category: 'sports',
    price: 349.90
  },
  {
    name: 'Football',
    category: 'sports',
    price: 119.90
  },
  {
    name: 'Coffee Mug',
    category: 'kitchen',
    price: 39.90
  },
  {
    name: 'Blender',
    category: 'kitchen',
    price: 249.90
  }
];

const groupByCategory = products.reduce(
    (acc, product) => ({ 
        ...acc,
        [product.category]: 
        [...(acc[product.category] || []),
           product.name
        ]
    }), {}

);

console.log(groupByCategory);


const productsWithId = [
  {
    id: '001',
    name: 'Sapiens',
    category: 'book',
    price: 49.90
  },
  {
    id: '002',
    name: 'Clean Code',
    category: 'book',
    price: 79.90
  },
  {
    id: '003',
    name: 'The Pragmatic Programmer',
    category: 'book',
    price: 89.90
  },
]

const groupById = productsWithId.reduce((acc, product) => {
    acc[product.id] = product;
    
    return acc;
}, [])

console.log(groupById);
// to do: refator using strategy to remove ifs
const groupByPrice = products.reduce((acc, current) => {

    const price = current.price;

    if (price <= 50) {
        acc.until50.push(current);
    }

    if (price < 100) {
        acc.betwwen50And100.push(current);
    }

    if (price > 200) {
        acc.over200.push(current)
    }
    return acc;

}, {
    until50: [],
    betwwen50And100: [],
    over200: []
});
console.log(groupByPrice);