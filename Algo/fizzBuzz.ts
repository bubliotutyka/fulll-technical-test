type FizzBuzz = (number | string)[];

export const fizzBuzz = (numbers: number[]): FizzBuzz => {
  let returnFizzBuzz: FizzBuzz = [];

  for (const number of numbers) {
    let returnStr = '';

    if (number % 3 === 0) {
      returnStr += 'Fizz'
    }

    if (number % 5 === 0) {
      returnStr += 'Buzz'
    }

    returnFizzBuzz.push(returnStr || number);
  }

  return returnFizzBuzz;
}
