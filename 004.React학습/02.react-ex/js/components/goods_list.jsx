// 공유신발 불러오기
import guData from "../gu_data";
import hjData from "../hj_data";
// console.log(guData);

// [ 상품리스트 서브컴포넌트 : GoodsList]
export default function GoodsList({ viewDetail, updateIdx, selItem }) {
  // viewDetail - 부모컴포넌트가 전달해준 상태변수 viewList를 업데이트하는 setViewList메서드임
  // updateIdx - 부모컴포넌트의 setIdx 상태관리변수 메서드
  // selItem - 부모컴포넌트에서 "공유"/"효진" 선택코드값
  //           >>>> 이 값으로 데이터 선택
  //           공유는 guData, 효진 hjData

  // 선택코드에 따른 데이터 선택하기
  const selData = selItem == "공유" ? guData : selItem == "효진" ? hjData : [];

  // useEffect구역 : 화면 업데이트후 실행구역
  React.useEffect(() => {
    console.log("나는 리스트 컴포넌트다");

    // useEffect 함수구역에 return함수코드를 쓰면 컴포넌츠 소멸 시 실행된다.
    return(()=>{
        console.log("리스트 컴포넌트 소멸");
    });
  }); /////////useEffect////////////

  return (
    <ul>
      {
        // 반복요소 li에 key속성을 쓸 것을 권고함
        // 쓰이는 곳 >>> 업데이트 시 순번구분을 위함
        // node.js개발환경에서는 안쓰면 에러남
        selData.map((v, i) => (
          <li key={i}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                viewDetail(false);
                // setIdx메서드가 updateIdx로 들어옴
                updateIdx(i);
              }}
            >
              <ol className="glist">
                <li>
                  {selItem == "공유" ? (
                    <img src={`./images/vans/vans_${v.idx}.jpg`} alt="신발" />
                  ) : selItem == "효진" ? (
                    <img src={`./images/gallery/${v.idx}.jpg`} alt="드레스" />
                  ) : (
                    "없음"
                  )}
                </li>
                <li>{v.gname}</li>
                <li>가격 : {v.gprice}원</li>
              </ol>
            </a>
          </li>
        ))
      }
    </ul>
  );
} //////////////////GoodsList 컴포넌트///////
