interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  isAdmin: boolean;
}

function createUser(
  firstName: string,
  lastName: string,
  age: number,
  isAdmin: boolean = false
): User {
  return {
    id: 0,
    firstName,
    lastName,
    age,
    isAdmin,
  };
}

const newUser = createUser("Ola", "Nordmann", 18);
const newAdmin = createUser("Kari", "Nordmann", 36, true);

console.log(newUser);
console.log(newAdmin);
