//원시 데이터 , 객체(object) 복합데이터 {key:value}

// let apple = 
// {
//     id:1234,
//     key: 'secret-key',
//     color: '🎁'
// }

// console.log(apple);
// console.log(apple.id);
// console.log(apple.key);
// console.log(apple.color);



// 값과 참조의 차이 

let a= 1;
let b= a;
b=2 ; 

console.log(a);
console.log(b);
// a는 1 b는 2 
// b 변수에 a 메모리주소가 아닌 실제 원시타입 값을 담은 상태


// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
    name: 'Appl3',
}

let orange= apple;

apple.name = 'Orange'

console.log(orange);

//오랜지 because 오랜지는 apple 의 메모리 주소값을 담고 있기 때문에 apple 이 변하면 함께 변함