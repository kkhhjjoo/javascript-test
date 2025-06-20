//1번문제
// let name = "noona's fruit store";
// let fruits = ['banana', 'apple', 'mango'];
// let address = 'Seoul';

// let store = { name, fruits, address };
// console.log(store);

//2번문제
// console.log(`제 가게 이름은 ${name}입니다. 위치는 ${address}에 있습니다.`);

//3번문제
function calculate(obj) {
  let { a, b, c } = obj;
  return a + b + c;
}

calculate({ a: 1, b: 2, c: 3 });

//4번문제
let name = 'noona store';
let fruits = ['banana', 'apple', 'mango'];
let address = {
  country: 'Korea',
  city: 'Seoul',
};

function findStore(obj) {
  let {
    name,
    address: { city },
  } = obj;
  return name == 'noona store' && city == 'Seoul';
}
console.log(findStore({ name, fruits, address }));

//5번문제
function getNumber() {
  let array = [1, 2, 3, 4, 5, 6];
  let [first, , third, forth] = array;

  return { first, third, forth };
}

console.log(getNumber());

//6번문제

function getCalendar(first, ...rest) {
  return (
    first === 'January' &&
    rest[0] === 'Febuary' &&
    rest[1] === 'March' &&
    rest[2] === undefined
  );
}
console.log(getCalendar('January', 'Febuary', 'March'));

//7번문제
function getMinimum() {
  let a = [45, 23, 78];
  let b = [54, 11, 9];
  return Math.min(...a, ...b);
}
console.log(getMinimum());

//8번문제
function sumNumber() {
  const sum = (a, b) => a + b;
  return sum(40, 10);
}

//9번문제
function sumNumber() {
  let addNumber = (a) => (b) => (c) => a + b + c;
  return addNumber(1)(2)(3);
}
console.log(sumNumber());
