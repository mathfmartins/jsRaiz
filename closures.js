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

const fullName = lastNameFn('Martins', firstNameFn);
console.log(fullName('Matheus'));
console.log(fullName('Jõao'));
console.log(fullName('Henrique'));
console.log(fullName('Paulo'));


function sum(a, b, fn) {
     return fn(a + b);
}

function multi(num) {
    return function(sumResult) {
        return num * sumResult;
    }
}

console.log(sum(3, 7, multi(10)))