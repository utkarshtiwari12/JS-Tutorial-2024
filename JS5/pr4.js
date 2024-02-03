/*  Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+. */

const arr = [33, 44, 55, 66, 77, 88, 99, 96, 94];

let toppers = arr.filter((val) => {
    return val > 90;
});

console.log(toppers);
