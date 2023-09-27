/*
Use MDN as a reference throughout these exercises.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

import { start } from "repl";

// Practice using string index

process.stdout.write("*6·1. ");
/*
 *6·1. Print the third letter of the alphabet string.
 */
const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet[2]);

process.stdout.write("\n*6·11. ");
/*
 *6·11. Print the last letter of the alphabet string, without using the length property.
 */
console.log(alphabet[25]);
process.stdout.write("\n*6·12.\n");
/*
*6·12. Create a function called 'numLetter' that takes a number, n, and returns the nth letter of the alphabet. If n is 3, it should return the third letter, 'c'.

Remember to write some lines of code to test that your function works correctly.
*/
const numLetter = (num: number): string => {
  return alphabet[num - 1];
};
console.log("1 should return a", numLetter(1) === "a");
console.log("2 should return b", numLetter(2) === "b");
console.log("3 should not return a", numLetter(3) !== "a");

process.stdout.write("\n*6·13.\n");
/*
*6·13. Create a function called 'isAtIndex' that takes a character, a number, and a string. It should return true if the character is found at the index number of the string, otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/

const isAtIndex = (character: string, num: number, word: string): boolean => {
  return word.indexOf(character) !== -1 && word.indexOf(character) == num;
};
console.log("e is at index 1 in hello:", isAtIndex("e", 1, "hello") === true);
console.log("e is at index 4 in Alice:", isAtIndex("e", 4, "Alice") === true);
console.log(
  "e is not at index 3 in Alice",
  isAtIndex("e", 3, "Alice") === false
);

// Practice using length

process.stdout.write("\n*6·2. ");
/*
 *6·2. Print the length of the alphabet string.
 */
console.log(alphabet.length);
process.stdout.write("\n*6·21. ");
/*
 *6·21. Print the last letter of the alphabet string, using the length property.
 */
console.log(alphabet[alphabet.length - 1]);
process.stdout.write("\n*6·22. ");
/*
 *6·22. Try to figure out the length of the string c in your head, then print it to see if you got it right.
 */
const a: string = "alpha";
const b: string = "bet";
const c: string = a + b;

// Practice using methods
console.log(c.length); // 8

process.stdout.write("\n*6·3.\n");
/*
*6·3. Create a function called 'inAlphabet' that takes a string and returns true if it is included in the alphabet, otherwise false. It only needs to work on lowercase letters.

Use the includes() method.

The following lines should help test if your function works correctly. They should print true.
*/
const inAlphabet = (searchString: string): boolean =>
  searchString.length > 0 && alphabet.includes(searchString);

console.log("a is in the alphabet:", inAlphabet("a") === true);
console.log("lmno is in the alphabet:", inAlphabet("lmno") === true);
console.log("1 is not in the alphabet:", inAlphabet("1") === false);

process.stdout.write("\n*6·301.\n");
/*
*6·301. Create a function called 'isDigit' that takes a digit as a string and returns true if it is included in the following string, otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/
const digits: string = "1234567890";
const isDigit = (digit: string): boolean =>
  digit.length > 0 && digits.includes(digit);
console.log("1 is a digit:", isDigit("1") === true);
console.log("9 is a digit:", isDigit("9") === true);
console.log("a is not a digit:", isDigit("a") === false);

process.stdout.write("\n*6·302.\n");
/*
*6·302. Create a function called 'isInTrouble' that takes a name and returns true if it is included in the email text.

Remember to write tests.
*/
const email: string = `Hello all.

As you know, last quarter was suboptimal. We did not meet the expected revenue and things need to change. There are a few people invited to a special meeting at 1PM today in the conference room. From engineering, Dilbert, Wally, and Alice. Asok the intern. Mordac from management.

If your name was not stated, continue work as usual. Sincerely, PHB.`;
const isInTrouble = (name: string): boolean =>
  name.length > 0 && email.includes(name);

console.log("Alice is in trouble", isInTrouble("Alice") === true);
console.log("Tim is not in trouble", isInTrouble("Tim") === false);

process.stdout.write("\n*6·303.\n");
/*
 *6·303. Create a function called 'badLanguage' that takes a message and returns true if it contains any bad language, otherwise false. The bad language phrases are: butt face, poopy head, and snot brain.
 */
