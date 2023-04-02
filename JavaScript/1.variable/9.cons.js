// const = 상수 : 재할당이 불가능

const text = 'hello'
// text = 'hi'
// 불가능

//1. 상수
const max_fruits = 5;

// 2. 재할당 불가능한 상수변수 또는 변수

const apple = {
    id : 'apple',
    color : 'red',
    display : '🍎'
};

console.log(apple);

// apple = {
//     id : 'orange',
//     color : 'red2',
//     display : '🍎2'
// };


console.log(apple);


apple.name = 'Orange';
apple.color='yellow';
apple.display = '🍊';


console.log(apple);

// Apple은 재할당이 불가능 하다 하지만 객체로 HEAP에 주소값만 가지고 있다  그러므로
// Apple 내부의 name, color ,display는 따로 잡혀 있기 때문에 변경이 가능하다
