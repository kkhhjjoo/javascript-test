//퀴즈!
let num = 3;
//num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력하도록
//if
if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
}
//삼항조건 연산자(ternary)
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);
