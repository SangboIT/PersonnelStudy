//삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인경우 : 거짓인 경우

let fruit = 'apple'
if (fruit ==='apple'){
    console.log('사과');
}else if(fruit==='orange'){
    console.log('오렌지');
}else{
    console.log('기타');
}



fruit ==='apple' 
?console.log('사과') 
:console.log('기타');

let emoji = fruit === 'Apple' ?  '사과'  : '사랑' ;

console.log(emoji);
