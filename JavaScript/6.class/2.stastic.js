

class Fruit{
    //생성자 : new 키워드로 객체를 생성할때 호출되는 함수
    constructor(name,emoji){
        this.name = name; 
        this.emoji = emoji;
    }
    
    //클래스 레벨의 메서드
    static makeRandomFruit() {
        //클래스 레벨의 메서드에서는 THIS를 참조 할 수 없음
        return new Fruit('BANAN','🍌');
    }


    //인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}:${this.emoji}`);
    };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);


// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple','🍕');

// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange','🍖');

console.log(apple);
console.log(apple.name);
console.log(apple.emoji); 
console.log(orange);
apple.display;