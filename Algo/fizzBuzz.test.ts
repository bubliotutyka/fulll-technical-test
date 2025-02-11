import {fizzBuzz} from "./fizzBuzz";

describe('fizzBuzz', () => {
  it('should return an array of numbers and strings', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const result = fizzBuzz(numbers);
    expect(result).toEqual([1, 2, 'Fizz', 4, 'Buzz', "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
  });
});
