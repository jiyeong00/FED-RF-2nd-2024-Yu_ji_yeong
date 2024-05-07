//공통처리 JS

// 나의 함수 불러오기
import mFn from "./my_function.js";

// 공통처리 데이터 불러오기
import comData from "../data/common_data.js";

import slideFn from "./slide.js";

// GNB 메뉴 데이터 불러오기 /////
import gnbData from "../data/gnb_data.js";
// 콤보박스데이터 불러오기 /////
import comboData from "../data/combo_data.js";
// console.log(gnbData);

export default function setElement() {
  // 1. 대상선정 : #top-area, #ban-area, #spart-menu, #footer-area
  const topArea = mFn.qs("#top-area");
  const banArea = mFn.qs("#ban-area");
  const spartMenu = mFn.qs("#spart-menu");
  const footerArea = mFn.qs("#footer-area");

  //   2. 코드넣기
  topArea.innerHTML = comData.topArea;
  banArea.innerHTML = comData.banArea;
  spartMenu.innerHTML = comData.spartMenu;
  footerArea.innerHTML = comData.footerArea;

  //   3. 기능처리함수 호출
  // 구현코드 파트/////////

  //   3-1. gnb메뉴만들기 호출
  makeMenu();

  // 3-2. slideFn 슬라이드 기능함수 호출
  slideFn();

  // 3-3. bindCombo 하단콤보박스 바인딩 함수 호출!
  bindCombo();
} ////////////////////setElement함수

// GNB메뉴코드 만들기 함수
function makeMenu() {
  // GNB메뉴 코드 넣기
  // 대상 .gnb
  // 데이터 : gnbData는 객체니까 배열용 map()메서드 못씀!
  // 그래서 gnbData를 키배열로 변환해서 사용함!
  // 그리고 이 객체의 key는 상위메뉴 이기도 함!
  // Object.keys(객체) -> 해당객체의 속성명(키) 배열생성!

  mFn.qs(".gnb").innerHTML = `
<ul>
${Object.keys(gnbData)
  .map(
    (v) => `
  <li>
    <a href="#">${v}</a>
    ${
      // 서브메뉴 :"없음"이면 빈값
      // 아니면 서브메뉴 출력!
      // gnbData[키] -> 값을 가져옴
      gnbData[v] == "없음"
        ? ""
        : `
      <!-- 서브메뉴 -->
      <div class="smenu">
        <div class="swrap">
          <h2>${v}</h2>
          <ol>
          ${gnbData[v]
            .map(
              (vSub) => `
            <li>
            <a href="#"></a>
          </li>
            `
            )
            .join("")}

          </ol>
        </div>
      </div>
      `
    }
  </li>
  `
  )
  .join("")}
</ul>

`;
} //////////makeMenu///////////////

// 콤보박스 바인딩 함수
function bindCombo() {
  // 1. 대상 선정
  const brandBox = document.querySelector("#brand");
  const corpBox = document.querySelector("#corp");
  console.log("콤보바인딩", brandBox, corpBox);

  // 2. 데이터 바인딩하기
  // 2-1 브랜드 바로가기 콤보박스 : 단순바인딩(option만)
  // 데이터 대상 : comboData.brand

  // 대상요소 내부데이터 초기화
  brandBox.innerHTML = 
  `<option value="init">브랜드 바로가기</option>`+
  comboData.brand
    .map(
      (v, i) => `
  <option value="brand${i+1}">${v}</option>

  `
    )
    .join("");

  // 2-2. 계열사 바로가기 콤보박스
  // -> 복합 바인딩 : optgroup > option
  // 데이터 분석 : 객체로 된 데이터이므로 map()을 쓰려면 객체의 키(속성명)를 배열로 추출하여 사용한다
  // Object.keys(객체) -> 키 배열
  // 객체의 값을 사용할 경우 - 원본객체[키]
  //  데이터 대상: comboData.corps
  const corpData = Object.keys(comboData.corp);
  console.log(corpData);

  // 데이터 만들어서 넣기
  corpBox.innerHTML=corpData.map((v,i)=>`
  <optgroup label="${v}">
  ${
    // 해당 객체의 값은 키배열값과 매칭함
    // ov변수는 객체가 가지는 배열값임
    comboData.corp[v].map((ov,oi)=>`
    <option value="${i+1}-${ov+1}">${ov}</option>
    `).join('')
  }
  </optgroup>
  `).join('');


  // 3. 선택박스 선택변경 시 링크 이동하기
  // 3-1. 브랜드 바로가기 링크 이동하기
  brandBox.addEventListener("change",function(){
    console.log("브랜드 어디?",this.value);

    // 1. 이동할 주소
    let url = comboData.brandLink[this.value];
    // 2. 선택 option값의 주소로 이동하기
    // 새창열기 : window.open(새창주소)
    window.open(url);
  }); //////////////브랜드 change이벤트 함수
} //////////////////bindCombo함수///////////////
