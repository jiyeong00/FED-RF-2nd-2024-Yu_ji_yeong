// 보그 PJ 메인 JS - main.js

import TopArea from "./components/TopArea";
import MainArea from "./components/MainArea";
import FooterArea from "./components/FooterArea";

// [1] 메인 페이지 전체 레이아웃 로딩 컴포넌트 ///
function Layout() {
  return (
    <React.Fragment>
      {/* // 1. 상단영역 컴포넌트 */}
      <TopArea />
      {/* // 2. 메인영역 컴포넌트 */}
      <MainArea />
      {/* // 3. 하단영역 컴포넌트 */}
      <FooterArea />
    </React.Fragment>
  );
} ///////// Layout 컴포넌트 /////////

// 메인페이지 전체 출력하기
ReactDOM.render(<Layout />, document.querySelector("#root"));
