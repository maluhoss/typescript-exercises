// Preliminary

process.stdout.write("*9·01.\n");
/*
*9·01. Before working with objects, we need a way to check if two objects are equal. There is a built-in function 'JSON.stringify' that takes an object and returns it as a string. We can use this to check if two objects are equal by simply comparing their string representations.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

Create a function called 'eqObjects' that takes two objects and returns true if they are equal, otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/
type obj = {
  [key: string]: any;
};
const eqObjects = (obj1: obj, obj2: obj): boolean =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

const obj01 = { name: "Alice", age: 45, pets: ["dog", "dog", "cat"] };

eqObjects(obj01, obj01);

console.log("eqObjects tests");
console.log(eqObjects({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }));
console.log(!eqObjects({ a: 1, b: 2, c: 3 }, { a: 1, b: 4, c: 3 }));
console.log(eqObjects({ name: "Alice", age: 45 }, { name: "Alice", age: 45 }));
console.log(!eqObjects({ name: "Alice", age: 45 }, { name: "Bob", age: 45 }));
console.log(
  eqObjects(
    { name: "Alice", age: 45, pets: ["dog", "dog", "cat"] },
    { name: "Alice", age: 45, pets: ["dog", "dog", "cat"] }
  )
);
console.log(
  !eqObjects(
    { name: "Alice", age: 45, pets: ["dog", "dog", "cat"] },
    { name: "Alice", age: 45, pets: ["dog", "dog"] }
  )
);

// Practice creating objects

process.stdout.write("\n*9·1.\n");
/*
 *9·1. Create and print an object that has your name, favorite color, and favorite food.
 */

console.log({ name: "Me", favColour: "Blue", favFood: "popcorn" });

process.stdout.write("\n*9·11.\n");
/*
 *9·11. Create and print an array of objects of more people's information (as above).
 */
console.log([
  { name: "Me", favColour: "Blue", favFood: "popcorn" },
  { name: "Violet", favColour: "Purple", favFood: "Spicy food" },
  { name: "Jinx", favColour: "Blue", favFood: "Smoky food" },
]);

process.stdout.write("\n*9·12.\n");
/*
 *9·12. Create and print an object using the following keys and values.
 */
const key1: string = "id";
const value1: number = 5;
const key2: string = "name";
const value2: string = "Monitor stand";
const key3: string = "price";
const value3: number = 57.99;
console.log({
  [key1]: value1,
  [key2]: value2,
  [key3]: value3,
});

// Practice accessing values of properties in objects

process.stdout.write("\n*9·2. ");
/*
 *9·2. Print only the age of the following person.
 */
type Person = {
  name: string;
  age: number;
  favoriteColor: string;
};

const alice: Person = { name: "Alice", age: 81, favoriteColor: "red" };
console.log(alice.age); // 81

process.stdout.write("\n*9·21. ");
/*
 *9·21. Print the value at the following key of the following email object.
 */
type Email = {
  from: string;
  to: string;
  subject: string;
  message: string;
};
const key: keyof Email = "subject";
const email: Email = {
  from: "alice@gmail.com",
  to: "bob@gmail.com",
  subject: "Quarterly Report",
  message:
    "Please meet in the meeting room at 10am today to discuss the quarterly report.",
};
console.log(email[key]); // Quarterly Report

// const key = "subject";
// const email = {
//   from: "alice@gmail.com",
//   to: "bob@gmail.com",
//   subject: "Quarterly Report",
//   message:
//     "Please meet in the meeting room at 10am today to discuss the quarterly report.",
// };
// console.log(email[key]);
// console.log(email[key as keyof typeof email]); // Quarterly Report

process.stdout.write("\n*9·22.\n");
/*
*9·22. Create a function called 'speciesOf' that takes a pet (object with name, species, and age) and returns its species.

The following lines should help test if your function works correctly. They should print true.
*/
const speciesOf = (pet: {
  name: string;
  species: string;
  age: number;
}): string => pet.species;

console.log("speciesOf tests");
console.log(
  speciesOf({ name: "Nanimo", species: "bearded dragon", age: 5 }) ===
    "bearded dragon"
);
console.log(speciesOf({ name: "Marvin", species: "cat", age: 8 }) === "cat");
console.log(speciesOf({ name: "Carl", species: "dog", age: 2 }) === "dog");

process.stdout.write("\n*9·23.\n");
/*
 *9·23. Create a function called 'greetPerson' that takes a person (object with first name and last name) and prints a friendly greeting. For example, "Hello, Dennis Ritchie!"
 */
const greetPerson = (person: { firstName: string; lastName: string }): void =>
  console.log(`Hello, ${person.firstName} ${person.lastName}!`);

