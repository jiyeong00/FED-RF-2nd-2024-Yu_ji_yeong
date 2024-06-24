// 영화 페이지 컴포넌트 ///

import Banner from "../modules/Banner";
import VidIntro from "../modules/VidIntro";
import VidSwipe from "../modules/VidSwipe";

export default function Movies() {
  //// 코드 리턴구역 //////////////
  return (
    <>
      {/* 1. 배너 컴포넌트 */}
      <Banner catName="MOVIES" />
      {/* 비디오소개 컴포넌트 */}
      <VidIntro catName="MOVIES" clsName="on" />
      
      <VidSwipe catName="movies"/>
    </>
  );
} /////////// Movies /////////////////////
