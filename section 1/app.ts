const add = (n1: number, n2: number, showResult: boolean) => {
  const result = n1 + n2;

  if (showResult) {
    console.log(result);
  } else {
    return result;
  }
  return n1 + n2;
};

const number1 = 5;
const number2 = 2.8;
const printResult = true;

const result = add(number1, number2, printResult);

console.log(result);
