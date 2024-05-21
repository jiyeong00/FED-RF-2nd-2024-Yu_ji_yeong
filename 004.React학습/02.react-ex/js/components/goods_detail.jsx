// 공유신발 불러오기
import guData from "../gu_data";
// console.log(guData);

// [ 상품 상세보기 서브컴포넌트 : GoodsDetail]
export default function GoodsDetail({ backList, gNo }) {
    // gNo - 상품 데이터 idx번호
    // idx상태관리변수가 전달된 - 이 값 변경시 컴포넌트 변경됨
    return (
      <ol
        style={{ display: "flex", listStyle: "none", justifyContent: "center" }}
      >
        <li>
          <img
            src={"./images/vans/vans_" + guData[gNo].idx + ".jpg"}
            alt="반스신발"
            style={{ width: "100%" }}
          />
        </li>
        <li style={{ lineHeight: "2", padding: "10px", textAlign: "left" }}>
          상품명 : {guData[gNo].gname}
          <br />
          가격 : {guData[gNo].gprice} <br />
          소재 : {guData[gNo].소재} <br />
          색상 : {guData[gNo].색상} <br />
          치수 : {guData[gNo].치수} <br />
          재조자/수입자 : {guData[gNo]["제조자/수입자"]}
          <br />
          제조국 : {guData[gNo].제조국}
          <br />
          제조연월 : {guData[gNo].제조연월}
          <br />
          A/S 책임자와 전화번호 :{guData[gNo]["A/S 책임자와 전화번호"]} <br />
          Model : {guData[gNo].Model}
          <br />
          <div className="btnbx" style={{ textAlign: "right", padding: "15px" }}>
            <button
              onClick={() => backList(true)}
              style={{
                fontSize: "24px",
              }}
            >
              리스트로 가기
            </button>
          </div>
        </li>
      </ol>
    );
  } ///////////GoodsDetail컴포넌트///////////