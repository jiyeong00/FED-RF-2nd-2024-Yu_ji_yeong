// 공통처리 JS

// 초이스 인트로 애니실행함수
const choiceIntroAni = () => {
  // 글자커지기 테스트
  $(".tit span")
    .css({ display: "inline-block" })
    .animate({ scale: "200%" }, 1000)
    .animate({ scale: "100%" }, 1000);

  // 초이스 메인이미지 애니
  $(".img-box img").delay(700).fadeTo(1000, 1);
  // 소제목 애니
  $(".stit")
    .css({ translate: "20px 0" })
    .delay(1500)
    .animate({ translate: "0 0", opacity: "1" }, 1000);
  // fadeTo(시간,투명도) -> opacity만 조절하는 애니메서드
}; ////////////choiceIntroAni///////////

// 로고애니 실행함수
const logoAni = () => {
  $("#logo")
    .animate({ scale: "200%", rotate: "360deg" }, 1000)
    .animate({ scale: "100%", rotate: "0deg" }, 1000);
}; ///////logoAni//////////////////


// 초기화함수
const initFn=()=>{
    $(".img-box img,.stit").css({ opacity: 0 });
    window.scrollTo(0,0);
};/////////////initFn////////////

export { choiceIntroAni, logoAni,initFn };
