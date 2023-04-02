//주어신 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야함
// 5, 숫회하는 숫자를 다출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max,action)

/*
const print = (a) => a;
const doubleprint = (a) => a*2;

function iterate(max,action){
    for(let i=0; i<max; i++){
        let result = action(i);
        console.log( result);
    }
};

iterate(5,doubleprint);
iterate(5,print);
*/

const print = (a) => {console.log(a);};
const doubleprint = (a) => {console.log(2*a);};

function iterate(max,action){
    for(let i=0; i<max; i++){
        action(i);
    }
};

iterate(5,doubleprint);
iterate(5,print);

//iterate(5,(print) => console.log(print));

//reference
setTimeout

