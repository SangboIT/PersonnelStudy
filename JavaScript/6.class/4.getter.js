//접근자 프로퍼티(Accessor Property)

class Student {
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // 접근자 프로퍼티 : 함수를 프로퍼티처럼 접근 할수 있게 해줌
    get fullName() {
        return `${this.lastName} ${this.firstName} `;
    }
    // 할당 을 하게 되면 set 이 호출 
    set fullName() {
        return `${this.lastName} ${this.firstName} `;
    }
}

const student = new Student('수지','김');

student.firstName = '안나'
student.fullName = '김철수'; // set 함수가 호출 됨 
console.log (student.firstName);
console.log (student.fullName); // get 함수가 호출됨
