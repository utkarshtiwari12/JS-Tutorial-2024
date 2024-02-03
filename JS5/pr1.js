
/* Qs. Create a function using the “function” keyword that takes a String as an argument &
 returns the number of vowels in the string */

function countVovels(str)
{
    let count = 0;

    for (let char of str)
    {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') 
        {
            count++;
        }
    }

    console.log("The number of vovels in given string is : ", count);
}

let fullName = "Utkarsh Tiwari";

countVovels(fullName);