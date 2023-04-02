//퀴즈!

let num =  125;

//num의 숫자가 짝수이면 엄지척 , 홀수라면 엄지다운 출력하도록
// if 문을 이용해서
// Ternary Operator 이용해서 ㄱㄱ

if (num%2 === 0) {
    console.log('엄지척');
}else{
    console.log('엄지다운');
};

num%2 === 0 ? console.log('엄지척') : console.log('엄지다운');

// 단순화 하기(리팩토링)
let answer = num%2 === 0 ? '엄지척' : '엄지다운';
console.log(answer);


