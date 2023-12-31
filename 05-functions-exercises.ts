// Practice calling a function with no arguments

process.stdout.write('*5·1. ');
/*
*5·1. Call the following function.
*/
const sayHello = (): void => {
  console.log('Hello, world!');
};

sayHello();

process.stdout.write('\n*5·11.\n');
/*
*5·11. Call the following function.
*/
const sayHelloLonger = (): void => {
  console.log('Hello!');
  console.log('Bonjour!');
  console.log('Guten Tag!');
};

sayHelloLonger();
// Practice creating a function with no arguments

process.stdout.write('\n*5·2. ');
/*
*5·2. Create a function so the following line of code prints the message 'Welcome!' when uncommented.
*/
function sayWelcome(): void {
    console.log("Welcome!");
}

sayWelcome();


// Practice calling a function with one argument

process.stdout.write('\n*5·3. ');
/*
*5·3. Call the following function, providing a language as the argument.
*/
const sayHelloLanguage = (language: string): void => {
  if (language === 'English') {
    console.log('Hello!');
  } else if (language === 'French') {
    console.log('Bonjour!');
  } else if (language === 'German') {
    console.log('Guten Tag!');
  } else {
    console.log('Unknown language');
  }
};

sayHelloLanguage('English');
sayHelloLanguage('French');
// Practice creating a function with one argument

process.stdout.write('\n*5·4.\n');
/*
*5·4. Create a function called 'greet' that takes a name as an argument. Call the function a few times to achieve the same goal as the following lines of code.
*/
// console.log('Hello, Alice!');
// console.log('Hello, Bob!');
// console.log('Hello, Carol!');
// console.log('Hello, Dean!');
function greet(name: string): void {
    console.log(`Hello, ${name}`);
}

greet('Alice');
greet('Bob');
greet('Carol');
greet('Dean');

process.stdout.write('\n*5·41.\n');
/*
*5·41. Create a function called 'isPositive' that takes a number as an argument and returns true if the number is positive (greater than 0), otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/

const isPositive = (num: number): boolean => num > 0;

console.log('10 is positive:', isPositive(10) === true);
console.log('-10 is not positive:', isPositive(-10) === false);

process.stdout.write('\n*5·411.\n');
/*
*5·411. Create a function called 'isNegative' that takes a number as an argument and returns true if the number is negative (less than 0), otherwise false.

The following lines should help test if your function works correctly.
*/
const isNegative = (num: number): boolean => num < 0;

console.log('10 is not negative:', isNegative(10) === false);
console.log('-10 is negative:', isNegative(-10) === true);


process.stdout.write('\n*5·42.\n');
/*
*5·42. Create a function called 'isEven' that takes a number as an argument and returns true if the number is even, otherwise false.

Write some lines of code to test if your function works correctly.
*/
const isEven = (num: number): boolean => num % 2 === 0;

console.log('10 is an even number', isEven(10) === true);
console.log('9 is not an even number', isEven(9) === false);

process.stdout.write('\n*5·421.\n');
/*
*5·421. Create a function called 'isOdd' similar to isEven. Can you use isEven to make this function?
*/
const isOdd = (num: number): boolean => !isEven(num);

console.log('10 is not an odd number', isOdd(10) === false);
console.log('9 is an odd number', isOdd(9) === true);

process.stdout.write('\n*5·43.\n');
/*
*5·43. Create a function called 'isValidCreditCard' that takes a credit card number and returns true if it is valid, otherwise false. Refer to the credit card exercise in conditionals.
*/
const isValidCreditCard = (creditCard: string): boolean => creditCard.length === 5 &&
                                                    creditCard[0] !== "0" &&
                                                    (Number(creditCard) * 3) % 2 === 0 &&
                                                    (Number(creditCard) % 5 === 0 || Number(creditCard) % 7 === 0);

console.log('valid credit card: 35000', isValidCreditCard('35000'))
console.log('invalid credit card: 3500', isValidCreditCard('3500') === false)

process.stdout.write('\n*5·44.\n');
/*
*5·44. Create a function called 'dollarsToCents' that takes a value in dollars and returns the corresponding value in cents.
*/
const dollarsToCents = (dollars: number): number => dollars * 100;
console.log('1 dollar is 100 cents', dollarsToCents(1) === 100);

process.stdout.write('\n*5·45.\n');
/*
*5·45. Create a function called 'fToC' that takes a temperature in Fahrenheit and returns the temperature in Celsius.
*/
const fToC = (temp: number): number => (temp - 32) / 1.8;
console.log('32 degrees fahrenheit is 0 degrees celsius', fToC(32) === 0);

process.stdout.write('\n*5·451.\n');
/*
*5·451. Create a function called 'cToF' that takes a temperature in Celsius and returns the temperature in Fahrenheit.
*/
const cToF = (temp: number): number => (temp * 1.8) + 32;
console.log('0 degrees celsius is 32 degrees fahrenheit', cToF(0) === 32);

// Practice calling a function with multiple arguments

