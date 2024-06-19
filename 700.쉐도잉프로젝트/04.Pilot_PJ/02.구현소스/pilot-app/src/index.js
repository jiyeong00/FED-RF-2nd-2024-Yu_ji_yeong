import React, { useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// 공통css
import "./css/index.scss";

import TopArea from "./components/layout/TopArea";
import MainArea from "./components/layout/MainArea";
import FooterArea from "./components/layout/FooterArea";

// 컨텍스트 API불러오기
import { pCon } from "./components/modules/pCon";

function MainComponent(props) {
  // 상태관리 변수 세팅
  // 1. 페이지 변경 상태변수
  const [pgName, setPgName] = useState("main");

  /****************************************************** 
   [ 컨텍스트 API 공개 변수들 ]
   1. setPgName - 페이지이름 업데이트 메서드
   ******************************************************/

  return (
    <pCon.Provider value={{setPgName}}>
      <TopArea />
      <MainArea page={pgName} />
      <FooterArea />
    </pCon.Provider>
  );
}

// 출력하기 //////
const root = createRoot(document.querySelector("#root"));
root.render(<MainComponent />);