const badLanguage = (message: string): boolean =>
  message.toLowerCase().includes("butt face") ||
  message.toLowerCase().includes("poopy head") ||
  message.toLowerCase().includes("snot brain");
console.log(
  "there is no bad language in message",
  badLanguage(email) === false
);
console.log(
  "there is bad language in message",
  badLanguage("There are many butt faces at work") === true
);

process.stdout.write("\n*6·31.\n");
/*
 *6·31. Create a function called 'IsBasicQuestion' that takes a sentence and returns true if it a basic question, otherwise false. A basic question begins with one of the five Ws (Who, What, When, Where, Why) and ends with a question mark.
 */
const isBasicQuestion = (question: string): boolean => {
  const isQuestion = question.endsWith("?");
  const isBasic =
    question.toLowerCase().startsWith("who") ||
    question.toLowerCase().startsWith("what") ||
    question.toLowerCase().startsWith("when") ||
    question.toLowerCase().startsWith("where") ||
    question.toLowerCase().startsWith("why");
  return isQuestion && isBasic;
};

console.log(
  "It is a basic question with who",
  isBasicQuestion("Who is the student today?") === true
);
console.log(
  "It is a basic question with what",
  isBasicQuestion("What is the weather today?") === true
);
console.log(
  "It is a basic question with when",
  isBasicQuestion("When will it rain today?") === true
);
console.log(
  "It is a basic question with where",
  isBasicQuestion("Where are you working today?") === true
);
console.log(
  "It is a basic question with why",
  isBasicQuestion("Why are you learning Typescript?") === true
);
console.log(
  "It is NOT a basic question with how",
  isBasicQuestion("How does electricity travel to your home?") === false
);
console.log(
  "It is NOT a basic question with a statement",
  isBasicQuestion("Tell me how democracy works") === false
);

process.stdout.write("\n*6·32.\n");
/*
 *6·32. Create a function called 'validURL' that takes a string and returns true if it is a valid URL, otherwise false. For our sake, a valid URL must start with either "http://" or "https://" and end with any of: ".com", ".ca", or ".org".
 */
const validURL = (link: string): boolean => {
  const validBeginning =
    link.startsWith("http://") || link.startsWith("https://");
  const validEnd =
    link.endsWith(".com") || link.endsWith(".ca") || link.endsWith(".org");
  return validBeginning && validEnd;
};

console.log(
  "Valid URL with http:// and .com",
  validURL("http://google.com") === true
);
console.log(
  "Valid URL with http:// and .ca",
  validURL("http://google.ca") === true
);
console.log(
  "Valid URL with http:// and .org",
  validURL("http://khanacademy.org") === true
);
console.log(
  "Valid URL with https:// and .com",
  validURL("https://google.com") === true
);
console.log(
  "invalid URL with htt:// and .com",
  validURL("htt://google.com") === false
);
console.log(
  "invalid URL with http:// and .app",
  validURL("http://coding.app") === false
);

process.stdout.write("\n*6·33.\n");
/*
 *6·33. Create a function called 'firstSpace' that takes a string and returns the index of its first space character, or -1 if there is no space.
 */
const firstSpace = (phrase: string): number => phrase.indexOf(" ");

console.log("first space is at index 1", firstSpace("I am Maliha") === 1);
console.log("first space is at index 4", firstSpace("Alex is a student") === 4);
console.log("There are no spaces", firstSpace("alphabet") === -1);

process.stdout.write("\n*6·331.\n");
/*
 *6·331. Create a function called 'firstOfLast' that takes a full name (e.g. "John Smith") and returns the first letter of the last name (e.g. "S"). How can you use the firstSpace() function to make this easier?
 */
const firstOfLast = (fullName: string): string => {
  const startingIndexLastName = firstSpace(fullName) + 1;
  return fullName[startingIndexLastName];
};

console.log(
  "first letter of last name in John Smith is S",
  firstOfLast("John Smith") === "S"
);
console.log(
  "first letter of last name in Maliha Happy is not S",
  firstOfLast("Maliha Happy") !== "S"
);
process.stdout.write("\n*6·332.\n");
/*
 *6·332. Create a function called 'initials' that takes a full name (e.g. "Jane Doe") and returns the initials (e.g. "J.D."). How can you use firstOfLast() to make this easier?
 */
