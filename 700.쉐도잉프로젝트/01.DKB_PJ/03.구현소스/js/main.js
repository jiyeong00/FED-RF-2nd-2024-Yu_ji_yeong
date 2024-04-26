// 도꺠비 PJ 메인 JS - main.js

// 공통 처리함수 불러오기 : 가장 먼저 처리한다.
import setElement from "./common.js";
setElement(); ///함수호출

// 나의 함수 불러오기
import myFn from "./my_function.js";

// 부드러운 스크롤 불러오기
import { startSS, setScrollPos } from "./smoothScroll23.js";

// 모듈로 호출된 JS에서는 다른 외부JS를 import로 호출가능!
// import하려는 파일에서 반드시 함수,변수 등을 export해야함.
import slideFn from "./slide.js";

// 데이터 세팅 불러오기
// import { previewData } from "../data/dkb_data.js";
import * as dkbData from "../data/dkb_data.js";

// GNB메뉴 데이터 불러오기
import gnbData from "../data/gnb_data.js";
// console.log(gnbData);

// 드래그 슬라이드 불러오기
import setSlide from "./drag_slide.js";

///////////////////////////////////////////////////////////////////

// 1. 부드러운 스크롤 호출
startSS();

// console.log('모듈로 메인JS 호출',document.querySelector('.top-menu'));


// 3. Intro동영상 파트 클릭 시 동영상태그 넣기
// 이벤트 대상 = 변경 대상 : .intro-mv-img
const introMv = myFn.qs(".intro-mv-img");

introMv.onclick = () => {
  console.log("인트로 영상");
  // 1. 동영상 넣기
  introMv.innerHTML = `
    <video src="./images/intro_mv.mp4" autoplay="" controls=""></video>
    `;
  // 2. 클래스 off 지우기 (플레이 버튼 안나오게)
  introMv.classList.remove("off");
}; ////////////click이벤트

/***************************************** 
 * [ 코드랩핑이란 ]
 로딩시 바로 실행됨 -> 실행코드를 지역화하고자 할때 함수로 만들고 이를 호출하면 됨. <-불편한 방법

 >>> 익명함수로 만들고 바로 실행하게 하면됨
 방법 : (익명함수)()->바로 실햄됨
 실제코드 : (()=>{코드})
 실제코드 : (function()=>{코드})
 >>>이러한 처리방법을 '코드의 지역화' 또느 '코드랩핑'이라고 부르기도 함.
  -> 목적 : 변수,함수 충돌방지
  *****************************************/

//  2. 미리보기 파트 내용 넣기
// 미리보기 구현 코드 랩핑구역
(() => {
  // 대상 : preview-box
  const previewBox = myFn.qs(".preview-box");
  // 데이터 : dkb_data.js 의 prewviewData배열
  const pData = dkbData.previewData;
  // 데이터원본의 정렬을 내림차순으로 변경!
  // console.log(
  // 배열값인 객체의 idx키값을 기준으로 내림차순 정렬할때 문자형 숫자이므로 Number() 숫자형변환 메서드로 싸서 숫자로써 비교하여 정확한 내림차순이 되도록 한다

  pData.sort((a, b) =>
    Number(a.idx) == Number(b.idx) ? 0 : Number(a.idx) < Number(b.idx) ? 1 : -1
  );
  // );

  // 구조 : ul>li>h3+p
  // 8개만 데이터를 구성하여 넣는다.
  // html코드 변수
  let hcode = `<ul class="fx-box">`;
  // li구성을 hcode변수에 대입연산자로 할당
  for (let i = 0; i < 8; i++) {
    hcode += `
    <li>
        <h3>${pData[i].title}</h3>
        <p>${pData[i].story}</p>
    </li>
    `;
  } ///for문///
  hcode += `</ul>`;

  // 데이터 확인하기
  console.log(hcode);
  // console.log('미리보기 data',pData);

  // 2. 화면출력하기
  previewBox.innerHTML = hcode;
})(); ////////코드 랩핑구역

//  3. 현장포토 파트 내용 넣기
// 현장포토 구현 코드 랩핑구역
(() => {
  // 대상 : live-box
  const liveBox = myFn.qs(".live-box");
  // 데이터 : dkb_data.js 의 prewviewData배열
  const lvData = dkbData.liveData;
  // 구조 : ul>li>figure>img+figcaption
  // 8개만 데이터를 구성하여 넣는다.
  // html코드 변수
  let hcode = `<ul>`;
  // li구성을 hcode변수에 대입연산자로 할당
  //liveData 배열은 총 8개임, 모두 돌기를 세팅하자
  lvData.forEach((v) => {
    hcode += `
      <li>
          <figure>
              <img src="./images/live_photo/${v.imgName}.jpg" alt="${v.title}">
              <figcaption>${v.title}</figcaption>
          </figure>
      </li>
      `;
  });

  hcode += `</ul>`;

  // 데이터 확인하기
  console.log(hcode);
  //   console.log('미리보기 data',lvData);

  // 2. 화면출력하기
  liveBox.innerHTML = hcode;
})(); ////////코드 랩핑구역

//  4. 대표이미지 파트 내용 넣기

// 대표이미지 구현 코드 랩핑구역
(() => {
  // 대상 : live-box
  const posterBox = myFn.qs(".poster-box");
  // 데이터 : dkb_data.js 의 prewviewData배열
  const pData = dkbData.posterData;
  // 구조 : ul>li>figure>img+figcaption
  // 8개만 데이터를 구성하여 넣는다.
  // html코드 변수
  let hcode = `<ul>`;
  // li구성을 hcode변수에 대입연산자로 할당
  //posterData 배열은 총 5개임, 모두 돌기를 세팅하자
  pData.forEach((v) => {
    hcode += `
      <li>
          <figure>
              <img src="./images/poster_img/${v.imgName}.jpg" alt="${v.title}">
              <figcaption>${v.title}</figcaption>
          </figure>
      </li>
      `;
  });

  hcode += `</ul>`;

  // 데이터 확인하기
  console.log(hcode);
  console.log("미리보기 data", pData);

  // 2. 화면출력하기
  posterBox.innerHTML = hcode;
})(); ////////코드 랩핑구역

// 5. 최신동영상파트 데이터 태그 구성하여 화면 출력하기
// 바로 시작하지만 지역함수가되는
(() => {
  // 5-1. 변경대상 : .clip-box
  const clipBox = myFn.qs(".clip-box");

  // 5-2. 생성코드 변수
  let hcode = `<ul class="slide">`;
  // 데이터만큼 순회하여 li코드 만들기
  // 데이타 : dkbData.clipData
  dkbData.clipData.forEach((v) => {
    hcode += `
    <li>
    <div class="clip-mv-box">
      <img
        src="./images/clip_img/${v.idx}.jpg"
        alt="${v.subtit}"
      />
    </div>
    <h4>
      ${v.subtit}
    </h4>
    <h3>${v.title}</h3>
  </li>
    `;
  }); /////////forEach//////////
  hcode += `</ul>`;
  // 5-3. 화면 출력하기
  clipBox.innerHTML = hcode;
})(); /////////코드랩핑구역

// 드래그 슬라이드 태그 구성 후 호출하기
setSlide('banbx');
