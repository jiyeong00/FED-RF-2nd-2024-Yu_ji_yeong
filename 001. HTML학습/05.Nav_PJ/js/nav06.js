// 네비게이션 유형6 JS - nav06.js
// 가로네비 서브별 드롭다운 전체창
/////////////////[1] 모듈 불러오기 파트///////////////////////////
// 내 함수 불러오기
import mFn from "./my_function.js";

import setSlide from "./drag_slide.js";

/////////////////[2] 기능구현 파트///////////////////////////
// 1. 배너 리스트 세팅하기
// (1)대상 : .slide
const slideBox = mFn.qs(".slide");
// 슬라이드 코드변수
let slideCode = "";

// (2)슬라이드 li코드 만들기
for (let i = 12; i <= 24; i++) {
  // 끝번호 둘 12,13부터 시작하고 1부터 11까지 나열
  let temp = (i > 13) ? (i - 13) : i;
  // 세번째 슬라이드(이미지 1번)만 클래스 on넣기
  slideCode += `
  <li ${temp==1?'class="on"':''}>
    <img src="images/img_nav06/ban${temp}.png" alt="시코르배너${temp}">
  </li>`;
} ////////////for문.//////////////////

// 코드 반영
slideBox.innerHTML = slideCode;

//////////////////////////////////////////////////////////////////////////////
// 2. 드래그 슬라이드기능 함수 호출하기
setSlide("banbx");
