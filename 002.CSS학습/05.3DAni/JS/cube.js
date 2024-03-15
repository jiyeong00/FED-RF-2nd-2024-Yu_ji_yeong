/* Rolling Cube 3D Animation js */

/* 
    [ 요구사항 분석 ]
      1. 버튼을 클릭하여 멈춰있던 큐브의 애니메이션 설정 상태를 업데이트하여 작동시킨다.
      2. 이때 버튼은 "돌아!"에서 "멈춰"로 변경시킨다.
      3. 다시 "멈춰"버튼 클릭 시 돌고 있던 큐브의 애니메이션 설정상태를 변경하여 멈추게한다.
        (버튼은 다시 "돌아!"로 변경)
*/

//1. 대상선정
//1-1. 이벤트 대상 : .btngo
const btngo=document.querySelector(".btngo");
//1-2. 변경 대상 : .cube
const cube=document.querySelector(".cube");

// console.log('대상 : ', btngo,cube);

//2.이벤트 속성 세팅
//2-1.대상 : .btngo
// 이벤트속성에 익명함수를 할당하면 이벤트 발생 시 익명함수 내부의 코드가 실행됨
btngo.onclick=function(){
    // 함수호출확인 (this는 버튼 자신)
    console.log('나야!', this);

    // 2. 변경대상:.cube
    // 3. 변경내용: 큐브에 클래스 on을 없으면 넣고 있으면 제거 -> 미리세팅된 애니작동/멈춤
    cube.classList.toggle('on');
    // classList는 요소의 클래스만 전문적으로 다뤄주는 JS내장객체
    // 메서드로 add(), remove(), toggle()이 있다.


    //4. 버튼 글자 변경하기 -> 조건연산자 비?집:놀이동산
        this.innerText=
        this.innerText=="돌아!"?"멈춰!":"돌아!";


};//click이벤트 함수