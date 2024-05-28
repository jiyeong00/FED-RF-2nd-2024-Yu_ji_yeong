// 산너머산 JSX

import 이야기 from "./components/story";
import { 누구냐 } from "./components/provider";

/********************************************** 
    1. props로 데이터를 전달하여 제목출력하기 
    -> props Down으로 데이터를 하위 컴포넌트에 전달
**********************************************/
// 스타일 객체
const cssObj = {
  padding: "20px",
  borderRadius: "10px",
  width: "60%",
  margin: "20px auto",
  textAlign: "center",
  fontSize: "40px",
  color: "#fff",
  backgroundImage: "linear-gradient(to bottom,skyblue,navy)",
};

// 메인 컴포넌트
function MyHome() {
  return <MyRoom aa="세계의 산" bb="🌄" cdata={cssObj} />;
} ////////MyHome컴포넌트

function MyRoom({ aa, bb, cdata }) {
  return <MyBag cc={aa} dd={bb} cdata={cdata} />;
} ////////MyRoom컴포넌트

function MyBag({ cc, dd, cdata }) {
  return <MyEnd ee={cc} ff={dd} cdata={cdata} />;
} ////////MyBag컴포넌트
function MyEnd({ ee, ff, cdata }) {
  return <div style={cdata}>🌞{ee + ff} </div>;
} ////////MyEnd컴포넌트

// 화면 출력
ReactDOM.render(<MyHome />, document.querySelector("#root1"));

/****************************************************** 
    2. 컨텍스트 프로바이더를 사용하여 산정보 셋팅하기
// ******************************************************/

// 산 전체 박스CSS
const mtBoxCss={
  position:'relative',
  padding:'20px',
  border:'10px dotted skyblue',
  borderRadius:'10px',
  width:'60%',
  margin:'20px auto',
  textAlign:'center'
}

const mtInfoBoxCss={
  position:'absolute',
  width:'50%',
  bottom: '105px',
  left:'20px',
  padding:'15px',
  fontSize:'16px',
  color:'#fff',
  textShadow:'0 0 5px #000',
  textAlign:'left',
  borderRadius:'20px',
  backgroundColor:'rgb(0 0 0 / .4)'
}

// 메인 컴포넌트
function 큰집() {
  // 리액트 상태변수 세팅
  const [mtName, setMtName] = React.useState("백두산");

  return (
    // 형식 : <프로바이더변수.provider value={{변수, 함수}}
    <누구냐.Provider value={{mtName,setMtName,mtBoxCss,mtInfoBoxCss}}>
      <할아버지 />
    </누구냐.Provider>
  );
} /////////////큰집 컴포넌트//////////////////////////
function 할아버지() {
  return <아버지 />;
} /////////////할아버지 컴포넌트//////////////////////////
function 아버지() {
  return <아들 />;
} /////////////아버지 컴포넌트//////////////////////////
function 아들() {
  return <손녀 />;
} /////////////아들 컴포넌트//////////////////////////
function 손녀() {
  return <이야기 />;
} /////////////손녀 컴포넌트//////////////////////////

// 산정보 출력하기
ReactDOM.render(<큰집 />, document.querySelector("#root2"));
