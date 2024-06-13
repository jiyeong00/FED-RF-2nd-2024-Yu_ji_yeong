// 메인컨텐츠 - MainCont.jsx
import React from "react";
import Banner from "../modules/Banner";

function MainCont(props) {
  return (
    <>
      {/* 1. 배너넣기 */}
      <section
        id="ban"
        className="page none-sel"
        style={{ background: "lightblue" }}
      >
        <Banner />
      </section>
    </>
  );
}

export default MainCont;
