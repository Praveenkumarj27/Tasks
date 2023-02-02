// Number MAX_VALUE:-

//       The Number.MAX_VALUE static data property represents the maximum numeric value representable in JavaScript.
//       Number.MAX_VALUE has the value of 1.7976931348623157e+308.

// Note:-
//      Values larger than MAX_VALUE are represented as Infinity and will lose their actual value.

function multiply(x, y) {
  if (x * y > Number.MAX_VALUE) {
    return "Process as Infinity";
  }
  return x * y;
}

console.log(multiply(1.7976931348623157e308, 1));
// Expected output: 1.7976931348623157e+308

console.log(multiply(1.7976931348623157e308, 2));
// Expected output: "Process as Infinity"