const initials = (fullName: string): string =>
  `${fullName[0]}.${firstOfLast("Maliha Happy")}.`;
console.log(
  "Initials of Maliha Happy is M.H.",
  initials("Maliha Happy") === "M.H."
);
console.log(
  "Initials of Barbie Girl is not B.L.",
  initials("Barbie Girl") !== "B.L."
);

process.stdout.write("\n*6·34.\n");
/*
 *6·34. Create a function called 'capitalize' that takes a word (e.g. "hello") and returns the same word, but with the first letter capitalized (e.g. "Hello").
 */
const capitalize = (word: string): string => {
  return word[0].toUpperCase() + word.slice(1);
};
console.log("hello is capitalized to Hello", capitalize("hello") === "Hello");
console.log("world is capitalized to World", capitalize("world") === "World");

process.stdout.write("\n*6·35.\n");
/*
 *6·35. Create a function called 'rhetorical' that takes a rhetorical question and returns the same question, but ending with a period instead of a question mark.
 */
const rhetorical = (question: string): string => question.slice(0, -1) + ".";

console.log(
  "rhetorical question replace with period at the end",
  rhetorical("Who knew popcorn could taste so good?") ===
    "Who knew popcorn could taste so good."
);

process.stdout.write("\n*6·36.\n");
/*
 *6·36. Create a function called 'couldBeWord' that takes a made up word and returns true if it could be a word, otherwise false. Only made up words containing at least one vowel (a, e, i, o, u) could be words.
 */
const couldBeWord = (word: string): boolean => {
  return (
    word.includes("a") ||
    word.includes("e") ||
    word.includes("i") ||
    word.includes("o") ||
    word.includes("u")
  );
};
console.log("haln could be a word bcuz of a", couldBeWord("haln") === true);
console.log("bept could be a word bcuz of e", couldBeWord("bept") === true);
console.log("cink could be a word bcuz of i", couldBeWord("cink") === true);
console.log("rops could be a word bcuz of o", couldBeWord("rops") === true);
console.log("pulm could be a word bcuz of u", couldBeWord("pulm") === true);
console.log(
  "fylt could not be a word bcuz of y",
  couldBeWord("fylt") === false
);

process.stdout.write("\n*6·37.\n");
/*
 *6·37. Create a function called 'fixSentence' that takes a sentence and returns the fixed version. The first letter should be capitalized, and a period should be added if the original does not end with punctuation (period, question mark, or exclamation mark).
 */
const fixSentence = (sentence: string): string => {
  const hasPunctuation =
    sentence[sentence.length - 1] === "." ||
    sentence[sentence.length - 1] === "?" ||
    sentence[sentence.length - 1] === "!";
  return hasPunctuation ? capitalize(sentence) : capitalize(sentence) + ".";
};

console.log(
  "-Hello world- should add period to -Hello world.-",
  fixSentence("Hello world") === "Hello world."
);
console.log(
  "-my name is Maliha.- should change to -My name is Maliha.- (just capitalizing)",
  fixSentence("my name is Maliha.") === "My name is Maliha."
);
console.log(
  "-what is your name?- should just capitalize to -What is your name?-",
  fixSentence("what is your name?") === "What is your name?"
);
console.log(
  "-hallelujah!- should just capitalize to -Hallelujah!-",
  fixSentence("hallelujah!") === "Hallelujah!"
);

process.stdout.write("\n*6·38.\n");
/*
*6·38. Create a function called 'alternating' that takes a number and returns an alternating string of that many 1s and 0s.

1: 1
2: 10
3: 101
4: 1010
5: 10101
...
*/
const alternating = (num: number): string => {
  // if odd number, remove last character of '10'
  const isEven = num % 2 === 0;
  return isEven ? "10".repeat(num / 2) : "10".repeat((num - 1) / 2) + "1";
};

