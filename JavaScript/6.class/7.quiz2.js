// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름 , 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원 
// 파트타임 직원은 시간당 8000원


class Employee {
    constructor(name,department, workHour){
        this.employee = name;
        this.department = department;
        this.workHour = workHour;
    }

    calculate1() {
        return this.payment = this.workHour * 10000;
    }

    calculate2() {
        return this.payment = this.workHour * 8000;
    }

} 

class GetPayment extends Employee {
    constructor(name,department, workHour , contract){
        super(name,department, workHour);
        this.contract = contract;
    }

    payment2(){
        if (this.contract =='정규직') {
            console.log(super.calculate1());
        }
        else if (this.contract == '계약직') {
            console.log(super.calculate2());
            
        }
    }
} 


dwchoi = new GetPayment('dwchoi','it','8','계약직')

const fruits = ['1','2','3','4']

console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

frutis[6]  ='딸기'
//
console.log(fruits);

latitem = fruits.pop;
fruits.splice(1,1);
console.log(fruits);

