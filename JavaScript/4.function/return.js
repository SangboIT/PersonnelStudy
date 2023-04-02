// return 을 명시적으로 하지 않으면 자동으로 undefine 이 반환됨

console.log(function(a,b){return;})
// undefine


//위속성을 아래와 같이 사용가능하다
// if 문 아래에서 break 걸때 return 을 사용해서 끊을 수 있다.
function print(num){
    if(num < 0 ) {
        return;
    }
}

