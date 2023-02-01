const adder = (n1: number, n2: number) => {
  return n1 + n2;
};

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void ) {
   cb(n1 + n2);
}

const printOutResult = (num: number): void => {
  console.log("Result: " + num);
};

// let combineValues: Function;
let combineValues: (a: number, b:number) => number;

combineValues = adder;


console.log(combineValues(8, 8));


// printOutResult(adder(5, 12, (result) => { console.log(result)}));

addAndHandle(5, 12, (result) => { console.log(result)});
