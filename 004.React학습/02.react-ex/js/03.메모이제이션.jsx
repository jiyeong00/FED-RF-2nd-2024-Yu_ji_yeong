// 03.메모이제이션 useMemo

function App() {
  console.log("App컴포넌트 랜더링");
  // 점수관련 상태변수
  const [score, setScore] = React.useState(0);
  // 국적관련 상태변수
  const [isKor, setIsKor] = React.useState(true);

  // 국적표시 객체
  //   -> 매번 컴포넌트가 리랜더링될때마다 할당되는 객체의 주소값이 변경된다
  //   const nara = {
  //     // 속성:값
  //     country: isKor ? "한국" : "일본",
  //   };

  // 처음 할당된 객체의 주소값을 메모할 것
  //   >>> 그러면 다른 상태변수가 변경될때 같은 주소값을 유지하여 nara변수가 변경되지 않도록함
  // 사용법 : 변수=React.useMemo(()=>{return 객체},[의존성])

  const nara = React.useMemo(() => {
    return {
      // 속성:값
      country: isKor ? "한국" : "일본",
    };
  }, [isKor]);

  //  랜더링 상태관리 후크 useEffect설정
  // nara갹채는 isKor에 의존하고 있음
  // 따라서 isKor이 변경되면 nara가 변경됨

  // [[[[현재 증상]]]]: nara는 isKor에 연결되었으나
  // score에는 연결되어 있지 않음! 그런데 왜? nara에
  // 변경을 관리하는 useEffect에 걸리는 걸까???
  React.useEffect(() => {
    console.log("nara가 변경됨");
    // 축구선수 이미지 중 해당 나라 이미지가 위로 올라옴
    // isKor이 true면 1번 손흥민
    $("img")
      .eq(isKor ? 1 : 0)
      .animate({ bottom: "+=50px" }, 300);
  }, [nara]);

  /******************************************************** 
    [흔하면서도 재미있는 현상!!!]
    useEffect의 의존성 배열에 nara를 넣었는데 
    score의 state를 변경해도 useEffect가 실행된다.
    그 이유는 자바스크립트에서 객체는 원시 타입과는 
    다르게 값이 저장될 때 주소 값으로 저장되기 때문이다.
    그렇기 때문에 리액트에선 score의 state가 바뀌면 
    App 컴포넌트가 재호출되면서 nara의 
    <<주소값이 변경>>이 되었기 때문에 nara가 
    변경이 되었다고 인식을 한다.

    여기서도 useMemo 훅을 통해 이를 방지할 수 있다.
    -> 방지의 원리는 의존성을 심어서 실제로 변경되는 데이터를
    특정하여 정확한 반영을 위해 기존데이터를 재사용해준다!
  ********************************************************/

  return (
    <header className="header" style={{ textAlign: "center" }}>
      {/* 제목 서브 컴포넌트 */}
      <ShowTit txt="한국과 일본이 축구를 하고 있습니다!" />
      <h1>
        <br />
        {isKor ? "한국이" : "일본이"} 몇점 차로 승리를 예측합니까?
      </h1>
      {/* 점수입력창 */}
      <input
        type="number"
        value={score}
        onChange={(e) => {
          setScore(e.target.value);
        }}
        style={{
          fontSize: "40px",
          textAlign: "center",
        }}
      />
      <hr />
      <h1>당신은 어느나라 사람입니까?</h1>
      <h2 style={{ fontSize: "40px" }}>{nara.country}</h2>

      {/* 국적변경버튼 */}
      <button
        onClick={() => {
          // 한국사람여부 반대로 넣기
          setIsKor(!isKor);
          // 국적변경시 예상점수차 초기화하기
          setScore(0);
        }}
        style={{ fontSize: "40px" }}
      >
        국적변경하기
      </button>
      {/* 다나카 */}
      <img
        src="https://i.namu.wiki/i/fNSwm2U4hvUad455bOoiJsczNZDdOmZ3Kl7qUkCGzdMt7ckJB-LRnO7PXPUjWF7ADTuYS9vaTZKsnSNajizvWw.webp"
        style={{
          height: "300px",
          position: "fixed",
          bottom: "-100px",
          left: "5vw",
          borderRadius: "50%",
          border: "10px double lightblue",
        }}
      />
      {/* 손흥민 */}
      <img
        src="https://image.kmib.co.kr/online_image/2021/0105/202101050405_12120924172594_1.jpg"
        style={{
          height: "300px",
          position: "fixed",
          bottom: "-100px",
          right: "5vw",
          borderRadius: "50%",
          border: "10px double orangered",
        }}
      />
    </header>
  );
} ///////////////////////////App컴포넌트

// 제목을 만들어주는 서브컴포넌트
// -> 초기 세팅 후 변경내용이 없는 서브컴포넌트가 리랜더링 되지 않도록 하는방법은?
// >>>>>>>> React.memo(()=>{})
// 주의!!!!! 컴포넌트가 할당형으로 만들어져야함.
const ShowTit = React.memo(({ txt }) => {
  console.log("ShowTit 컴포넌트 랜더링");
  return <h1 style={{ fontSize: "45px" }}>⚽{txt}⚽</h1>;
}); //////////////ShowTit컴포넌트

/***************************************** 
    [ 함수형 컴포넌트의 2가지 유형 ]

    1. 선언적 함수형 컴포넌트
    function 컴포넌트명(){return();}

    2. 화살표 함수형 컴포넌트 (익명함수할당형)
    const 컴포넌트명 = () => {return();};
*******************************************/

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
