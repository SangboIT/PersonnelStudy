//스위치 문

let day = 1 
switch(day){
    case  0:
        dayName = '월요일';
        break;
    case  1:
        dayName = '화요일';
        break;
    case  2:
        dayName = '수요일';
        break;
    case  3:
        dayName = '목요일';
        break;
    case  4:
        dayName = '금요일';
        break;
    case  5:
        dayName = '토요일';
        break;
    case  6:
        dayName = '일요일';
        break;        
}

console.log(dayName);


// break 안쓰는 예외 상황
let condition = 'okay'; // okay, good -> 좋음 , bad -> 나쁨!
switch(condition){
    case  'okay':
    case  'good':
        text = '좋음';
        break;
    case  'bad':
        text = '나쁨';
        break;
}
console.log(text);