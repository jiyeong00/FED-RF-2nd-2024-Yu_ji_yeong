// JS6-1.Date객체와 Math객체

// 나의함수 불러오기
import mFn from './my_function.js';

// 1. 요구사항 : 화면에 시간을 찍으시오
// 2. 대상 : .tt
const tt=mFn.qsa('.tt');

// 3. 날짜 / 시간찍기

// 4. 시간날짜 함수 함수 최소 호출
    showTime();
// 시간날짜 함수/////
function showTime(){
    // 1. 날짜 내장객체로 날짜객체인스턴스 생성하기
    const today= new Date();

    // 월을 부르는 이름과 매칭하기
    let monthName = ["하하월","파파월","카카월","토토월","코코푸월","싹스월","칸단월","차즈민월","라우딘월","차호호월","테테월","상그리아월"];

    // 요일을 부르는 이름과 매칭하기
    let dayName = ["일","월","화","수","목","금","토"];

    // 2. 년도/월/일 찍기
    //getFullYear() << 전체 년도
    tt[0].innerText=today.getFullYear();
    // tt[1].innerText=monthName[today.getMonth()];
    tt[1].innerText=today.getMonth()+1;
    tt[2].innerText=today.getDate();
    tt[3].innerText=dayName[today.getDay()];
    // 월과 요일은 배열순번으로 리턴된다
    // >>>> 나라마다 월과 요일을 부르는 이름이 다르기 때문에
    // >>>> 만약 월을 숫자로 출력하려면 1만 더하면 된다

}/////////////showTime함수///////////