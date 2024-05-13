// 메인 페이지에서 서브 컨텐츠 띄우는 구현코드

export default function showSubBox(){
    console.log("서브 보임");

    // 1. 서브 컨첸츠 보이기 기능 구현
    // (1) 대상선정
    // 1-1. 이벤트 대상 : 
    // .preview-box li - 미리보기
    // .live-box li - 현장포토
    const subViewBox=$(".preview-box li,.live-box li");

    // 1-2. 변경대상 .sub-cont
    const subContBox=$(".sub-cont");

    // 2. 이벤트 설정 및 함수 구현하기
    subViewBox.click(function(){
        console.log("나야나",this);
    });/////////click
}///////////////////showSubBox