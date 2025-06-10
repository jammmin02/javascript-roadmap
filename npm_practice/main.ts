import _ from 'lodash';

console.log(_.upperCase('hello world'));

interface User {
  name: string;
  age: number
}

const user: User = {
  name: 'Alice',
  age: 30
};

console.log(`User: ${user.name}, Age: ${user.age}`);