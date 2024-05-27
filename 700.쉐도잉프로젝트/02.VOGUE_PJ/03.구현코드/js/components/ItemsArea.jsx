// 아이템 페이지영역 컴포넌트

import catData from "./data/category.js";

// [3] 아이템 페이지영역 서브 컴포넌트 /////
export default function ItemsArea({ catName }) {
  // catName - 카테고리 분류이름(데이터 객체명과 동일)

  const selData = catData[catName];
  console.log(selData);

  // 태그처리 구분코드 생성함수
  const makeCode=(data)=>{
    console.log(Array.isArray(data));
    // 배열 데이터는 태그 구성이 다름
    // runway 카테고리만 다름
    if(Array.isArray(data)){
      return(
        <h2>
          <small>
            {data[0]}
          </small>
          <br/>{data[1]}
        </h2>
      );
    }/////if
    // 배열이 아닌경우
    else{
      return(
        <h2>{data}</h2>
      );
    }
  };//////////////////////makeCode////////////////////


  // 코드 리턴구역 /////
  return (
    <div id="main-area">
      <main className={"main-area ibx " + selData.경로}>
        {/* <!-- 2-1. 카테고리 페이지 상단영역 --> */}
        <header className="cat-top-area">
          {/* <!-- 2-1-1. 서브타이틀 --> */}
          <h2 className="cat-tit">{selData.제목}</h2>
          {/* <!-- 2-1-2. 서브메뉴(LNB:Local Navigation Bar) --> */}

          {
            //메뉴가 없음이 아닐때만 배열돌아 출력함
            selData.메뉴 != "없음" && (
              <nav className="lnb">
                <ul>
                  {selData.메뉴.map((v) => (
                    <li>
                      <a href="#">{v}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            )
          }
        </header>
        {/* <!-- 2-2. 카테고리 페이지 컨텐츠영역 --> */}
        <div className="cat-cont-area">
          {/* <!-- 데이터적용4 : 컨텐츠 타이틀 넣기--> */}
          <section className="pt2">
            <div className="cbx bgi bg1-1">
              <h2>{makeCode(selData.타이틀[0])}</h2>
            </div>
            <div className="cbx bgi bg1-2">
              <h2>{makeCode(selData.타이틀[1])}</h2>
            </div>
            <div className="cbx bgi bg1-3">
              <h2>{makeCode(selData.타이틀[2])}</h2>
            </div>
          </section>
          <section className="pt2">
            <div className="cbx bgi bg2-1">
              <h2>{makeCode(selData.타이틀[3])}</h2>
            </div>
            <div className="cbx bgi bg2-2">
              <h2>{makeCode(selData.타이틀[4])}</h2>
            </div>
            <div className="cbx bgi bg2-3">
              <h2>{makeCode(selData.타이틀[5])}</h2>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} ///////// ItemsArea 컴포넌트 ///////////
