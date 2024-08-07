// 01. 컴포넌트 연습1 JS

// 뷰JS 인스턴스 생성용 함수 : x 는 대상요소
const makeVue = x => new Vue({el:x});

// 1. 제목에 넣을 전역 컴포넌트 만들기
// Vue.component(케팝케이스컴포넌트태그명, {옵션})
// 이것으로 생성함!
// 같은 이름의 태그구성요소에 실제 template 값이 들어감!
Vue.component("tit-comp",{
    template: `
        <strong>
            <span>
                😊Vue JS😜 컴포넌트 : 
            </span>
            쇼핑모~~~올 갤러리 리스트
        </strong>
    `,
}); //// 전역 컴포넌트 1 ////////

// 컴포넌트를 먼저 만들고나서 뷰인스턴스 생성함!

// 뷰인스턴스 생성하기 : 타이틀 컴포넌트
makeVue(".tit");


// 2. 갤러리 리스트에 넣을 전역 컴포넌트 만들기
Vue.component("list-comp",{
    // 2-1. template 옵션 : 태그구성
    // v-bind:속성 디렉티브
    // 변수를 사용할 수 있는 속성재구성해줌!
    template:`
      <div>
        <img v-bind:src="
          './images/' + n + '.jpg'
        " alt="의류아이템">
        <aside>
          <h2>aa</h2>
          <h3>aa</h3>
        </aside>
      </div>
    `, // template ////
    // 2-2. data 옵션 : 컴포넌트 내부 변수셋팅
    // 실행원리 : 컴포넌트가 빌드할때
    // data 속성의 함수를 호출한다!
    // 그래서 함수의 리턴되는 객체값이
    // 컴포넌트 내부에 전달된다!
    // data: function(){}
    data(){
      // 객체 리턴 필수
      return{
        gsrc:`./images/1.jpg`,
        gname:"ㅎㅎㅎ",
      }
    },
}); ///// component ////////////



// 뷰인스턴스 생성하기 : 리스트 컴포넌트
makeVue(".grid");