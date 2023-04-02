//Immutability  불변성
//함수 내부에서 외부로 부터 주어진 인자의 값을 변경하는 것은 절대 금지
// 삼태변경이 필요한 경우에는, 새로운 상태를(오브젝트 , 값) 만들어서 반환해야 한다.
// 원시값 - 값에 의한 복사
// 객체값 = 참조에 의한 복사 (메모리 주소)
function display(num){
    num = 5; 
    console.log(num);
}


const value = 4;
display(value);
console.log(value);


// 함수내부에서 변수의 메모리 주소에 대한 값을 변경하면 함수 외부에서도  변수의 값이 변경된다. 
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!개빡셈 존나 큰실수 
function displayObj(obj){
    obj.name = 'bob'
    console.log(obj);
}

const ellie = {name:'Ellie'};
displayObj(ellie);
console.log(ellie);
