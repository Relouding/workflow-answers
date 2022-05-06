interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  isAdmin: boolean;
}

function createUser (firstName: User, lastName: User, age: User, isAdmin: boolean = false) {
    return {
      id: 0,
      firstName,
      lastName,
      age,
      isAdmin,
    };
  }
  
const newUser = createUser({firstName: "Ola", lastName: "Nordmann", age: 18});
const newAdmin = createUser({firstName: "Kari", lastName: "Nordmann", age: 36, isAdmin: true});

console.log(newUser);
console.log(newAdmin);