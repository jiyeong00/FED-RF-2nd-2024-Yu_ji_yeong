// 메인 페이지 컴포넌트 ///

import Banner from "../modules/Banner";
import SecIntro from "../modules/SecIntro";
import VidIntro from "../modules/VidIntro";

export default function Main(){

  //// 코드 리턴구역 //////////////
  return(
      <>
         {/* 1. 배너 컴포넌트 */}
         <Banner catName={"main"+Math.ceil(Math.random()*3)}/>

         {/* 2. 세션 소개 컴포넌트 */}
         <SecIntro/>

         {/* 3. 비디오 소개 컴포넌트 */}
         {/* catName - 카테고리명 clsName - 배경색넣을 클레스 (on/off) */}
         <VidIntro catName="main" clsName="off"/>
      </>
  );

} /////////// Main /////////////////////