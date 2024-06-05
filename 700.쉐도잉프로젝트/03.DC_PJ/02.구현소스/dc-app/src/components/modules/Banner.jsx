// DC 배너 컴포넌트

import React from "react";
// 배너데이터
import { banData } from "../data/banner";
// 배너 css
import "../../css/banner.scss";

// 슬라이드 함수
import goSlide from "../func/go_slide";

const Banner = ({ catName }) => {
  // catName - 배너 데이터 카테고리이름
  // 선택데이터
  const selData = banData[catName];

  // 코드리턴구역
  return (
    <div className="banner">
      {/* 이동슬라이드 */}
      <ul className="slider">
        {selData.map((v, i) => (
          <li key={i}>
            <img src={v.src} alt={v.tit1 == "" ? "이미지" : v.tit1} />
            <section className="bantit">
              <h2>{v.tit1}</h2>
              <p>{v.tit2}</p>
              {v.btn != "" && <button>{v.btn}</button>}
            </section>
          </li>
        ))}
      </ul>

      {
        // 배너데이터가 1개면 양쪽이동버튼 출력안함
        // 배열.length로 배열개수가 1이상일때만 출력
        selData.length > 1 && (
          <>
            {/* 양쪽이동버튼 */}
            <button className="abtn lb"onClick={goSlide}>＜</button>
            <button className="abtn rb"onClick={goSlide}>＞</button>
            {/* 블릿 인디케이터 - 선택데이터의 개수만큼 만들기 */}
            {/* >>> map메서드의 반복기능만 이용하여 태그생성 
              순번은 첫번쨰 블릿li만 클래스 on넣기*/}
            <ol className="indic">
              {
                selData.map((v,i)=>
                <li key={i} className={i==0?"on":""}>

                </li>
                )
              }
            </ol>
          </>
        )
      }
    </div>
  );
};

export default Banner;
