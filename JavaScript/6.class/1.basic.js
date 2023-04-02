//객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법 // 더이상 쓰이지 않음)
// 2. 클래스 💥


class Fruit(name , emoji){
    //생성자 : new 키워드로 객체를 생성할때 호출되는 함수
    constructor(name,emoji){
        this.name = name; 
        this.emoji = emoji;
    }
    
    display = () => {
        console.log(`${this.name}:${this.emoji}`);
    };
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple','🍕');

// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange','🍖');

console.log(apple);
console.log(apple.name);
console.log(apple.emoji);
console.log(orange);
