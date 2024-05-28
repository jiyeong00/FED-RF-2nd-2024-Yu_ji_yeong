// 보그 PJ 메인 JS - main.js


import TopArea from "./components/TopArea";
import MainArea from "./components/MainArea";
import FooterArea from "./components/FooterArea";
// 아이템영역 불러오기
import ItemsArea from "./components/ItemsArea";
import Gallery from "./components/Gallery";
import Login from "./components/Login";
import Member from "./components/Member";

// [1] 메인 페이지 전체 레이아웃 로딩 컴포넌트 ///
function Layout() {
  // 상태관리변수 설정구역
  // [1] 메뉴변경 상태변수
  const [menu, setMenu] = React.useState("home");

  // 화면 랜더링 직전에 css로딩 변경하기
  React.useLayoutEffect(()=>{
    // menu 상태변수에 의존시킨다.
    // 메인 css대상요소 : #main-css
    document.querySelector("#main-css").href=
    menu=="home"?"./css/main.css":menu == "gallery"?"./css/gallery.css":menu == "login"?"./css/login.css":menu == "member"?"./css/member.css":"./css/intems.css";
  },[menu]);


  return (
    <React.Fragment>
      {/* // 1. 상단영역 컴포넌트 */}
      <TopArea changeMenu={setMenu}/>
      {/* // 2. 메인영역 컴포넌트 */}
      {menu == "home" ? <MainArea /> :menu == "gallery"?<Gallery/>:menu=="login"?<Login/>:menu=="member"?<Member/>: <ItemsArea catName={menu} />}
      {/* // 3. 하단영역 컴포넌트 */}
      <FooterArea />
    </React.Fragment>
  );
} ///////// Layout 컴포넌트 /////////

// 메인페이지 전체 출력하기
ReactDOM.render(<Layout />, document.querySelector("#root"));
