// 산너머산 서브 컴포넌트
import { 누구냐 } from "./components/provider";
import { mtInfo } from "../mt_data";
import MtIcon from "./mt_icon";

export default function 이야기() {
  // 컨텍스트를 사용하려면 useContext()메서드 사용 <<<< 함수용
  const 나야나 = React.useContext(누구냐);
  // 산정보는 배열이므로 순회하여 해당데이터를 할당함
  const selMtInfo = mtInfo.find((v) => {
    if (v.이름 == 나야나.mtName) return true;
  });
  console.log(selMtInfo);

  // 버튼 만들기에 사용할 산이름 배열 만들기
  // 기존 산정보 객체의 배열에서 산이름값만 모아 새로운 배열을 만든다.
  const mtTotal = mtInfo.map((v) => v.이름);
  console.log("산이름만 새배열", mtTotal);

  // 산이름 변경메서드
  const changeMtName = (e) => {
    console.log(e.target.innerText);
    // 부모 프로바이더로 부터 전달받은 상태변수 변경 메서드를 사용하여 산이름을 업데이트한다.
    나야나.setMtName(e.target.innerText);
  }; //////////changeMtName메서드
  return (
    <div style={나야나.mtBoxCss}>
      {/* 산이름 */}
      <h1>
        {나야나.mtName !="후지산" && <MtIcon mtName={나야나.mtName} />}
        {나야나.mtName}
        {나야나.mtName !="후지산" && <MtIcon mtName={나야나.mtName} />}
      </h1>
      {/* 산 이미지 */}
      <img
        src={selMtInfo.이미지}
        alt={selMtInfo.이름}
        style={{ width: "100%" }}
      />
      {/* 산정보박스 */}
      <div style={나야나.mtInfoBoxCss}>
        <ul>
          <li>이름: {selMtInfo.이름}</li>
          <li>설명: {selMtInfo.설명}</li>
          <li>높이: {selMtInfo.높이}</li>
          <li>융기: {selMtInfo.융기}</li>
          <li>최초등반: {selMtInfo.최초등반}</li>
          <li>최초등반가: {selMtInfo.최초등반가}</li>
          <li>산맥: {selMtInfo.산맥}</li>
        </ul>
      </div>
      {/* 현재 산을 제외한 나머지ㅣ 산 버튼 생성하기 */}
      {mtTotal.map(
        (v) =>
          v != 나야나.mtName && (
            <button
              onClick={changeMtName}
              style={{
                padding: "15px",
                fontSize: "20px",
                margin: "10px",
              }}
            >
              {v}
            </button>
          )
      )}
    </div>
  );
} ////////////////이야기////////////////
