//only test, don change prototype =)
Number.prototype.add = function(value) { return this + value };
const num = 123.42.add(100);
console.log(num.__proto__)
num
//class is a syntactic sugar, under the hood the js create a function, like this,
//called c o n s t r u c t i on | functions
function User(name) {
    this.name = name;
    this.walk = () => {
        return 'walking...';
    }
}

User.prototype.sendMessage = () => {
    return 'sending a message...'
}

//whenever you use the "new" operator before a function, it will return a new object.
const user = new User('mat');
console.log(user);
console.log(user.__proto__);

// What happens?
// First, JavaScript looks for sendMessage directly on the user object.
// Since it’s not found there, it continues the lookup in the object's
// prototype (user.__proto__), where the method is finally found.

//p r o t o t y p i c a l | C h A i N
console.log(user.sendMessage()); 


//same reference
let obj1 = {magicNumber: 42};
let obj2 = obj1;
obj2.magicNumber = 100;
console.log(obj1);

//Using Object.Create to create a new object with a new reference,
//the object is inherited and becomes the prototype of the created object.
let obj = {magicNumber: 42};
let ob = Object.create(obj);
console.log(ob); 
console.log(ob.__proto__);

//p r o t o t y p i c a l | C h A i N
console.log(ob.magicNumber);  


//how Object.create works, under the hood:
function objCreateCopy(obj) {
    fn = function() {}
    fn.prototype = obj;
    return new fn;
} 


