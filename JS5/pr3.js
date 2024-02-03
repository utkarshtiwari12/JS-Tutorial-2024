/* Qs. For a given array of numbers, print the square of each value using the forEach loop. */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const printSquare = (num, id) => {
    console.log(`The Square of ${num} is ${num ** 2}`);
}

arr.forEach(printSquare);
