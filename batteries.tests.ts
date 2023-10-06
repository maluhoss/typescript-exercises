import * as Batteries from "./batteries.ts";

process.stdout.write("\nTesting isEven:\n");

console.log("10 is an even number", Batteries.isEven(10) === true);
console.log("9 is not an even number", Batteries.isEven(9) === false);

process.stdout.write("\nTesting isOdd:\n");
console.log("10 is not an odd number", Batteries.isOdd(10) === false);
console.log("9 is an odd number", Batteries.isOdd(9) === true);

process.stdout.write("\nTesting isDivisibleBy:\n");
console.log("5 is not divisible by 3:", Batteries.divisibleBy(5, 3) === false);
console.log("1 is divisible by 1:", Batteries.divisibleBy(1, 1) === true);
console.log("6 is divisible by 2:", Batteries.divisibleBy(6, 2) === true);
console.log("6 is divisible by 3:", Batteries.divisibleBy(6, 3) === true);

process.stdout.write("\nTesting eqArrays:\n");
console.log(Batteries.eqArrays([], []));
console.log(Batteries.eqArrays([1, 2, 3], [1, 2, 3]));
console.log(!Batteries.eqArrays([1, 2, 3], [1, 3, 2]));
console.log(!Batteries.eqArrays([1, 2, 3], [1, 2, 3, 4]));
console.log(!Batteries.eqArrays([1, 2, 3, 4], [1, 2, 3]));
console.log(
  Batteries.eqArrays(["Alice", "Bob", "Carol"], ["Alice", "Bob", "Carol"])
);
console.log(Batteries.eqArrays([1, 2, 3, [4, 5, 6]], [1, 2, 3, [4, 5, 6]]));
