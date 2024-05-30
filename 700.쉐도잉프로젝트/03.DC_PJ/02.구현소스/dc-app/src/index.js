import React from "react";
import ReactDOM from "react-dom/client";

export default function MainComponent() {
  return (
    <>
      <h1>하하하하ㅏ하하</h1>
    </>
  );
} ///////////////////mainComponent

// 컴포넌트 출력
// 1. 루트 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 2. 출력하기
root.render(<MainComponent />);
