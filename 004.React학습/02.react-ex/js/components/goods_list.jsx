// 공유신발 불러오기
import guData from "../gu_data";
// console.log(guData);

// [ 상품리스트 서브컴포넌트 : GoodsList]
export default function GoodsList({ viewDetail, updateIdx }) {
    // viewDetail - 부모컴포넌트가 전달해준 상태변수 viewList를 업데이트하는 setViewList메서드임
    // updateIdx - 부모컴포넌트의 setIdx 상태관리변수 메서드
    return (
      <ul>
        {
          // 반복요소 li에 key속성을 쓸 것을 권고함
          // 쓰이는 곳 >>> 업데이트 시 순번구분을 위함
          // node.js개발환경에서는 안쓰면 에러남
          guData.map((v, i) => (
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
                    <img src={`./images/vans/vans_${v.idx}.jpg`} alt="신발" />
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