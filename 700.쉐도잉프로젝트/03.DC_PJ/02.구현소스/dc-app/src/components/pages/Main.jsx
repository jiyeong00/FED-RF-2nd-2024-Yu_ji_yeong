// 메인 페이지 컴포넌트 ///

import Banner from "../modules/Banner";
import SecIntro from "../modules/SecIntro";

export default function Main(){

  //// 코드 리턴구역 //////////////
  return(
      <>
         {/* 1. 배너 컴포넌트 */}
         <Banner catName={"main"+Math.ceil(Math.random()*3)}/>

         {/* 2. 세션 소개 컴포넌트 */}
         <SecIntro/>
      </>
  );

} /////////// Main /////////////////////