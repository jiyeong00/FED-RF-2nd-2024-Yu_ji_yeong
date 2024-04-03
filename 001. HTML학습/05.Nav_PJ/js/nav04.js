///nav04 JS


// 네비게이션 유형4 JS - nav04.js
// 세로네비 서브별 드롭다운 세로형

const myFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////
  
  // 1. 구현요구사항:
  // 상위 메뉴 클릭시 하위 메뉴 나타나기
  // 영역을 벗어날때 하위메뉴 닫기
  
  // 2. 대상선정
  // 이벤트 대상: .gnb>ul>li
  const gnbList = myFn.qsa('.gnb>ul>li');
  // 변경 대상: .smenu -> 클릭된 이벤트 대상 하위요소
  const smenu = myFn.qs('.smenu');

  console.log('대상 :',gnbList,smenu);

//   3. 이벤트 설정하기
gnbList.forEach(ele=>{
    myFn.addEvt(ele,'click',showMenu);
});////foreach////

// 4. 함수 만들기
function showMenu(){
    let temp = myFn.qsEl(this,'.smenu');
    // 호출확인
    console.log('호출확인',temp);
}//////////////showMenu함수/////////////////////

