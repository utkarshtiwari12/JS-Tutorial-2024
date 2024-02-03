let fullName = prompt("Enter your full name : ");

let newName = fullName.replaceAll(" ", ""); //removing spaces from the name entered by user.

let userName = "@" + newName + newName.length; //genearting username.

console.log(`Generated username is : ${userName}`);
