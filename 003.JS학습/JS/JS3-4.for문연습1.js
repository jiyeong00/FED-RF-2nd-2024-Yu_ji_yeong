//JS3-4.for문연습1 JS

/************************************************************************************ 
 
    [프로그램 요구사항]
    [1] 미니언즈 넣기
      1. 미니언즈 버튼을 클릭하면 파란박스에 미니언즈 이미지가 추가되어 들어간다.
      2. 이때 미니언즈 버튼마다 한번에 들어가는 개수가 정해져있다.(1개,5개 10개)
      ((대상선정))
        1) 이벤트 대상 : .mini(click이벤트) 
        2) 변경 대상 : .mini-space

    ----------------------------------------------------------------------------
    
    [2] 미니언즈 개수 표시하기
      1. 미니언즈를 넣을 때 실시간 반영 개수를 표시한다.
      2. 이때 미니언즈 이미지가 3개씩 있으므로 3의 배수로 표시해준다. 
      ((대상선정))
        1) 이벤트 대상 : .mini(click이벤트) 
        2) 변경 대상 : .stxt span

    ----------------------------------------------------------------------------
    
    [3] 파란박스 리셋하기
      1. 리셋버튼을 클릭하면 파란박스의 미니언즈 이미지가 모두 삭제된다.
      2. 이때 미니언즈 개수도 0으로 초기화한다.
      ((대상선정))
        1) 이벤트 대상 : .rbtn (click이벤트) 
        2) 변경 대상 : .mini-space


    
        >>const를 쓰는 이유 const는 let과 비슷하나 변경 필요가 없을 때 사용
        (그래서 let보다 많이 사용함)

************************************************************************************/

//1. 대상선정
//1-1. 이벤트 대상
// 1) 미니언즈버튼 3개
const mini=document.querySelectorAll('.mini');
// 2) 리셋버튼
const rbtn=document.querySelector('.rbtn');

//1-2. 변경 대상
// 1) 파란박스(미니언즈 내부박스)
const Bcase=document.querySelector('.mini-space');
// 2) 개수출력박스
const stxt=document.querySelector('.stxt span');

// console.log('대상:',mini,rbtn,Bcase,stxt);

//2. 이벤트 속성 세팅하기
// 이벤트 대상에게 click이벤트와 함수를 연결한다.
// 1) 미니언즈 넣기 : 버튼이 3개 임으로 for문으로 세팅한다.
// 0부터 시작하여 미니언즈 개수보다 작을때까지 반복한다.
//for문에 lenght쓰는 건 좋지않음 계속 다시구해오니까 밖에서 length를 아예 변수로 끌어와서 변수를 넣는게 좋음
for(let i=0; i<mini.length; i++){
    //대상 : mini.item(순번) 또는 mini[순번]
    mini[i].onclick= insertMini;
    //이벤트리스너를 사용한 방법
    // mini[i].addEventListener('click', insertMini);

    // console.log(`
    // for문 내부에 전달된 i변수: ${i}
    // \n 
    // 순서대로 미니언즈 대상확인: ${mini.item(i)}
    // `);

}////////for문


// 3. 기능구현 함수 만들기
/******************************************************** 
 함수명 : insertMini
 기능 : 미니언즈 이미지를 박스 안에 추가한다.
********************************************************/
function insertMini(){
    // 0. 이미지에 세팅된 'data-num' 속성값 가져오기
    //getAttribute(속성명) -> 속성값 읽어오기 내장함수
    //setAttribute(속성명, 값) -> 속성값 넣기 내장함수
    let num=this.getAttribute('data-num');

    // 1. 함수호출 확인
    console.log('미니언즈 두루와',num);

    //2. 변경대상 설정 : .mini-space -> Bcase변수
    //3. 변경내용 적용하기 : html넣기
    //+= 대입연산자로 기존값에 더함
    //for문으로 전달될 개수 만큼 반복하여 이미지 넣는다.
    for(let i=0; i<num; i++){
        Bcase.innerHTML += 
        `
        <img src="./images/Minions.png" alt="미니언즈">
        `;
    }////for문
}////////insertMini() 함수
///////////////////////////////////////////////////////