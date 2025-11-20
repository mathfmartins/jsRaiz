//only test, we don edit prototype daily =)
Number.prototype.add = function(value) { return this + value };
const num = 123.42.add(100);
num;

//always that you use 'new' operator before a function, it will return a new object.
function User(name) {
    this.name = name;
    this.walk = () => {
        return 'walking...';
    }
}

User.prototype.sendMessage = () => {
    return 'sending a message...'
}
const user = new User('mat');
console.log(user);
console.log(user.__proto__);

// What happens?
// First, JavaScript looks for sendMessage directly on the user object.
// Since it’s not found there, it continues the lookup in the object's
// prototype (user.__proto__), where the method is finally found.
console.log(user.sendMessage());
