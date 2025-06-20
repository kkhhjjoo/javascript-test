let names = [
  'Steven Paul Jobs',
  'Bill Gates',
  'Mark Elliot Zuckerberg',
  'Elon Musk',
  'Jeff Bezos',
  'Warren Edward Buffett',
  'Larry Page',
  'Larry Ellison',
  'Tim Cook',
  'Lloyd Blankfein',
];

//map문제
//1번
let upperCaseName = names.map((item) => item.toUpperCase());
console.log(upperCaseName);
//2번
let firstNames = names.map((item) => item.split(' ')[0]);
console.log(firstNames);
//3번
let initialOnly = names.map((item) => {
  let splitName = item.split(' ');
  let initial = '';
  splitName.forEach((nameItem) => (initial += nameItem[0]));
  return initial;
});
console.log(initialOnly);

//filter문제
//1번
let includeA = names.filter((item) => item.includes('a'));
console.log(includeA);

//2번
let doubleLetter = names.filter((item) => {
  let splitName = item.split('');
  return splitName.some((letter, index) => letter == splitName[index + 1]);
});
console.log(doubleLetter);

//some문제
//1번
console.log(names.some((item) => item.length >= 20));

//2번
let includeP = names.some((item) => {
  let splitName = item.split(' ');
  splitName.pop();
  return splitName.some((eachName) =>
    eachName.toLocaleLowerCase().includes('p')
  );
});
console.log(includeP);

//every문제
//1번
console.log(names.every((item) => item.length >= 20));
//2번
console.log(names.every((item) => item.includes('a')));

//find문제
//1번
console.log(names.find((item) => item.length >= 20));
//2번
console.log(names.find((item) => item.split(' ').length >= 3));

//findIndex 문제
//1번
console.log(names.findIndex((item) => item.length >= 20));
//2번
console.log(names.findIndex((item) => item.split(' ').length >= 3));
