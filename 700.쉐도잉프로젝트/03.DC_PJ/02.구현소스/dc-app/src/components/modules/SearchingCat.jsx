import React from "react";

// css
import "../../css/searching_cat.scss";
import { Link } from "react-router-dom";

function SearchingCat({ dt, total }) {
  //dt - 검색된 배열데이터
  // total - 검색된 배열데이터 개수

  return (
    <>
      {
        // 데이터 개수가 0이 아닐때 출력
        total > 0 && (
          <ul className="clist">
            {dt.map((v, i) => (
              <li key={i}>
                <Link
                  to="/detail"
                  // state로 3가지 값을 넘겨줌
                  state={{
                    cname: v.cname,
                    cdesc: v.cdesc,
                    facts: v.facts,
                  }}
                >
                  <img src={v.tmsrc} alt={v.cname} />
                  <h3>{v.cname}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )
      }
      {
        // 선택데이터가 0개
        total == 0 && (
          <h2 style={{ textAlign: "center" }}>
            Sorry, we don't have any matches for that. But there's plenty more
            to see on DC!
          </h2>
        )
      }
    </>
  );
}

export default SearchingCat;
