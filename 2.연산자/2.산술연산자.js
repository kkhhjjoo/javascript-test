//Arithmetic operators(산술연산자)
// + 더하기
// - 빼기
// * 곱하기
// / 나누기
// % 나머지 값
// ** 지수(거듭제곱)

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 3); //es7
console.log(Math.pow(5, 3));

// + 연산자 주의점!
let text = '두개의' + '문자를';
console.log(text);
text = '1' + 1;
console.log(text); //숫자와 문자열을 더하면 문자열로 변환됨
