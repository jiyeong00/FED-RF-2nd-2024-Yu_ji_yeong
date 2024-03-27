// 자동스크롤 JS - auto_scroll.js

/********************************************** 
    [ 자동스크롤 기능정의 ]
    1. 스크롤바가 없는 상태 또는 스크롤기능을 막어놓은 상태에서 마우스 휠 작동시
    아래와 같이 기능구현됨
    (1) 휠 내림 : 다음페이지로 이동
    (2) 휠 올림 : 이전페이지로 이동

    2. 스크롤바 첫페이지와 끝페이지에서 이동안함

    [ 자동스크롤 이벤트 ]
    -> wheel 이벤트
    -> 마우스 휠 작동시 발생!
    (이전 이벤트명: mousewheel / DOMMouseScroll(파이어폭스))
    (주의 wheel 이벤트는 scroll이벤트와는 다름 마우스의 바퀴를 도릴때 발생함.)
**********************************************/

// 1. 전역변수 설정하기
// 1-1. 페이지 변수
let pgnum = 0;
// 1-2. 휠 상태변수 (true는 막기 / false는 통과)
let stsWheel = false;
// 1-3. .page클래스요소
const elePage = document.querySelectorAll(".page");
// 1-4. 전체페이지수
const totalCnt = elePage.length;
console.log("대상: ", elePage, totalCnt, "개");

// 2. 이벤트 등록하기
// 대상 : window
// 전체페이지 휠 이벤트의 대상은 window다

// 휠이벤트설정
window.addEventListener("wheel", wheelFn, { passive: false });
/* 
    [ window / document / body  세가지는 기본막기 불가 설정되어있음 ]
    -> 이벤트 등록 시 패시브모드가 true로 설정됨
    -> 세팅방법 :
        요소.addEventListener(이벤트명,함수,{passive:true});
        - 기존엔 기본값이 passive:false였는데 현재 true로 변경됨
            (-> true는 기본기능막기 못하게 설정됨)
        - 우리가 false로 변경하여 사용해야함

*/

// 새로고침시 스크롤바 위치 인덱싱 되므로 맨위로 강제이동하기 설정
// scrollTo(X축이동,Y축이동)
setTimeout(() => {
  window.scrollTo(0, 0);
}, 500);

// 3. 함수 구현하기
/*************************************** 
    함수명: wheelFn
    기능 : 마우스 휠 작동시 페이지이동
***************************************/
function wheelFn(e) {
  // 이벤트전달변수(자동)
  // 함수호출확인!
  console.log("휠~~~!");

  // 휠 기본기능을 막고 자동으로 스크롤을 하나씩되게 할 것이다.
  // 밑줄친 건 >> 야! 전체에서 찾을려는 event쓰지말고 함수내 전달변수인 e를 써라! 라는 뜻
  // event.preventDefault(); <<<이거 주석 풀면 밑줄그어짐
  e.preventDefault();
  //-> passive:false설정 해야함 >>> 왜?! window니까!

  // 광휠 금지장치//
  if (stsWheel) return;
  stsWheel = true; //잠금장치
  setTimeout(() => {
    stsWheel = false; //잠금해제
  }, 500);

  // 1. 휠방향 알아내기
  let delta = e.wheelDelta;
  // wheelDalta는 이벤트객체에서 리턴해주는 방향, 이동범위 등의 정보값이다.
  console.log("델타값", delta);
  // 마이너스가 아래방향

  // 2. 방향별 분기하기
  if (delta < 0) {
    // 아랫페이지로 가야하니까 페이지 번호 증가
    pgnum++;
    if (pgnum == totalCnt) {
      pgnum = totalCnt - 1;
    }
  } else {
    pgnum--;
    if (pgnum < 0) {
      pgnum = 0;
    }
  }
  console.log("pgnum: " + pgnum);

  // 5. 페이지 이동하기
  // 이동할 위치 알아내기
  // -> .page요소중 해당 순번페이지 위치
  let pos = elePage[pgnum].offsetTop;
  // offsetTop은 최상단에서부터 거리

  // 5-2. 페이지 스크롤 위치 이동하기
  // scrollTo(0,y츅이동값)
  window.scrollTo(0, pos);

  // 전체 메뉴에 on빼기
  for (let x of gnb) {
    x.parentElement.classList.remove("on");
  }
  // 해당순번에 on넣기
  gnb[pgnum].parentElement.classList.add("on");
  // parentElement는 선택요소의 부모요소다
  // gnb[pgnum]은 해당 순번의 메뉴 a요소
} /////////// wheelFn 함수 ////////////////
///////////////////////////////////////////

/******************************* 
    메뉴 클릭시 이벤트 처리하기 
*******************************/
// 이벤트 대상: .gnb a
const gnb = document.querySelectorAll(".gnb a");
const indic = document.querySelectorAll(".indic a");
console.log("gnb:", gnb, "indic", indic);
// 이벤트 설정하기 + 기능구현하기
gnb.forEach((ele, idx) => {
  ele.onclick = () => {
    // 메뉴변경함수 호출
    chgMenu(idx);

  }; /// click함수 ///
}); //// forEach ///

//[ 메뉴 변경 함수 : .gnb+.indic ]
function chgMenu(idx) {

  // 클릭시 자신의 순번찍기
  console.log("순번:", idx);
  // 1.전역페이지변수에 순번 업데이트
  pgnum = idx;

  // 2.전체 메뉴에 on빼기
  gnb.forEach((ele,seq)=>{
    // ele - a요소
    // seq - 순번
    if(idx===seq){
        // 선택순번과 같은 경우 on 넣기
        ele.parentElement.classList.add("on");
        indic[seq].parentElement.classList.add("on");
    }else{
        ele.parentElement.classList.remove("on");
        indic[seq].parentElement.classList.remove("on");

    }///if문///
  });///for each문///


//   for (let x of gnb) {
//     x.parentElement.classList.remove("on");
//   } /// for of ///

  // 3.해당순번에 on넣기
//   ele.parentElement.classList.add("on");
} ///////////////chgMenu함수/////////////////////
