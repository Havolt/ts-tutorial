type Combinable = number | string;
type Conversions = "as-number" | "as-text";

const combine = (
  n1: Combinable,
  n2: Combinable,
  resultConversion: Conversions
) => {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  if (resultConversion === "as-number") {
    return +result;
  } else {
    result.toString();
  }
};

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combinedNames = combine("Mark", "Cait", "as-text");
console.log(combinedNames);
