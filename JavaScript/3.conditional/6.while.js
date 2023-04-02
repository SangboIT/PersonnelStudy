let isActive = true;

let i = 0; 

while(isActive){
    if(i===1000){
        break;
    }
    i++;
}



do{
    console.log('우선 식부터 진행해');
    if(i===1000){
        break;
    }
}while(isActive){
    i++;
    console.log('이제 조건 검사해');
}
