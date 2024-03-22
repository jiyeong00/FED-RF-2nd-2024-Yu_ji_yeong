// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = 
(ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window,"DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

// 전역변수구역 //////////
/* 
    (참고: JS에서 이름짓는 일반규칙)
    1. 변수/함수 : 캐믈케이스(첫단어소문자 뒷단어 대문자시작)
    2. 생성자함수/클래스 : 파스칼케이스(모든첫글자 대문자)
    3. 상수 : 모든글자 대문자(연결은 언더스코어-스네이크 케이스)
*/

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
    console.log("로딩완료!");
    
    // 이동버튼 대상 : .abtn
    const abtn = qsa('.abtn');
    // 변경대상 : #slide
    const slide = qs('#slide');
    // console.log(abtn,slide);

    // 왼쪾 버튼 처음에 숨기기
    abtn[0].style.display = 'none';
    
    // 슬라이드 순번 전역변수
    let snum=0;

    // 버튼 모두 이벤트 설정하기
    for(let x of abtn){
        x.onclick=goSlide;
    }///for of문///

    
    // // 2. 오른쪽 버튼 클릭시 기능구현
    // abtn[1].onclick = ()=>{

    // };
    // // 3. 왼쪽 버튼 클릭시 기능구현
    // abtn[0].onclick = ()=>{
   
    // };
    
    // 광클 금지변수
    let prot = 0;/* (1-true불허용) */


    /*********************************************** 
     * 함수명 : goSlide
     * 기능 : 슬라이드 이동
     ***********************************************/
    function goSlide(){
        // 광클 금지
        if(prot) return;
        prot=true;
        setTimeout(() => {
            prot=false;
        }, 600);

        // 두번째 버튼인 .ab2인가?
        let isRbtn = this.classList.contains('ab2');
        // [classList객체의 contains) 메서드]
        // -> 해당요소의 특정 클래스인지 여부를 리턴함 
        // 해당클래스가 있으면 true, 없으면 false

        // 함수호출 확인
        console.log('슬라이드 호출', this,isRbtn);


        // 오른쪽 버튼일 경우
        if(isRbtn){
            slide.style.left = '-100%';
            slide.style.transition = '.6s ease-in-out';
            // 이동하는 시간 0.6초 기다림
            setTimeout(() => {
                // 맨 앞 li 맨뒤로 이동
                slide.appendChild(
                    slide.querySelectorAll('li')[0]
                );
                // 슬라이드 left값이 -100%이므로 left값을 0으로 변경
                slide.style.left = '0';
                slide.style.transition = 'none';
            }, 600);

            // 맨 앞li 맨뒤로 이동하기
            // appendChild(요소)
            // -> 원래 뒤에 요소 추가기능임
            // -> 기존있는 요소를 선택 시 맨 뒤로 이동함
            

        }//if문//
        else{
            // 하위 li 수집
            let list = slide.querySelectorAll('li');
            slide.inserBefore(list[list.lenght-1],list[0]);

            slide.style.left='-100%';
            // 같은 left값을 변경하기 때문에 코드 처리구역을 분리하여 준다.
            // 이때 사용되는 메서드는 setTimeout()
            setTimeout(() => {
                slide.style.left='0';
                slide.style.transition = ".6s ease-in-out";
            }, 600);
        }




    }//////////goSlide함수//////////
    ///////////////////////////////
    
} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////
