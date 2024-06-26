// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////

  /************************************************************************************ 
   1. 구현 요구사항 :
     - 글자를 박스에 넣고 하나씩 일어나면서 등장 (.style3) 
************************************************************************************/
// 2. 대상선정 : .stage-letters
const stage=domFn.qs('.stage-letters');
console.log('대상선정 ',stage);

// 3. 글자데이터 변수 할당
const myText = '나는 점심에 돈가스가 먹고싶어';

// 4. 데이터 글자 한글자씩 태그로 싸기
// for of 사용

// html태그 변수
let hcode='';
// 지연시간 계산을 위한 순번변수
let seqNum=0;

for(let x of myText){
    if(x===' '){
        hcode+='&nbsp;&nbsp;';
    }else{ // 글자일 경우 span태그 랩핑처리
        hcode += `
        <span
        style="transition-delay: ${seqNum*0.2}s"
        >
        ${x}</span>`;
    }//if문//

    // !!중요!! 지연시간에 곱해질 순번 증가하기
    seqNum++;
}///////////forof문////////////

// 5. 스테이지에 코드 출력하기
stage.innerHTML=hcode;

// 6.일정시간 뒤 등장클래스 .on넣기
setTimeout(() => {
    stage.classList.add('on');
}, 2000);

