// 상단영역 컴포넌트
// gnb데이터 불러오기
import { Link, Router, useNavigate } from "react-router-dom";
import { menu } from "../data/gnb";
import Logo from "../modules/Logo";

// 상단영역 css 불러오기
import "../../css/top_area.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

export default function TopArea() {
  // 이동함수
  const goNav = useNavigate();
  // 사용시 goNav(라우터주소,{전달객체(없으면 비워놓기)})
  // 사용법: 반드시 useNavigate()메서드를 변수에 담아
  // 이동할 라우터 주소를 쓰면 이동한다
  // 예) goNav('/news') -> 뉴스페이지이동
  // 예) goNav('news') -> 뉴스페이지이동
  // 예) goNav('/') -> 첫페이지이동
  // 이동주소는 대소문자 구분없음!
  // 슬래쉬 없이써도 루트로 인식함 -> 빈값이어도 첫페이지 이동

  // 검색관련함수들
  // 1. 검색창 보이기 함수
  const showSearch=(e)=>{
    e.preventDefault();
    //1)검색창보이기
    $(".searchingGnb").show();
    //2)입력창에 포커스 보내기
    $("#schinGnb").focus();
  };///////////////////////showSearch//////////////

  // 2. 검색창에 엔터키 누르면 검색함수 호출
  const enterKey=e=>{
    // console.log(e.key,e.keyCode);
    if(e.key=="Enter"){
      // 입력창의 입력값 가져오기 : val()사용
      let txt = $(e.target).val().trim();
      console.log(txt);
      // 빈값이 아니면 검색함수 호출(검색어전달)
      if(txt!=''){
        goSearch(txt);

      }
    }
  };/////////////////////////enterKey////////////

  // 3. 검색페이지로 검색어와 함께 이동하기 함수
  const goSearch=txt=>{
    console.log("검색");
    // 라우터 이동함수로 이동하기
    // 네비게이트 (라우터주소,{state:{보낼객체}})
    goNav("search",{state:{keyword:txt}});
  };

  return (
    <>
      {/* 1.상단영역 */}
      <header className="top-area">
        {/* 로그인 환영메시지 박스 */}
        {/* 네비게이션 GNB파트 */}
        <nav className="gnb">
          <ul>
            {/* 1. 로고 컴포넌트 */}
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goNav("/");
                }}
              >
                <Logo logoStyle="top" />
              </a>
              {/* <Link to="/">
                <Logo logoStyle="top" />
              </Link> */}
            </li>
            {/* 2. GNB메뉴 데이터 배열로 만들기 */}
            {menu.map((v, i) => (
              <li key={i}>
                {
                  // 하위 메뉴가 있으면 일반 a요소에 출력
                  // 없으면 Link 라우팅 출력
                  v.sub ? (
                    <a href="#">{v.txt}</a>
                  ) : (
                    <Link to={v.link}>{v.txt}</Link>
                  )
                }
                {
                  // 서브 메뉴 데이터가 있으면 하위그리기
                  v.sub && (
                    <div className="smenu">
                      <ol>
                        {v.sub.map((v, i) => (
                          <li key={i}>
                            <Link to={v.link}>{v.txt}</Link>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )
                }
              </li>
            ))}
            {/* 3. 검색,회원가입,로그인 링크 */}
            <li
              style={{
                marginLeft: "auto",
                marginRight: "25px",
              }}
            >
              {/* 검색입력박스 */}
              <div className="searchingGnb" style={{ display: "block" }}>
                {/* 검색버튼 돋보기 아이콘 */}
                <FontAwesomeIcon
                  icon={faSearch}
                  className="schbtnGnb"
                  title="Open search"
                />
                {/* 입력창 */}
                <input
                  type="text"
                  name="schinGnb"
                  id="schinGnb"
                  placeholder="Filter by Keyword"
                  onKeyUp={enterKey}
                />
              </div>
              {/* 검색기능링크 - 클릭시 검색창보이기 */}
              <a href="#" onClick={showSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
} ///////////////TopArea//////////////
