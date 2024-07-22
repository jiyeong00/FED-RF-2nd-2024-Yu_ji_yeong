import React from "react";
import Searching from "../modules/Searching";

// 라우터 전달변수값을 받기위해 useLocation
import { useLocation } from "react-router-dom";

function SearchPage(props) {
  const loc =useLocation();

  // 넘어온 키워드 받기
  let keyword=loc.  state.keyword;

  return (
    <>
      <h1 className="tit">search result</h1>
      <Searching kword={keyword} />
    </>
  );
}

export default SearchPage;
