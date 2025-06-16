//사용예제 1
function sum(a, b) {
  console.log('function');

  return a + b;
}
const result = sum(1, 2);
console.log(result);

//사용예제 2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}🖐️`;
}
let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));

let lastName2 = '박';
let firstName2 = '철수';
// let fullName2 = `${lastName2} ${firstName2}`;
console.log(fullName(firstName2, lastName2));
