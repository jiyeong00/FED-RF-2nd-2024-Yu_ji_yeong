// 옷소매 갤러리 JS - main_jquery.js

import mFn from "./my_function.js";

/*********************************************************** 
1. 기능정의: 
    버튼 클릭시 갤러리박스를 잘라서 앞/뒤로 이동함
    1-1. 오른쪽버튼 클릭시 - 맨앞div 맨뒤로 이동
        -> 제이쿼리.append(맨앞자식div)

    1-2. 왼쪽버튼 클릭시 - 맨뒤div 맨앞으로 이동
        -> 제이쿼리.prepend(맨뒤자식div,맨앞자식div)
 ***********************************************************/

// 1. 대상선정
// 1-1 이벤트 대상: .abtn(이동버튼들)
// 1-2 변경대상 :.gbx (갤러리 부모박스)

// 2. 변수 연결하기
// 광클금지 변수(false는 허용, true면 금지)
let stopClick = false;
// 애니시간(잠금시간)
const TIME_SLIDE = 400;

// 3. 이벤트 설정 및 기능 구현하기
$(".abtn").click(function () {
  // 0.광클금지
  if (stopClick) return;
  stopClick = true;
  setTimeout(() => (stopClick = false), TIME_SLIDE);

  // 버튼 자신은 this키워드 사용
  // is()메서드 사용 시 true,false구분가능 <<<< 선택요소의 클래스 등 확인기능
  console.log("나야나", $(this).is(".rb"));

  let gbx = $(".gbx");

  // 1. 오른쪽버튼 분기: 맨앞div 맨뒤이동
  // find()는 하위요소를 모두 찾는다
  // 참고) 직계요소만 선택할때는 children()을 사용

  // first()는 첫번째, last()는 마지막째, eq(n)은 n번째요소 선택

  if ($(this).is(".rb")) {
    gbx.append(gbx.find("div").first());
  }
  // 2. 왼쪽버튼 분기: 맨뒤div 맨앞이동
  else {
    gbx.prepend(gbx.find("div").last());
  }
}); //////////////click
