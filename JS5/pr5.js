/* Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
    Use the reduce method to calculate sum of all numbers in the array.
    Use the reduce method to calculate product of all numbers in the array.
*/

let num = prompt("Enter a Number : ");

let arr = [];

for (let i = 0; i < num; i++)
{
    arr[i] = i + 1;
}

console.log(arr);

let sum = arr.reduce((prv, next) => {
    return prv + next;
});

console.log(`Sum of numbers is : ${sum}`);


let prod = arr.reduce((prv, next) => {
    return prv * next;
});

console.log(`Product of numbers is : ${prod}`);