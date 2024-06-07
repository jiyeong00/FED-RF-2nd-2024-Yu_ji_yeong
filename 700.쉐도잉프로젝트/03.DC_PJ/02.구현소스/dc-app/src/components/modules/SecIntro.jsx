// DC.com 섹션소개모듈 - SetIntro.js
import React from "react";

// 데이터
import { secIntroData } from "../data/sec_intro";
import "../../css/sec_intro.scss";
import { Link } from "react-router-dom";

function SetIntro(props) {
  // 불러온 데이터 변수할당
  const selData = secIntroData;
  return (
    <>
      <section className="sec-intro">
        {/* 반복단위박스 */}
        {selData.map((v, i) => (
          <div key={i}>
            {/* 이미지박스 */}
            <div className="imbx">
              <img src={v.isrc} alt={v.tit.split("^")[0]} />
              {/* split()으로 자르면 배열이됨 */}
            </div>
            {/* 타이틀박스 */}
            <div className="titbx">
              <h3>{v.tit.split("^")[0]}</h3>
              <h2>{v.tit.split("^")[1]}</h2>
            </div>
            {/* 버튼박스 */}
            <div className="btnbx">
              <button>
                <Link to={v.link}>{v.btn}</Link>
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default SetIntro;
