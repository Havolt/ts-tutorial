const adder = (n1: number, n2: number) => {
  return n1 + n2;
};

const printOutResult = (num: number): void => {
  console.log("Result: " + num);
};

printOutResult(adder(5, 12));
