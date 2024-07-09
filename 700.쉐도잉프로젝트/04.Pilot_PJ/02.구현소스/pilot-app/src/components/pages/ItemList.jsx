import React, { useEffect, useRef, useState } from "react";

// 상품데이터 불러오기
import itemListData from "../../js/data/item_list";

// 공통함수 불러오기
import { addComma } from "../../js/func/common";


// css
import "../../css/item_list.scss";

import $ from "jquery";
import ItemDetail from "../modules/ItemDetail";


function ItemList() {
  // 상태변수
  // [1] 카테고리 정보
  const [cat, setCat] = useState(itemListData[0].cat);
  // [2] 상품 정보
  const [ginfo, setGinfo] = useState(itemListData[0].ginfo);

  // 참조변수
  const gIdx=useRef(0);

  // 화면랜더링
  useEffect(() => {
    $("html,body").css({ overflow: "visible" });
  }, []); ///////////////////////useEffect

  return (
    <main id="cont">
      <h1 className="tit">All ITEMS LIST</h1>
      <section>
        <div id="optbx">
          <label htmlFor="men">남성</label>
          <input type="checkbox" className="chkbx" id="men" defaultChecked />
          <label htmlFor="women">여성</label>
          <input type="checkbox" className="chkbx" id="women" defaultChecked />
          <label htmlFor="style">스타일</label>
          <input type="checkbox" className="chkbx" id="style" defaultChecked />
        </div>
        <div className="grid">
          {itemListData.map((v,i) => (
            <div key={i}>
              <a href="#" onClick={(e)=>{
                e.preventDefault();
                // 상품상세모듈 전달 상태변수 변경
                setCat(v.cat);
                setGinfo(v.ginfo);

                gIdx.current=v.idx;

                // 상세상품정보박스 보이기
                $(".bgbx").show();

              }}>
                [{i+1}]
                <img
                  src={process.env.PUBLIC_URL + `/images/goods/${v.cat}/${v.ginfo[0]}.png`}
                  alt="dress"
                />
                <aside>
                  <h2>{v.ginfo[1]}</h2>
                  <h3>{addComma(v.ginfo[3])}원</h3>
                </aside>
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* 상세 상품정보 박스 */}
      <div
        className="bgbx"
        style={{
          position: "fixed",
          top: "0px",
          padding: "12vh 4vw 0",
          boxSizing:"border-box",
          backdropFilter: "blur(8px)",
          width:"100%",
          height: "100vh",
          zIndex: "9999",
        }}
      >

        {/* 아이템디테일 컴포넌트 불러오기 
        cat - 카테고리 / ginfo - 상품정보 / dt - 전체 상품데이터 / 
        setGinfo - 한 줄 리스트에서 클릭 시 벼녁ㅇ*/}
        <ItemDetail 
        cat={cat} 
        ginfo={ginfo} 
        dt={itemListData} 
        setGinfo={setGinfo}
        // 상품 고유번호전달
        gIdx={gIdx.current}
        />
        
      </div>
    </main>
  );
}

export default ItemList;