greetPerson({ firstName: "Peter", lastName: "Parker" });
process.stdout.write("\n*9·24.\n");
/*
*9·24. Create a function called 'howManyCats' that takes a person (object with name, age, and cats) and returns the number of cats.

The following lines should help test if your function works correctly. They should print true.
*/
const howManyCats = (person: {
  name: string;
  age: number;
  cats: string[];
}): number => person.cats.length;

console.log("howManyCats tests");
console.log(
  howManyCats({ name: "Alice", age: 36, cats: ["Cinnamon", "Nutmeg"] }) === 2
);
console.log(
  howManyCats({
    name: "Bob",
    age: 39,
    cats: ["Frank", "Zeus", "Markle", "Percy"],
  }) === 4
);

process.stdout.write("\n*9·25.\n");
/*
*9·25. Create a function called 'enoughSun' that takes a current sunlight value (number from 0 to 10) and a plant (object with name and desired sunlight). It should return true if the amount of current sunlight is at least as high as the plant's desired sunlight.

The following lines should help test if your function works correctly. They should print true.
*/
const enoughSun = (
  sunlightValue: number,
  plant: { name: string; sunlight: number }
): boolean => sunlightValue >= plant.sunlight;

console.log("enoughSun tests");
console.log(enoughSun(6, { name: "blueberries", sunlight: 6 }));
console.log(enoughSun(7, { name: "moss", sunlight: 3 }));
console.log(!enoughSun(2, { name: "moss", sunlight: 3 }));
console.log(!enoughSun(4, { name: "blueberries", sunlight: 6 }));

// Practice updating objects

process.stdout.write("\n*9·3.\n");
/*
*9·3. Create a function called 'resetScore' that takes a game (object with title and highScore) and returns the game with the high score set to 0.

The following lines should help test if your function works correctly. They should print true.
*/
type Game = {
  title: string;
  highScore: number;
};
const resetScore = (game: Game): Game => {
  return { ...game, highScore: 0 };
};

console.log("resetScore tests");
console.log(
  eqObjects(resetScore({ title: "Tetris", highScore: 999999 }), {
    title: "Tetris",
    highScore: 0,
  })
);
console.log(
  eqObjects(resetScore({ title: "Super Mario Bros.", highScore: 1441150 }), {
    title: "Super Mario Bros.",
    highScore: 0,
  })
);

process.stdout.write("\n*9·31.\n");
/*
 *9·31. Create a function called 'fillDefaults' that takes a game (object with title and price) and returns the game with the following properties added to it: platform, set to 'Steam'; players, set to 1; rating, set to 'T'.
 */
type Videogame = {
  [index: string]: string | number;
  title: string;
  price: number;
};

const fillDefaults = (game: Videogame): Videogame => {
  return { ...game, platform: "Steam", players: 1, rating: "T" };
};

console.log("fillDefaults tests");
console.log(
  eqObjects(fillDefaults({ title: "Super Mario Bros", price: 99 }), {
    title: "Super Mario Bros",
    price: 99,
    platform: "Steam",
    players: 1,
    rating: "T",
  })
);
console.log(
  eqObjects(fillDefaults({ title: "Castlevania", price: 110 }), {
    title: "Castlevania",
    price: 110,
    platform: "Steam",
    players: 1,
    rating: "T",
  })
);

process.stdout.write("\n*9·32.\n");
/*
*9·32. Create a function called 'setSalary' that takes a salary (number) and a person (object with name, title, and salary) and returns the person with the salary changed to the given value.

The following lines should help test if your function works correctly. They should print true.
*/
type PersonS = {
  name: string;
  title: string;
  salary: number;
};
const setSalary = (salary: number, person: PersonS): PersonS => {
  return { ...person, salary };
};

console.log("setSalary tests");
console.log(
  eqObjects(
    setSalary(200000, { name: "Alice", title: "CEO", salary: 1000000 }),
    { name: "Alice", title: "CEO", salary: 200000 }
  )
);
console.log(
  eqObjects(
    setSalary(90000, { name: "Bob", title: "Developer", salary: 70000 }),
    { name: "Bob", title: "Developer", salary: 90000 }
  )
);

process.stdout.write("\n*9·33.\n");
/*
 *9·33. Create a function called 'giveBonus' that takes a person (object with name, title, and salary) and returns the person with the salary multiplied by 10.
 */
const giveBonus = (person: PersonS): PersonS => {
  return { ...person, salary: person.salary * 10 };
};

console.log("giveBonus tests");
console.log(
  eqObjects(giveBonus({ name: "Bob", title: "Developer", salary: 7000 }), {
    name: "Bob",
    title: "Developer",
    salary: 70000,
  })
);
console.log(
  eqObjects(giveBonus({ name: "Harry", title: "UX Designer", salary: 90000 }), {
    name: "Harry",
    title: "UX Designer",
    salary: 900000,
  })
);

