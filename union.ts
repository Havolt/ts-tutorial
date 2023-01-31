const combine = (n1: number | string, n2: number | string, resultConversion: 'as-number' | 'as-text') => {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number" || resultConversion === 'as-number') {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  if(resultConversion === 'as-number' ) {
    return +result;
  } else {
    result.toString();
  }
};

const combineAges = combine(30, 26, 'as-number';
console.log(combineAges);

const combinedNames = combine("Mark", "Cait", 'as-text');
console.log(combinedNames);
