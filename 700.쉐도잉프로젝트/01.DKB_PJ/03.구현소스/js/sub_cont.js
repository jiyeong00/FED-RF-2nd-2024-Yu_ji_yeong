// 메인 페이지에서 서브 컨텐츠 띄우는 구현코드
// 데이터 셋팅 불러오기 //////
import * as dkbData from "../data/dkb_data.js";

export default function showSubBox() {
  console.log("서브 보임");

  // 1. 서브 컨첸츠 보이기 기능 구현
  // (1) 대상선정
  // 1-1. 이벤트 대상 :
  // .preview-box li - 미리보기
  // .live-box li - 현장포토
  // .poster-box li- 대표이미지
  // .clip-box li - 최신동영상
  const subViewBox = $(`
    .preview-box li,
    .live-box li,
    .poster-box li,
    .clip-box li
    `);

  // 1-2. 변경대상 .sub-cont
  const subContBox = $(".sub-cont");

  // 전체 휠 이벤트 막기때문에 서브컨텐츠박스도 휠이 안먹힘
  // 따라서 휠 이벤트 버블링 막기를 해야함
  subContBox.on("wheel",(e=>e.stopPropagation()));

  // 2. 이벤트 설정 및 함수 구현하기
  subViewBox.click(function () {
    let confPrt = $(this).parent().parent().is(".preview-box");

    //  [ 데이터명을 data-db에 넣고 읽어오기 ]
    // 사용하고자 하는 데이터 이름을 ul태그의 data-db속성에 담아 놓고 이것을 읽어온다
    let db = $(this).parent().attr("data-db");

    // 위를 JS문법에서 사용하면 아래와 같음
    // this.parentElement.parentElement.classList.contains(클래스명)

    console.log("나야나", db);
    // parent()는 바로 위 상위요소로 이동

    // if(confPrt){
    // 1. 키속성값 읽어오기
    let idx = $(this).attr("data-idx");
    // attr(속성명) - 속성값 읽어오기 메서드
    // attr(속성명,속성값) - 속성값 넣기 메서드
    // console.log("속성값 읽어오기",idx,dkbData.previewData);

    // [ 배열순회 메서드 비교 ]
    // forEach()는 모두 순회한다
    // find()는 조건에 맞을때 return true하면 해당 배열값이 변수에 할당된다.
    //  만약 일치하는 데이터가 없으면 undefined된다.
    // dkbData.previewData.forEach(v=>{
    // dkbData[db] <<< 해당데이터 매칭하기
    let selData = dkbData[db].find((v) => {
      if (v.idx == idx) {
        // console.log("찾았다",v);
        return true;
      }
      console.log("돌아");
    });

    console.log("검색결과 : ", selData);

    // 이미지의 개수를 반영한 배열을 임의로 만들고 필요한 경우 이 배열로 map()을 돌려서 
    // 코드를 생성한다
    // 우선 빈배열을 만든다.
    let iarr=[];
    // 현장포토일때 사용
    if(db == "liveData"){
      for(let i=0; i<selData.imgName[1];i++){
        iarr[i]="";
      }//////for문

      console.log("이미지map을 위한 배열:",iarr);
    }///if문

    // 서브박스에 내용 넣기
    subContBox
      .html(
        // 1. 미리보기 출력
        db == "previewData"
          ? `
        <button class="cbtn">×</button>
        <div class="sub-inbox inbox">
            <h1>${selData.title}</h1>
            <div class="sub-item scbar">${selData.story}</div>
        </div>
        `
          : // 2. 현장포토 출력
          db == "liveData"
          ? `
        <button class="cbtn">×</button>
        <div class="sub-inbox inbox">
            <h1> 현장포토 : ${selData.title}</h1>
            <div class="sub-item scbar">
            ${iarr.map((v,i)=>`
            <img src="./images/live_photo/${selData.imgName[0]}/${i+1}.jpg" alt="${selData.title}" />
            `).join("")}
            </div>
        </div>
        `
          : // 3. 대표이미지 출력
          db == "posterData"
          ? `
        <button class="cbtn">×</button>
        <div class="sub-inbox inbox">
            <h1> 대표 이미지 : ${selData.title}</h1>
            <div class="sub-item scbar">
              <img src="./images/poster_img/${selData.imgName}_big.jpg" alt="${selData.title}" />
            </div>
        </div>
        `
          : // 4. 최신동영상 출력
          db == "clipData"
          ? `
      <button class="cbtn">×</button>
      <div class="sub-inbox inbox">
          <h1> 클립영상 : ${selData.title}</h1>
          <div class="sub-item scbar">
          <iframe src="https://www.youtube.com/embed/${selData.mvid}?autoplay=1" allow="autoplay"></iframe>
          <h2>${selData.subtit}</h2>
          </div>
      </div>
      `
          : `
      <button class="cbtn">×</button>
      <div class="sub-inbox inbox">
        <h1>DB정보확인필요!</h1>
          </div>
      </div>
      `
      )
      .show();
    // .show()는 diplay를 보여주는 메서드
    // .hide()는 display를 숨기는 메서드
    // .toggle()는 display를 토글하는 메서드
    // }//////////if

    // 닫기버튼 이벤트 설정하기
    $(".cbtn").click(() => subContBox.hide());
  }); /////////click
} ///////////////////showSubBox