process.stdout.write("\n*9·34.\n");
/*
 *9·34. Create a function called 'halfOff' that takes a product (object with name and price) and returns the product with the price cut in half.
 */
type Product = {
  name: string;
  price: number;
};
const halfOff = (product: Product): Product => {
  return { ...product, price: product.price / 2 };
};

console.log("halfOff tests");
console.log(
  eqObjects(halfOff({ name: "popcorn", price: 6 }), {
    name: "popcorn",
    price: 3,
  })
);
console.log(
  eqObjects(halfOff({ name: "movie ticket", price: 13 }), {
    name: "movie ticket",
    price: 6.5,
  })
);

process.stdout.write("\n*9·35.\n");
/*
*9·35. Create a function called 'resetDate' that takes an object and sets its 'date' property to the current time. Use Date.now() to get the current time.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now

The following lines should help test if your function works correctly. They should print true.
*/
const resetDate = (item: {
  date: number;
  text: string;
}): { date: number; text: string } => {
  return { ...item, date: Date.now() };
};

console.log("resetDate tests");
const task1 = {
  date: Date.parse("08 Mar 2021 18:00:00 EST"),
  text: "do laundry",
};
const newTask1 = resetDate(task1);
console.log(newTask1.date > task1.date);
const task2 = {
  date: Date.parse("09 Mar 2071 14:00:00 EST"),
  text: "write exercises",
};
const newTask2 = resetDate(task2);
console.log(newTask2.date < task2.date);

process.stdout.write("\n*9·36.\n");
/*
*9·36. Create a function called 'removeProp' that takes a property name (string) and an object, and returns a copy of the object with the given property set to undefined.

The following lines should help test if your function works correctly. They should print true.
*/
const removeProp = (property: string, obj: obj): obj => {
  return { ...obj, [property]: undefined };
};

console.log("removeProp tests");
console.log(
  eqObjects(
    removeProp("password", {
      name: "Tim",
      password: "hunter2",
      title: "Developer",
    }),
    { name: "Tim", title: "Developer", password: undefined }
  )
);
console.log(
  eqObjects(
    removeProp("password", {
      name: "Tim",
      password: "hunter2",
      title: "Developer",
    }),
    { name: "Tim", title: "Developer" }
  )
);

// Practice using object methods: Object.keys(), Object.values(), Object.entries()

process.stdout.write("\n*9·4.\n");
/*
 *9·4. Create a function called 'bigObject' that takes an object and returns true if it has 10 or more keys, otherwise false. The values are irrelevant.
 */
const bigObject = (obj: obj): boolean => Object.keys(obj).length >= 10;

console.log("bigObject tests");
console.log(
  "it has more than 10 keys",
  bigObject({
    firstName: "Naruto",
    lastName: "Uzumaki",
    village: "Konoha",
    title: "Hokage",
    prevSquadLeader: "Kakashi",
    prevSquad: ["Sasuke", "Sakura"],
    food: "Ramen",
    phrase: "Dattebayo",
    powerMove: ["Kage Bunshin No Jutsu", "Rasengan"],
    mentor: "Jiraiya",
    jinchuuriki: true,
  }) === true
);
console.log(
  "it has less than 10 keys",
  bigObject({
    tvShow: "Avatar the Last Airbender",
    character: "Toph",
  }) === false
);

process.stdout.write("\n*9·401.\n");
/*
*9·401. Create a function called 'validFarmAnimal' that takes an object and returns true if it is a valid farm animal, otherwise false. A farm animal object must have these keys to be valid: species, age, owner. Values don't matter.

The following lines should help test if your function works correctly. They should print true.
*/
const validFarmAnimal = (animal: obj): boolean =>
  ["species", "owner", "age"].every((x) => Object.keys(animal).includes(x)); // make sure every single element in array is included in the list of keys for animal

console.log("validFarmAnimal tests");
console.log(validFarmAnimal({ species: "cow", age: 3, owner: "Alice" }));
console.log(validFarmAnimal({ age: 1, species: "chicken", owner: "Bob" }));
console.log(
  validFarmAnimal({
    age: 1,
    species: "chicken",
    owner: "Bob",
    name: "Betty Boo",
  })
);
console.log(
  !validFarmAnimal({ species: "chicken", owner: "Bob", name: "Betty Boo" })
);
console.log(!validFarmAnimal({ age: 1, owner: "Bob", name: "Betty Boo" }));
console.log(
  !validFarmAnimal({ age: 1, species: "chicken", name: "Betty Boo" })
);

