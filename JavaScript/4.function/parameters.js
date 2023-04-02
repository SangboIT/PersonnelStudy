// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수의 기본값 Default Parameters 
function add(a,b){
    console.log(a);
    console.log(b);
    console.log(arguments);// 전달된 인자에 대한 설명을 볼수 있다 
    console.log(arguments[0]);// 전달된 인자에 대한 설명을 볼수 있다 
    console.log(arguments[1]);// 전달된 인자에 대한 설명을 볼수 있다 
    return a+b;
}

add(1,2,3);


//Rest 매개변수 Rest Parameters 
// 인자의 개수가 정해저 있지않다면 아래와같이 받아올 수 있다.
function sum(a,b, ...numbers){
    console.log(numbers);
}

sum(1,2,3,4,5,6,7,8);
