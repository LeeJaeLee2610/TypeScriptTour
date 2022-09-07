// arrays
var ninjas = [];
ninjas.push("emcuong");
// union types
var mixed = [];
mixed.push("emcuong");
mixed.push(6);
mixed.push(true);
// any: Bất kì giá trị nào
var age;
// func basic
var greet;
greet = function () {
    console.log("hello");
};
greet();
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 6);
var minus = function (a, b) {
    return a + b;
};
var res = minus(10, 7);
var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greet1 = function (user) {
    console.log("".concat(user.name, " says hello"));
};
// Func Signatures
// let greet2: Function;
//ex1:
var gree;
gree = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
//ex2:
var calc;
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//ex3
var logDetails1;
logDetails1 = function (ninja) {
    console.log("".concat(ninja.name, " id ").concat(ninja.age, " years old"));
};
// Dom & Type Casting
var anchor = document.querySelector("a");
// console.log(anchor?.href);
var form = document.querySelector(".new-item-form");
// console.log(form.children);
var type = document.querySelector("#type");
var toForm = document.querySelector("#toform");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, toForm.value, details.value);
});