process.stdout.write("\n*9·41.\n");
/*
*9·41. Create a function called 'anyDebt' that takes an account (object with multiple bank account balances) and returns true if any of the balances is negative.

The following lines should help test if your function works correctly. They should print true.
*/
const anyDebt = (account: obj): boolean =>
  Object.values(account).some((x) => x < 0);

console.log("anyDebt tests");
console.log(anyDebt({ bank1: -100, bank2: 10000 }));
console.log(anyDebt({ checking: 10000, creditCard: -100 }));
console.log(!anyDebt({ checking: 10000, creditCard: 100 }));

process.stdout.write("\n*9·411.\n");
/*
 *9·411. Create a function called 'totalBalance' that takes an account (as before) and returns the sum of all balances.
 */
const totalBalance = (account: obj): number =>
  Object.values(account).reduce((acc, x) => acc + x, 0);

console.log("totalBalance tests");
console.log(totalBalance({ bank1: -100, bank2: 10000 }) === 9900);
console.log(totalBalance({ checking: 10000, creditCard: -1000 }) === 9000);
console.log(totalBalance({ checking: 10000, creditCard: 100 }) === 10100);

// Bonus exercises

process.stdout.write("\n*9·5.\n");
/*
*9·5. Create a function called 'analyzeWardrobe' that takes a wardrobe object and prints some information to the user.

A wardrobe is an object with the properties:
- owner: object with name (string) and age (number)
- tops: array of colors (strings)
- pants: array of colors (strings)
- shorts: array of colors (strings)
- skirts: array of colors (strings)
- desiredNumberOfOutfits: number

The first thing it should print is a greeting to the owner of the wardrobe (e.g. "Hello, Alice!").

The wardrobe contains a desired number of outfits. The actual number of outfits can be calculated by the equation: (number of tops * number of pants) + (number of tops * number of shorts) + (number of tops * number of skirts). If the actual number of outfits is at least as high as the desired number of outfits, it should print "Your desired number of outfits works!", otherwise "You need to add more clothing for your desired number of outfits to work."
*/
const analyzeWardrobe = (wardrobe: {
  owner: { name: string; age: number };
  tops: string[];
  pants: string[];
  shorts: string[];
  skirts: string[];
  desiredNumberOfOutfits: number;
}): void => {
  const { tops, pants, shorts, skirts, desiredNumberOfOutfits, owner } =
    wardrobe;
  console.log(`Hello, ${owner.name}`);
  const actualNumOfOutfits: number =
    tops.length * pants.length +
    tops.length * shorts.length +
    tops.length * skirts.length;
  const result: string =
    actualNumOfOutfits >= desiredNumberOfOutfits
      ? "Your desired number of outfits work"
      : "You need to add more clothing for your desired number of outfits to work";
  console.log(result);
};

console.log("analyzeWardrobe tests");
analyzeWardrobe({
  owner: {
    name: "Alice",
    age: 22,
  },
  tops: ["blue", "white", "cream"],
  pants: ["navy", "blue"],
  shorts: ["navy"],
  skirts: ["navy", "blue"],
  desiredNumberOfOutfits: 15,
}); // works

analyzeWardrobe({
  owner: {
    name: "Alice",
    age: 22,
  },
  tops: ["blue", "white", "cream"],
  pants: ["navy", "blue"],
  shorts: ["navy"],
  skirts: ["navy", "blue"],
  desiredNumberOfOutfits: 16,
}); // not enough clothing

process.stdout.write("\n*9·51.\n");
/*
*9·51. Create a function called 'makeAnimal' that takes a name (string) and returns a randomly generated farm animal.

The animal should have the properties:
- species: string of either 'horse', 'cow', 'chicken', or 'lamb'
- age: number between 0-10 (years)
- name: the given name
*/
const farmAnimals: string[] = ["horse", "cow", "chicken", "lamb"];
const makeAnimal = (
  name: string
): { species: string; age: number; name: string } => {
  const randomIndexForSpecies = Math.floor(Math.random() * farmAnimals.length);
  return {
    name,
    species: farmAnimals[randomIndexForSpecies],
    age: Math.floor(Math.random() * 11),
  };
};

console.log("makeAnimal tests");
const Bessie = makeAnimal("Bessie");
console.log(
  Bessie.name === "Bessie" &&
    Bessie.age >= 0 &&
    Bessie.age <= 10 &&
    farmAnimals.includes(Bessie.species)
);
const Henry = makeAnimal("Henry");
console.log(
  Henry.name === "Henry" &&
    Henry.age >= 0 &&
    Henry.age <= 10 &&
    farmAnimals.includes(Henry.species)
);

process.stdout.write("\n");
