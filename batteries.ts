// Numbers
export const isEven = (num: number): boolean => num % 2 === 0;
export const isOdd = (num: number): boolean => !isEven(num);
export const divisibleBy = (first: number, second: number): boolean =>
  first % second === 0;

// Arrays
export const eqArrays = (first: any[], second: any[]): boolean => {
  return (
    first.length === second.length &&
    first.every((_, i) => {
      return Array.isArray(first[i]) && Array.isArray(second[i])
        ? eqArrays(first[i], second[i])
        : first[i] === second[i];
    })
  );
};

export const buildArray = <T>(size: number): T[] => [...Array(size)];
export const append = <T>(value: T, list: T[]): T[] => [...list, value];
export const head = <T>(list: T[]): T => list[0];
export const last = <T>(list: T[]): T => list[list.length - 1];
export const init = <T>(list: T[]): T[] => list.slice(0, -1);
export const tail = <T>(list: T[]): T[] => list.slice(1);
export const isEmpty = <T>(list: T[]): boolean => (!list.length ? true : false);
export const take = <T>(num: number, list: T[]): T[] => list.slice(0, num);
export const drop = <T>(n: number, list: T[]): T[] => list.slice(n);
export const flatten = <T>(matrix: T[][]): T[] =>
  matrix.reduce((acc: T[], x) => [...acc, ...x], []);
export const intersperse = <T>(value: T, list: T[]): T[] =>
  list.reduce((acc: T[], x) => [...acc, x, value], []).slice(0, -1);

// Number arrays
export const sum = (nums: number[]): number =>
  nums.reduce((acc, x) => acc + x, 0);
export const product = (nums: number[]): number =>
  nums.reduce((acc, x) => acc * x, 1);
export const maximum = (nums: number[]): number =>
  nums.reduce((acc, x) => (acc > x ? acc : x));
export const minimum = (nums: number[]): number =>
  nums.reduce((acc, x) => (acc < x ? acc : x));
export const range = (start: number, end: number): number[] => {
  //   const numberArray: number[] = Array(Math.abs(end - start) + 1);
  const numberArray: number[] = [...Array(Math.abs(end - start) + 1)];
  //   return Array.from(numberArray, (_, i) => i + start);
  return numberArray.map((_, i) => i + start);
};

// Objects
type obj = {
  [key: string]: any;
};
export const eqObjects = (obj1: obj, obj2: obj): boolean =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

export const setProp = (key: string, value: any, obj: obj): obj => {
  return { ...obj, [key]: value };
};

export const removeProp = (property: string, obj: obj): obj => {
  return { ...obj, [property]: undefined };
};
