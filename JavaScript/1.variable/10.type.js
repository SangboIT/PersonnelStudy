// typeof : 데이터 타입 확인
// 값을 타입 문자열로 반환


let variable = '';

console.log(typeof variable);

variable = 123;

console.log(typeof variable);

// 인터프리터 언어는 동적인 경우가 많으면 Javascript 역시 동적 이다.

// 그래서 실행 하는 과정중에 변수의 값에 따라 타입이 변한다 (Weekly Type)

variable = {};

console.log(typeof variable);

variable = function(){};

console.log(typeof variable);


variable = Symbol;

console.log(typeof variable);


variable = {
    id : 'orange',
    color : 'red2',
    display : '🍎2'
};


