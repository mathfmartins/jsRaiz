// Creating a Map with initial values
const userRolesMap = new Map([
  [1, 'developer'],
  [true, 'active'],
  [3, 'onboard']
]);

// Adding new entries
userRolesMap.set(42, 'Math');

// Getting values
const roleById = userRolesMap.get(1);
const status = userRolesMap.get(true);

console.log(roleById); // developer
console.log(status);   // active

// Checking if a key exists
console.log(userRolesMap.has(42)); // true

// Map size (NOT length)
console.log(userRolesMap.size); // 4

// Deleting a key
userRolesMap.delete(3);

// Iterating over the Map
for (const [key, value] of userRolesMap) {
  console.log(`Key: ${key}, Value: ${value}`);
}

// Using forEach
userRolesMap.forEach((value, key) => {
  console.log(`Key: ${key} => Value: ${value}`);
});

// Converting Map to Array
const mapToArray = Array.from(userRolesMap);
console.log(mapToArray);

// Converting Array to Map
const arrayToMap = new Map([
  ['name', 'Math'],
  ['age', 25]
]);

// Clearing all entries
// userRolesMap.clear();

// Strings are indexed
console.log('Math'[2]); // t
console.log('Math'.length); // 4

// Arrays are indexed
const sparseArray = [];
sparseArray[42] = 'hello';

console.log(sparseArray.length); // 43
console.log(sparseArray[0]); // undefined

// Maps are NOT indexed
const exampleMap = new Map();
exampleMap.set(42, 'hello');

console.log(exampleMap.size);

const objKey = { id: 1 };

const advancedMap = new Map();
advancedMap.set(objKey, 'object value');

console.log(advancedMap.get(objKey)); // object value