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

