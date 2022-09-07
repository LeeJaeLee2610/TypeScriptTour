// arrays
let ninjas: string[] = [];
ninjas.push("emcuong");

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push("emcuong");
mixed.push(6);
mixed.push(true);

// any: Bất kì giá trị nào
let age: any;

// func basic
let greet: Function;

greet = () => {
  console.log("hello");
};

greet();

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

add(5, 6);

const minus = (a: number, b: number) => {
  return a + b;
};

let res = minus(10, 7);

// Type Aliases
type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet1 = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

// Func Signatures
// let greet2: Function;

//ex1:
let gree: (a: string, b: string) => void;
gree = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

//ex2:
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

//ex3
let logDetails1: (obj: { name: string; age: number }) => void;

type person = { name: string; age: number };

logDetails1 = (ninja: person) => {
  console.log(`${ninja.name} id ${ninja.age} years old`);
};

// classes
class Invoice {
  client: string;
  details: string;
  amount: number;
  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes @${this.amount} for ${this.details}`;
  }
}

const invoice = new Invoice("emcuong", "ui doi oi", 200);

let invoices: Invoice[] = [];
invoices.push(invoice);

console.log(invoices);

// Public private && ReadOnly

// Dom & Type Casting
const anchor = document.querySelector("a");
// console.log(anchor?.href);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const toForm = document.querySelector("#toform") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value);
});