process.stdout.write('\n*5·5.\n');
/*
*5·5. Call the following function, providing a name and a language.
*/
const greetLanguage = (name: string, language: string): void => {
  if (language === 'English') {
    console.log('Hello, ' + name + '!');
  } else if (language === 'French') {
    console.log('Bonjour, ' + name + '!');
  } else if (language === 'German') {
    console.log('Guten Tag, ' + name + '!');
  } else {
    console.log('Unknown language');
  }
};

greetLanguage("Maliha", "English");
greetLanguage("Maliha", "French");

process.stdout.write('\n*5·51.\n');
/*
*5·51. Write some lines of code to test if the following function multiplies 3 numbers together correctly.
*/
const multiplyAll = (a: number, b: number, c: number): number => {
  return a * b * c;
};

console.log('it does multiply 1,2,3 to equal 6', multiplyAll(1,2,3) === 6)
console.log('it does multiply 2,3,4 to equal 24', multiplyAll(2,3,4) === 24)
// Practice creating a function with multiple arguments

process.stdout.write('\n*5·6.\n');
/*
*5·6. Create a function called 'languageGreeting' that takes a name and a language and returns a greeting instead of printing it.

The following lines should help test if your function works correctly. They should print true.
*/
function languageGreeting(name: string, language: string): string {
    switch (language) {
        case "English":
            return `Hello, ${name}!`;
        case "French":
            return `Bonjour, ${name}!`;
        case "German":
            return `Guten Tag, ${name}!`;
        default:
            return "Unknown language";
    }
}

console.log('English greeting works:', languageGreeting('Alice', 'English') === 'Hello, Alice!');
console.log('French greeting works:', languageGreeting('Alice', 'French') === 'Bonjour, Alice!');
console.log('German greeting works:', languageGreeting('Alice', 'German') === 'Guten Tag, Alice!');
console.log('Unknown language works:', languageGreeting('Alice', 'gibberish') === 'Unknown language');


process.stdout.write('\n*5·61.\n');
/*
*5·61. Create a function called 'lovers' that takes two names and returns a string that the first name loves the second name.

The following lines should help test if your function works correctly. They should print true.
*/
const lovers = (first: string, second: string): string => `${first} loves ${second}`;

console.log('Alice loves Bob:', lovers('Alice', 'Bob') === 'Alice loves Bob');
console.log('Bob loves Alice:', lovers('Bob', 'Alice') === 'Bob loves Alice');


process.stdout.write('\n*5·62.\n');
/*
*5·62. Create a function called 'convertTemperature' that takes a number and either 'FtoC' or 'CtoF', and returns the converted temperature. How can you use the functions from *5·45 and *5·451 to make this easier?

The following lines should help test if your function works correctly. They should print true.
*/
const convertTemperature = (temp: number, conversion: 'FtoC' | 'CtoF'): number => (conversion === 'FtoC') ? fToC(temp) : cToF(temp);

console.log('32 F = 0 C:', convertTemperature(32, 'FtoC') === 0);
console.log('0 C = 32 F:', convertTemperature(0, 'CtoF') === 32);


process.stdout.write('\n*5·63.\n');
/*
*5·63. Create a function called 'divisibleBy' that takes two numbers and returns true if the first number is divisible by the second, otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/
function divisibleBy(first: number, second: number): boolean {
    return first % second === 0;
}

console.log('5 is not divisible by 3:', divisibleBy(5, 3) === false);
console.log('1 is divisible by 1:', divisibleBy(1, 1) === true);
console.log('6 is divisible by 2:', divisibleBy(6, 2) === true);
console.log('6 is divisible by 3:', divisibleBy(6, 3) === true);


process.stdout.write('\n*5·64.\n');
/*
*5·64. Create a function called 'bonusTime' that takes a number (salary) and a boolean (bonus). If the second argument is true, return the salary multiplied by 10, otherwise the original salary.

Write some lines of code to test if your function works correctly.
*/
const bonusTime = (salary: number, bonus: boolean): number => (bonus) ? salary * 10 : salary;

console.log('salary with a bonus is multipled by 10', bonusTime(10000, true) === 100000);
console.log('salary with no bonus stays the same', bonusTime(10000, false) === 10000);

process.stdout.write('\n*5·65.\n');
/*
*5·65. Create a function called 'rps' for playing the game Rock, Paper, Scissors. It should take two arguments, which should each be either 'rock', 'paper', or 'scissors'. If the first hand beats the second hand, return 1. If the first hand loses, return -1. In the case of a draw, return 0.

Write some lines of code to test if your function works correctly.
*/
type choices = 'rock' | 'paper' | 'scissors'
function rps(firstHand: choices, secondHand: choices): 1 | 0 | -1 {
    const tie = firstHand === secondHand
    const win = firstHand === 'rock' && secondHand === 'scissors' ||
                firstHand === 'scissors' && secondHand === 'paper' ||
                firstHand === 'paper' && secondHand === 'rock'
    if (tie) return 0
    else if (win) return 1
    else return -1
}
console.log('first player wins', rps('rock', 'scissors') === 1)
console.log('first player loses', rps('paper', 'scissors') === -1)
console.log('its a tie', rps('rock', 'rock') === 0)
process.stdout.write('\n');
