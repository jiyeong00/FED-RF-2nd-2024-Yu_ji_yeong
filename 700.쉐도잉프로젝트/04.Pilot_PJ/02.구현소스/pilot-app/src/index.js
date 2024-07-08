import React, { useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// 공통css
import "./css/index.scss";

import TopArea from "./components/layout/TopArea";
import MainArea from "./components/layout/MainArea";
import FooterArea from "./components/layout/FooterArea";

// 컨텍스트 API불러오기
import { pCon } from "./components/modules/pCon";
import CartList from "./components/modules/CartList";

function MainComponent(props) {
  // 상태관리 변수 세팅
  // 1. 페이지 변경 상태변수
  const [pgName, setPgName] = useState("main");
  // 2. 카트리스트 사용여부
  const [cartSts,setCartSts]=useState(false);

  /****************************************************** 
   [ 컨텍스트 API 공개 변수들 ]
   1. setPgName - 페이지이름 업데이트 메서드
   ******************************************************/
  /****************************************************** 
   [ 컨텍스트 API 공개 변수들 ]
   1. setPgName - 페이지 이름 세팅
   2. setCartSts - 카트사용여부 세팅
   ******************************************************/

  return (
    <pCon.Provider value={{setPgName,setCartSts}}>
      <TopArea />
      <MainArea page={pgName} />
      <FooterArea />
      {/* 카트리스트 : 카트상태값 true면 출력 */}
      {cartSts && <CartList/>}
    </pCon.Provider>
  );
}

// 출력하기 //////
const root = createRoot(document.querySelector("#root"));
root.render(<MainComponent />);
