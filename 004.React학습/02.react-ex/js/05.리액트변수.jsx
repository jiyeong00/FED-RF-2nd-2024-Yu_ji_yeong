// 05.리액트변수 : useRef

/******************************************************** 
☑️ useRef : 리액트 후크 참조변수
1. 특정 DOM 선택할때 주로 쓰이며 
.current 프로퍼티로 전달된 인자로 
초기화된 변경 가능한 ref 객체를 반환한다. 

-> 예) <참조할요소/컴포넌트 ref="useRef사용변수명" .../>
-> ref속성에 값으로 설정된 useRef변수를 써준다!
이변수에 담긴 요소를 사용할 수 있다! -> 변수명.current
>>> current를 써야하는 이유 : useRef컴포넌트 객체에서 이 변수를 관리해주고 값을
                             유지 업데이트 하는데 사용하는 속성으로 current사용 지정

2. 그밖에 컴포넌트가 리랜더링 되어도 변경되어서는
안되는 변수의 값이 있다면 useRef를 사용하여 일정값을 유지함!

반환된 객체는 컴포넌트의 전 생애주기를 통해 유지된다.

const myRef = useRef(null);
********************************************************/

// 컴포넌트 외부 일반변수
// 1: 전역변수역할을 하지만 컴포넌트가 여러개 사용될때
      // 이 변수를 업데이트하면 여러가지 프로그래밍이 꼬인다.
      //  그러므로 절대!!!!!!!!!!!!!!!!!변경되는 변수를 바깥쪽에 쓰면안됨
// 2: 단, 변경되지 않는 데이터const변수나, 공유함수 등은 컴포넌트 바깥에 써도 괜찮음
let what = "난뭐임?";

// 메인 컴포넌트
function MainComp() {
  console.log("컴포넌트 랜더링");
  // 이름 상태관리 변수
  // 1: 변수값 변경 시 리랜더링 됨
  // 2: 변경된 값은 컴포넌트 소멸 전까지 유지
  // 3: 값변경시 반영은 useEffect구역에서 확인됨
  //   -> 의미 : 실제 DOM에 반영할때 변경값이 업데이트 되는 시점
  const [stsName, setStsName] = React.useState("공유");
  // 컴포넌트 내부 일반변수
  // ->> 컴포넌트가 리랜더링 될때 다시 초기화됨
  let varName = "김수현";
  // 리액트 참조변수
  // 1: 변경된 값은 컴포넌트 소멸 전까지 유지
  // 2: 변수값 변경 시 리랜더링 되지않음
  const refName = React.useRef("송새벽");

  React.useEffect(() => {
    // 일반변수와 참조변수가 화면에 반영되게함
    let ele = document.querySelectorAll(".name");
    ele[1].innerText = varName;
    ele[2].innerText = refName.current;

    console.log("useState랜더링:", stsName);
  });

  // 이름바꾸기 함수
  const changeName = (e) => {
    let txt = e.target.innerText;
    let val = e.target.previousElementSibling.value;
    switch (txt) {
      // (1)상태변수 업데이트
      case "이름바꿔 : useState":
        console.log("useState변경전:", stsName);
        setStsName(val);
        console.log("useState변경후:", stsName);
        break;
      // (2)컴포넌트 내부 일반변수 업데이트
      case "이름바꿔 : let":
        console.log("let변경전:", varName);
        varName = val;
        console.log("let변경후:", varName);
        break;
      // (3)참조변수 업데이트
      case "이름바꿔 : useRef":
        console.log("useRef변경전:", refName.current);
        refName.current = val;
        console.log("useRef변경후:", refName.current);
        break;
      // (4)외부변수 업데이트
      case "이름바꿔 : outside":
        console.log("outside변경전:", what);
        what = val;
        console.log("outside변경후:", what);
        break;
    }
  };

  // 코드리턴 /////////////////
  return (
    <React.Fragment>
      <h1>[ 🚩useRef 변수사용하기🚩 ]</h1>
      <div className="wrap">
        <div>
          <h1>
            1. useState 출력
            <br />
            <b>
              나는 <span className="name">{stsName}</span> 좋아해!
            </b>
          </h1>
          <h1>
            2. let 출력
            <br />
            <b>
              나는 <span className="name">{varName}</span> 좋아해!
            </b>
          </h1>
          <h1>
            3. useRef 출력
            <br />
            <b>
              나는 <span className="name">{refName.current}</span> 좋아해!
            </b>
          </h1>
          <h1>
            4. 바깥 let 출력
            <br />
            <b>
              나는 <span className="name">{what}</span> 좋아해!
            </b>
          </h1>
        </div>
        <div>
          <h2>1. useState 이름변경</h2>
          <input type="text" className="ip-name1" /> &nbsp;
          <button onClick={changeName}>이름바꿔 : useState</button> <br />
          <h2>2. let 이름변경</h2>
          <input type="text" className="ip-name2" /> &nbsp;
          <button onClick={changeName}>이름바꿔 : let</button> <br />
          <h2>3. useRef 이름변경</h2>
          <input type="text" className="ip-name3" /> &nbsp;
          <button onClick={changeName}>이름바꿔 : useRef</button>
          <h2>4. 바깥let 이름변경</h2>
          <input type="text" className="ip-name3" /> &nbsp;
          <button onClick={changeName}>이름바꿔 : outside</button>
        </div>
      </div>
    </React.Fragment>
  );
} ///////////// MainComp 컴포넌트 ////////////

// 컴포넌트 출력하기 ///////
ReactDOM.render(<MainComp />, document.querySelector("#root"));
