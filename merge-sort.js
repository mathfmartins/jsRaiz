const bookList = require('./livros');

function mergeSort(array, nestingLevel = 0) {
  if (array.length > 1) {
    const middle = Math.floor(array.length / 2);
    const leftPart = mergeSort(array.slice(0, middle), nestingLevel + 1);
    const rightPart = mergeSort(array.slice(middle), nestingLevel + 1);
    array = merge(leftPart, rightPart);
  }

  return array;
}

function merge(leftPart, rightPart) {
  let leftIndex = 0;
  let rightIndex = 0;
  const result = [];

  while (leftIndex < leftPart.length && rightIndex < rightPart.length) {
    const currentLeftItem = leftPart[leftIndex];
    const currentRightItem = rightPart[rightIndex];

    if (currentLeftItem.price < currentRightItem.price) {
      result.push(currentLeftItem);
      leftIndex++;
    } else {
      result.push(currentRightItem);
      rightIndex++;
    }
  }

  return result.concat(
    leftIndex < leftPart.length
      ? leftPart.slice(leftIndex)
      : rightPart.slice(rightIndex)
  );
}

module.exports = mergeSort;
console.log(mergeSort(bookList));