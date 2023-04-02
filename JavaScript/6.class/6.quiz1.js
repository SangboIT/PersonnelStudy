// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나 씩 숫자를 증가 할 수 있는 카운터를 만들기
// // Counter Class

// class Counter {
//     constructor(number){
//         if(number >= 0) {
//             this.number = number;
//         }
//         else{
//            console.log('0 미만의 값으로는 초기화 할 수 없습니다.'); 
//         }
//     }

//     get value(){
//         Return 

//     }
//     count(){
//         this.number = this.number + 1;
//         return this.number;
//     }
// }



// const counter  = new Counter(1);

// console.log(counter.count());
// console.log(counter.count());
// console.log(counter.count());




class Counter {
    constructor(number){
        if(isNaN(number) || number < 0) {
            this.#value = 0;
            console.log('0 미만의 값으로는 초기화 할 수 없습니다.'); 
        }
        else{
           this.#value = number;
        }
    }

    get value(){
        return this.#value;
    }
    count(){
        this.#value++;
    }
}



const counter  = new Counter(1);

console.log(counter.count());
console.log(counter.count());
console.log(counter.count());
