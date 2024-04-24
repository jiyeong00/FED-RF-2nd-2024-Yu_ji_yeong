// 08.재귀호출 - call_myself.js

import mFn from './my_function.js';

// 초기세팅하기
// 대상 : .gbox
const gbox=mFn.qs(".gbox");

// 코드변수
let hcode="<ul>";

// for문으로 코드만들기 :ul>li>img
for (let i = 1; i <= 7; i++) {
    hcode+=`
    <li>
    <img src="./images/auto_scroll/m${i}.jpg" alt="갤러리이미지">
    </li>
    `;
    
}

hcode+="</ul>";

// 대상의 코드넣기
gbox.innerHTML = hcode;
// 움직일 대상 : .gbox ul
let target=mFn.qsEl(gbox,'ul');
// 기준값 업데이트 함수
const updateCriteria=()=> mFn.qsaEl(target,"li")[0].offsetWidth;
// 기준값 (대상 li의 가로크기값)
// 맨앞 li는 새로 구해와야함(계속 변경됨)
let criteria=updateCriteria();
// 리사이즈시 업데이트
mFn.addEvt(window,"resize",()=>{
    updateCriteria();
    console.log("기준값업데이트 : ",criteria);
});

console.log("기준값 : ",criteria);

// 현재 translate 값
let currVal=0;

// 갤러리 박스를 왼쪽으로 계속 움직이게하는 재귀호출 함수 만들기
function moveGallery(){
    // 현재값 1씩 감소

    target.style.translate=--currVal+"px";

    // 하나 크기만큼 나가면 처리 Math.floor <<소수점아래 내림
    // 기준값을 마이너스로 하고 소수점 아래는 버림
    if(currVal==Math.floor(-criteria)){
        // 1. 맨앞 li 맨뒤로 이동 > appendChild(맨앞요소)
        target.appendChild(mFn.qsaEl(target,"li")[0]);
        // 2. translate값 초기화
        target.style.translate="0px";
        // 3. currVal값 초기화
        currVal=0;
    }

    // 재귀호출(타임아웃으로 호출함)
    // stopSts변수값이 false일때만 실행하기
    if(!stopSts) {
        setTimeout(moveGallery, 10);
    }
}////////moveGallery///////////////

// 대상에 마우스 오버시 멈추고 아웃시 다시 흘러가게 하기
// 대상 : gbox -> gbox변수
// 멈춤 상태변수
let stopSts=false;

// 1.멈추기
mFn.addEvt(gbox,"mouseenter",()=>{
    stopSts=true;
});/////////////////////////mouseenter
// 2. 다시흘러가기
mFn.addEvt(gbox,"mouseleave",()=>{
    stopSts=false;
    // 재귀함수호출
    moveGallery();

});/////////////////////////mouseleave

setTimeout(moveGallery, 2000);
