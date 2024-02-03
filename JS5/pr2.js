/* Qs. Create an arrow function that takes a String as an argument &
 returns the number of vowels in the string */

const countVovels = (str) => {
    let count = 0;

    for (let char of str)
    {
        if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
        )
        {
        count++;
        }
    }

    return count;
}

str = "Utkarsh Tiwari";

console.log("The number of vovels in given string is : ",countVovels(str));