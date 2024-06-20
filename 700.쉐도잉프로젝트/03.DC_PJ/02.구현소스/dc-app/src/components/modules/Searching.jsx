import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// css
import "../../css/searching.scss";
// 데이터 불러오기 : 캐릭터 리스트 데이터
import { catListData } from "../data/swiper_cat";

import SearchingCat from "./SearchingCat";

function Searching({ kword }) {
  // kword - 전달받은 키워드

  // 키워드에 따라 검색결과가 달라지므로 핵심 데이터인 검색어를 상태관리변수로 만든다.
  // ((상태관리변수))
  // [1] 검색어 상태관리 변수
  const [kw, setKw] = useState(kword);
  // [2] 정렬기준 상태관리 변수
  const [sort, setSort] = useState("asc");
  // 초기값 - 전달받은 검색어 변수

  // 검색어가 있는 데이터 필터하기
  // filter()는 검색결과가 항상 배열로 나옴
  const newList = catListData.filter((v) => {
    let newVal = v.cname.toLocaleLowerCase();
    // 전달받은 키워드도 소문자 처리
    // ((중요!!!!!!!!)) 상태변수인 kw로 대체한다.
    let key = kw.toLocaleLowerCase();

    if (newVal.indexOf(key) != -1) return true;
    // 문자열.indexOf(문자) 문자열 위치번호를 리턴함 그런데 결과가 없으면 -1을 리턴함
    // 그래서 -1이 아닌 경우 filter에서 변수에 저장할 배열로 수집됨
  }); /////////////////filter

  // [ 결과 내 재검색 : 데이터 항목중 alignment값으로 검색 ]

  // [ 정렬기능 추가하기 ]
  //  (1) 오름차순일 경우
  if (sort == "asc") {
    newList.sort((a, b) =>
      a.cname > b.cname ? 1 : a.cname < b.cname ? -1 : 0
    );
  } else if (sort == "desc") {
    newList.sort((a, b) =>
      a.cname > b.cname ? -1 : a.cname < b.cname ? 1 : 0
    );
  } ////////if

  /* 배열.filter(v=>{
        if(v.속성명.indexOf(검색어)!=-1)return true;
    })
    
    -> 결과는 검색어가 있는 경우 변수에 모아서 담아준다
    */
  // 코드 리턴구역 ////////////////////////
  return (
    <>
      {/* 전체 검색모듈 코드 */}
      <section className="schbx">
        {/* 1. 옵션선택박스 */}
        <div className="schopt">
          {/* 1-1.검색박스 */}
          <div className="searching">
            {/* 검색버튼 돋보기 아이콘 */}
            <FontAwesomeIcon
              icon={faSearch}
              className="schbtn"
              title="Open search"
            />
            {/* 입력창 */}
            <input
              id="schin"
              type="text"
              placeholder="Filter by Keyword"
              defaultValue={kword}
              // 엔터키를 눌렀을 때 검색실행
              // 검색어 상태변수만 업데이트 하면 끝
              //  >>>>>>>> setKw(검색어)
              onKeyUp={(e) => {
                if (e.key == "Enter") {
                  // 검색어 상태값 변경
                  setKw(e.target.value);
                  // 처음검색시 정렬은 기본정렬(asc)
                  setSort("asc");
                  // 정렬선택박스 선택값 변경
                  document.querySelector("#sel").value = "asc";
                }
              }}
            />
          </div>
          {/* 1-2. 체크박스구역 */}
          <div className="chkbx">
            <ul>
              <li>
                {/* 타이틀 */}
                <h2>
                  ALIGNMENT
                  <span className="spbtn">＋</span>
                </h2>
                {/* 체크박스리스트 */}
                <ol>
                  <li>
                    Heroes
                    {/* 숨긴 체크박스 */}``
                    <input type="checkbox" id="hero" className="chkhdn" />
                    {/* 디자인노출 라벨 */}
                    <label htmlFor="hero" className="chklb"></label>
                  </li>
                  <li>
                    It's Complicated
                    {/* 숨긴 체크박스 */}
                    <input
                      type="checkbox"
                      id="comp"
                      className="chkhdn"
                      // 체크변경시 chang이벤트발생
                      onChange={(e) => {
                        console.log(e.target.checked);
                      }}
                    />
                    {/* 디자인노출 라벨 */}
                    <label htmlFor="comp" className="chklb"></label>
                  </li>
                  <li>
                    Villains
                    {/* 숨긴 체크박스 */}
                    <input type="checkbox" id="villain" className="chkhdn" />
                    {/* 디자인노출 라벨 */}
                    <label htmlFor="villain" className="chklb"></label>
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
        {/* 2. 결과리스트박스 */}
        <div className="listbx">
          {/* 2-1. 결과 타이틀 */}
          <h2 className="restit">BROWSE CHARACTERS</h2>
          {/* 2-2. 정렬선택박스 */}
          <aside className="sortbx">
            <select
              name="sel"
              id="sel"
              className="sel"
              //값 변경할때 이벤트 발생
              onChange={(e) => {
                // console.log(e.target.value);
                setSort(e.target.value);
              }}
            >
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </aside>
          {/* 2-3. 캐릭터 리스트 컴포넌트 : 
            데이터 상태변수 중 첫번째값만 보냄 */}
          <SearchingCat dt={newList} total={newList.length} />
        </div>
      </section>
    </>
  );
}

export default Searching;
