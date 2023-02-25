const add = (first, second) => first + second;

//no parameter arrow function
const getPie = () => 3.14;

const getAll = (a, b, c, d, e, f, g) => a + b + c + d + e + f + g;

// console.log(getPie());

// one parameter arrow function 
const doubleIt = (num) => num * 2;

//one parameter simplified arrow function
const fiveTimes = num => num * 5;

//multi line arrow function
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const thirdSum = z + x;
    const multipliedResult = firstSum * secondSum * thirdSum;
    const result = multipliedResult / 3;
    return result;
}