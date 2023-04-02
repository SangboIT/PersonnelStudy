// const apple={
//     name: 'apple',
//     display: function(){
//         console.log(`${this.name}:😚`);
//     }
// }

// const orange={
//     name: 'orange',
//     display: function(){
//         console.log(`${this.name}:🍊`);
//     }
// }

//생성자 함수
//함수 첫 문자 대문자여야 됨
function Fruit(name , emoji){
    this.name = name; 
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}:${this.emoji}`);
    }
    return this;
}

const apple = new Fruit('apple','🍕');
const orange = new Fruit('orange','🍖');



console.log(apple);
console.log(apple.name);
console.log(apple.emoji);
console.log(orange);
