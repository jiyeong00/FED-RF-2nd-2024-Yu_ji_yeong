// 구체적인 데이터 구성처리를 위한 JS

// 내용 메시지를 구성하는 함수
// function makeMessage(name,age){
    //     return `
    //         나의 이름은 ${name}입니다.
    //         나이는 ${age}살 입니다.
    //         반갑습니다.^^<br><br>
    //     `;
// }/////////makeMessage함수//////////


// 내보내기
// export default makeMessage;


// 2. 선언적 함수를 만들고 함수 앞에서 export default하기
//  ->> 선언적함수 형태가 그대로 유지되어야함. >> 이름은 중요하지 않음
// 내용 메시지를 구성하는 함수
// export default function makeMessage(name,age){
//     return `
//         나의 이름은 ${name}입니다.
//         나이는 ${age}살 입니다.
//         반갑습니다.^^<br><br>
//     `;
// }/////////makeMessage함수//////////

// 3. 익명 함수를 만들고 함수 앞에서 export default하기
//  ->> 내보내기할때 함수명이 중요치 않으므로 익명함수로 내보내기를 해도 무관하다
// 내용 메시지를 구성하는 함수
// export default function (name,age){
//     return `
//         나의 이름은 ${name}입니다.
//         나이는 ${age}살 입니다.
//         반갑습니다.^^<br><br>
//     `;
// }/////////makeMessage함수//////////

// >>>>>>>>>>> 3번 줄여쓰면
// 화살표 함수로 내보내기를 해도 무관함.
// 이때 return 키워드 생략이 가능할 경우 이를 생략한다.
export default (name,age)=>
     `
        나의 이름은 ${name}입니다.
        나이는 ${age}살 입니다.
        반갑습니다.^^<br><br>
    `;