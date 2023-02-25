const max = Math.max(12, 23, 43, 44, 55, 66, 77);
// console.log(max);

const numbers = [12, 22, 33, 43, 21];
// console.log(...numbers);
const largest = Math.max(...numbers);
// console.log(largest);

const numbers2 = [33, 44, ...numbers, 656];
numbers.push(55);
numbers2.push(343);
// console.log(numbers);
// console.log(numbers2);
// console.log(Math.max(...numbers));
// console.log(Math.max(...numbers2));
