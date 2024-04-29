/* 09. 중간스크롤가로이동 JS - dance.js */

import mFn from "./my_function.js";

// 1. 3번 스테이지에 ul>li구조 이미지 넣기
// 대상 : .slidePg (스티키박스)
const slidePg = mFn.qs(".slidePg");

// 2. 코드변수에 태그 만들어 넣기
let hcode = "<ul>";
for(let i=1; i<=7;i++){
    hcode+=`
    <li>
    <img src="./images/dance/${i}.jpg" alt="댄스 이미지">
    </li>
    `;
}////for문//////

// 3. 코드 출력하기
slidePg.innerHTML = hcode;
