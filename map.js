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

