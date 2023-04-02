class Tiger {
        constructor(color){
            this.color = color;
        }
    eat() {
        console.log('먹자');
    }
    sleep(){
        console.log('잔다');
    }
}


// class Dog {
//     constructor(color){
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자');
//     }
//     sleep(){
//         console.log('잔다');
//     }
// }

class Animal{
    constructor(color){
        this.color = color;
    }
    eat() {
        console.log('먹자');
    }
    sleep(){
        console.log('잔다');
    }
}

class Tiger extends Animal {}
const tiger = new tiger('노랑이');
tiger.sleep();
tiger.eat();



//상속은 부모클래스의 기본적인 메소드나 프로퍼티를 물려 받아 사용할 수 있게되며
//추가로 자식 클래스에 자신만의 프로퍼티와 메소드를 추가 하여 사용 할 수 있다.
class Dog extends Animal{
    constructor(color, ownerName){
        super(color);
        this.ownerName = ownerName;
    }
    play(){
        console.log('놀자!');
    }

    //오버라이딩 overriding
    eat(){
        console.log('왈왈');
    }

    //오버라이딩2 , super == 부모 클래스 
    // eat(){
    //     super.eat();
    //     console.log('왈왈');
    // }

}

const dog = new Dog('노랑이');
dog.play();
dog.sleep();
dog.eat();

