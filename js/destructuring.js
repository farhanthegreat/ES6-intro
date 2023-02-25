const fish = {
    name: 'King Hilsa',
    address: 'chandpur',
    phone: '01985303030',
    price: 3000
}
const {name, phone, price, address} = fish;
// console.log(name);

const getNames = () => ['Hiron', 'Shahena'];
const [baba, ma] = getNames();
console.log(ma, baba);
