//  함수 선언문 Function Name(){}
//  함수 표현식 const name = fucntion(){}
//  함수 역시 객체 이기 때문에 변수에 담을수 있다

// 무명함수(함수명이 없는 함수)
let add = function(a,b){
    return a+b;
};

console.log(add(1,2));

// 함수 add 내부 조건식 선언
add = (a,b) => {
    return a+b;
};

// -> 아래와 같이 생략도 가능
add = (a,b) => a+b;

console.log(add(1,2));

//생성자 함수 const object = new function(); 로 선언도 가능

// IIFE (Immediately - Invoked Function Expression)
// run 함수 선언 이후 실행문이 없음에도 아래와 같이 표기 하면 바로 호출 가능하다
(function run(){console.log('바로바로');})();



