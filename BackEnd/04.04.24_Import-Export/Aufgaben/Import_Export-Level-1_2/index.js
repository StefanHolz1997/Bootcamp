import {
  firstElement,
  noLast,
  lastElement,
  noFirst,
  removeElement,
  uniqueElement,
  sumArray,
  randomNumber,
  stringFirstLetterCap,
  stringCap,
  lastLetterMatch,
} from "./function.js";

import { names, numbers } from "./data.js";

console.log(firstElement(names));
console.log(firstElement(numbers));

console.log(noLast(names));
console.log(noLast(numbers));

console.log(lastElement(names));
console.log(lastElement(numbers));

console.log(noFirst(names));
console.log(noFirst(numbers));

console.log(
  removeElement(["remove", "stay", "stay5", 22, true, "remove"], "remove")
);
console.log(uniqueElement([1, 6, 9, 2, 1, 6, 7, 10]));
console.log(sumArray(numbers));
console.log(randomNumber(5, 10));

console.log(stringFirstLetterCap("hallo"));
console.log(stringCap("hallo"));

console.log(lastLetterMatch("test", "t"));
console.log(lastLetterMatch("test", "q"));
