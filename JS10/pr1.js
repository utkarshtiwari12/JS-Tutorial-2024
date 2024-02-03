/* Qs. You are creating a website for your college. Create a class User with 2 properties, name &email. It also has a method called viewData( ) that allows user to view website data. */

class User{
    constructor(fullName, email) {
        this.fullName = fullName;
        this.email = email;
    }

    viewData()
    {
        console.log(`Name is : ${this.fullName} and Email is : ${this.email}`);
    }
}

// const user1 = new User("utk T", "ut@gmail.com");

// user1.viewData();

/* Qs. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data. */

class Admin extends User{
    constructor(fullName, email) {
        super(fullName, email);
    }

    editData(fullName, email)
    {
        super.fullName = fullName;
        super.email = email;
    }
}

const adm1 = new Admin("SW", "sy@gmail.com");

adm1.viewData();

adm1.editData("us", "su@gmail.com");

adm1.viewData();
