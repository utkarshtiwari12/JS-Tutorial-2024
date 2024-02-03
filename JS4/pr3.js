let Companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log(`Original List : ${Companies}`);

let firstCompany = Companies.shift(); // removing first index's value.

console.log(`First index's removed value : ${firstCompany}`);

console.log(`List after removing first company : ${Companies}`);

//  Microsoft,Uber,Google,IBM,Netflix.

Companies.splice(1, 1, "Ola"); // updating Uber with Ola.

console.log(`List after updating Uber with Ola : ${Companies}`);

// Microsoft,Ola,Google,IBM,Netflix.

Companies.push("Amazon"); // adding amazon at end of the list.

console.log(`List after Adding Amazon at the end : ${Companies}`);

// Microsoft,Ola,Google,IBM,Netflix,Amazon.