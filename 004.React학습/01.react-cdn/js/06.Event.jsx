// 06.Event : 리액트 이벤트

// 나의 함수 불러오기
import mFn from "./my_function";
console.log(mFn);

/************************************************************* 
    [ 리액트 이벤트 ]
    1. 일반 HTML DOM 이벤트와 마찬가지로 사용자이벤트 사용가능함
    2. 이벤트 종류: click, change, mouseover 등 일반이벤트
    3. 이벤트 표기법: 캐믈케이스 - 첫글자소문자 단어마다 대문자
    예) onclick -> onClick
    4. 이벤트 핸들러 : 중괄호 안에 작성(중괄호는 JSX표현식영역)
    예) onclick="getIt()" => onClick={getIt}
*************************************************************/

////////////// 전체 이벤트 적용할 컴포넌트 구성하기
function EventShow() {
  // 컴포넌트 리턴 코드 위에서 이벤트처리를 위한 함수를 만들어서 사용할 수 있다.
  // -> 지역함수로 사용되는 것임

  // 오버시 이벤트 한번만 실행되게 상태변수 만들기
  let onceSts = false;

  // 1. 컴포넌트 내부함수/////////////
  // (1) 소원이 무엇이냐 물어보는 함수
  const showAladin = () => {
    if (onceSts) return;
    onceSts = true; //한번만 실행

    console.log("알라딘이 누구야?");

    // html 출력대상 :#ala
    let alaBox = mFn.qs("#ala");
    // 이미지 출력
    ReactDOM.render(<img src="./images/ala4.jpg" alt="알라딘" />, alaBox);

    // 말풍선 박스에 글자넣기
    let titBox = mFn.qs(".tit");
    titBox.innerText = "소원이 무엇이냐?";
    // 말풍선 박스에 인라인CSS코드 넣기
    titBox.style.cssText = `
        width: 50%;
        padding: 50px 0;
        margin: 0 auto;
        border: 2px solid lime;
        transition: all 2s 1s;
        opacity: 0;
        `;

        // 0.5초 후 CSS변경으로 타이틀 등장하기
        setTimeout(() => {
            let tg=titBox.style;
            tg.trasition=
            "2s ease-in-out";
            tg.opacity=1;
            tg.borderRadius="50%";
            tg.translate="0 -200px";
            tg.fontSize="40px";
            tg.color="white";
            tg.backgroundColor="rgba(0,0,0,0.5)";
        }, 500);
  }; ///////////showAladin 함수/////////////////////

  return (
    <React.Fragment>
      <div id="tbox" style={{ textAlign: "center" }}>
        {/* 스타일 인라인 적용시 바깥중괄호는 표현식, 내부중괄호는 객체 형식의 스타일 설정임 */}
        <img
          src="./images/genie.avif"
          alt="지니"
          //  마우스오버시 showAladin 함수 호출
          onMouseOver={showAladin}
        />
        {/* 소원이 무엇이냐 말풍선 박스 */}
        <div class="tit"></div>
      </div>
    </React.Fragment>
  );
} /////////////////////Event Show컴포넌트/////////////////

// 화면 출력하기
ReactDOM.render(<EventShow />, mFn.qs("#root"));
