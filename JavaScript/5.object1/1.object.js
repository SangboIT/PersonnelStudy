// Object literal { key : value }
// new Object() 
// object.create();
// key - 문자, 숫자 , 문자열, 심볼 
// value - 원시값 , 객체 (함수)

let apple = {
    name: 'apple',
    'hello-bye' : '😀', // 변수명에 string 형태 사용 가능 이경우 - 같은 특수문자도 사용 가능
    0:1,
    ['hello-bye'] : '😒',
};


//속성 , 데이터에 접근 법

apple.name; // = 마침표 표기법 dot notation
console.log(apple['hello-bye']); // 대괄호 표기법 bracket notation

//속성 추가 
apple.emoji = '🤑';

console.log(apple.emoji);
console.log(apple[emoji]);


//속성 삭제
delete apple.emoji;
console.log(apple.emoji);