console.log("1 will give 1", alternating(1) === "1");
console.log("2 will give 10", alternating(2) === "10");
console.log("3 will give 101", alternating(3) === "101");
console.log("4 will give 1010", alternating(4) === "1010");
process.stdout.write("\n*6·4.\n");
/*
 *6·4. Create a function called 'hasDigit' that takes a string and returns true if it contains any digits, otherwise false.
 */

const hasDigit = (str: string): boolean => {
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) return true;
  }
  return false;
};

console.log("hello23 has a digit", hasDigit("hello23") === true);
console.log("bye world does not have a digit", hasDigit("bye world") === false);
process.stdout.write("\n*6·41.\n");
/*
 *6·41. Create a function called 'hasPunctuation' that takes a string and returns true if it contains any punctuation (., !, ?), otherwise false.
 */
// what about initials?
const hasPunctuation = (sentence: string): boolean => {
  // const isPeriodEndOfSentence = sentence.indexOf(".") === sentence.length - 1;
  // const isThereSpaceAfterPeriod =
  //   !isPeriodEndOfSentence && sentence[sentence.indexOf(".") + 1] === " ";
  // // if period, check if theres a space or its at the end, then its punctuation
  // const periodIsPunctuation =
  //   sentence.includes(".") &&
  //   (isPeriodEndOfSentence || isThereSpaceAfterPeriod);
  // return (
  //   periodIsPunctuation || sentence.includes("?") || sentence.includes("!")
  // );
  return (
    sentence.includes(".") || sentence.includes("?") || sentence.includes("!")
  );
};

console.log(
  "Hey there! has punctuation",
  hasPunctuation("Hey there!") === true
);
console.log(
  "Whats going on? has punctuation",
  hasPunctuation("Whats going on?") === true
);
console.log("Im done. has punctuation", hasPunctuation("Im done.") === true);
console.log(
  "I got this has no punctuation",
  hasPunctuation("I got this") === false
);
// console.log(
//   "M.H. is me does not include punctuation",
//   hasPunctuation("M.H. is me") === false
// );
process.stdout.write("\n*6·42.\n");
/*
*6·42. Create a function called 'validPassword' that takes a password and returns true if it is valid, otherwise false.

A valid password must:
- be at least 6 characters long
- contain a digit
- contain a character of punctuation (., !, ?)
*/
const validPassword = (password: string): boolean => {
  return password.length >= 6 && hasDigit(password) && hasPunctuation(password);
};

console.log(
  "maliha88! is a valid password",
  validPassword("maliha88!") === true
);
console.log(
  "mh8! is not a valid password - less than 6",
  validPassword("malu") === false
);
console.log(
  "malihaa! is not a valid password - no number",
  validPassword("malihaa!") === false
);
console.log(
  "maliha88 is not a valid password - no punc",
  validPassword("maliha88") === false
);
process.stdout.write("\n*6·43.\n");
/*
*6·43. Create a function called 'betterPassword' that takes two passwords and returns the better of the two. A password is considered better if it gets more points. Each character in the password counts for 1 point. Including any digits counts for an additional 5 points (flat, not for each digit). Including any punctuation (., !, ?) counts for an additional 10 points (flat, not for each punctuation).

For example, 'p4ssw0rd!' gets 9 + 5 + 10 = 24 points.
*/
const betterPassword = (first: string, second: string): string => {
  const calculatePoints = (password: string): number => {
    return (
      password.length +
      (hasDigit(password) ? 5 : 0) +
      (hasPunctuation(password) ? 10 : 0)
    );
  };
  const firstPWPoints = calculatePoints(first);
  const secondPWPoints = calculatePoints(second);

  if (firstPWPoints > secondPWPoints) return first;
  else if (secondPWPoints > firstPWPoints) return second;
  else return "tied";
};

console.log(
  "p4ssw0rd! should print instead of password",
  betterPassword("p4ssw0rd!", "password") === "p4ssw0rd!"
);
console.log(
  "maliha p4ssw0rd! should print instead of p4ssw0rd!",
  betterPassword("p4ssw0rd!", "maliha p4ssw0rd!") === "maliha p4ssw0rd!"
);
console.log(
  "tied should print for p4ssw0rd! and m4lihaaa!",
  betterPassword("p4ssw0rd!", "m4lihaaa!") === "tied"
);
process.stdout.write("\n");
