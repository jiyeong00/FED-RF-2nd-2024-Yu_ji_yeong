// 하단영역 컴포넌트
import Logo from "../modules/Logo";
import "../../css/footer_area.scss";

import { bmData } from "../data/bmenu";
import { memo } from "react";
import Weather from "../modules/Weather";

// 리액트.memo()을 사용한 컴포넌트 메모이제이션
// >>>>>컴포넌트를 할당형으로 변경
export const FooterArea= memo(()=>{
  console.log("하단영역");
  return (
    <footer className="info">
      <ul>
        {/* 하단로고 컴포넌트 넣기 */}
        <li>
          <Logo logoStyle="bottom" />
        </li>
        <li>
          {/* 하단링크박스 */}
          <ol className="bmenu">
            {bmData.map((v, i) => (
              <li key={i}>
                <a href={v.link} target="_blank">
                  {
                  v.txt.toUpperCase()
                  // toUpperCase() - 대문자 변환
                  // toLowerCase() - 소문자 변환
                  }
                  
                </a>
              </li>
            ))}
          </ol>
        </li>
        <li>© & ™ DC. ALL RIGHTS RESERVED</li>
      </ul>

      {/* 날씨정보 컴포넌트 */}
      <Weather/>
    </footer>
  );
}); ///////////////FooterArea//////////////
