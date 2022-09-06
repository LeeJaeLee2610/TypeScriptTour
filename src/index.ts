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

const add = (a: number, b: number) => {
  console.log(a + b);
};

add(5, 6);
