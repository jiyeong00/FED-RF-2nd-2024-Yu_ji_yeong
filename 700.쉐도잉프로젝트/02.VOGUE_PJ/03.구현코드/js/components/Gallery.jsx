// 보그 JS 갤러리 컴포넌트

export default function Gallery() {
  let swiper;
  // 스와이퍼 인스턴스 생성함수
  const setSwiper = () => {
    swiper = new Swiper(".mySwiper", {
        // 한 화면당 슬라이드 수(아래 breakpoint로 설정함)
      slidesPerView: 1,
      //   슬라이드 간격
      spaceBetween: 10,
      //   무한넘기기
      loop: true,
      //   자동넘김
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      //   하단 불릿
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      //   양쪽이동버튼
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 가로 사이즈별 스와이퍼 설정변경
      breakpoints: {
        //   가로 200px이상
        200: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        //   가로 700px이상
        700: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        //   가로 1000px이상
        1000: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }; ///////////////setSwiper 함수///////////////////////////

  // 화면 랜더링 전 실행구역
  React.useLayoutEffect(() => {
    setSwiper();
    // 스와이퍼 API 테스트
    // 갤러리 제목(.stit)클릭 시 다음 슬라이드 넘기기
    $(".stit").click(()=>{
      // 변수를 담은 스와이퍼 인스터스의 구체적인 API 메서드를 호출하여
      // 기능을 수행한다
      // swiper.slideNext();
      swiper.slidePrev();
    });
  }); /////////////useLayoutEffect

  // 코드리턴 구역
  return (
    <div id="main-area">
      <main className="main-area ibx">
        {/* <!-- 2-1. 로그인 페이지 상단영역 --> */}
        <header className="ctop">
          {/* <!-- 2-1-1. 서브타이틀 --> */}
          <h2 className="stit">Gallery</h2>
        </header>
        {/* <!-- 2-2. 갤러리 페이지 컨텐츠 박스 --> */}
        <section className="scont">
          {/* <!-- Swiper --> */}
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="images/people/cont2-1a.jpg" alt="보그갤러리" />
              </div>
              <div className="swiper-slide">
                <img src="images/fashion/cont1-2b.jpg" alt="보그갤러리" />
              </div>
              <div className="swiper-slide">
                <img src="images/people/cont2-3a.jpg" alt="보그갤러리" />
              </div>
              <div className="swiper-slide">
                <img src="images/fashion/cont2-1b.jpg" alt="보그갤러리" />
              </div>
              <div className="swiper-slide">
                <img src="images/fashion/cont2-2b.jpg" alt="보그갤러리" />
              </div>
              <div className="swiper-slide">
                <img src="images/fashion/cont2-3b.jpg" alt="보그갤러리" />
              </div>
              <div className="swiper-slide">
                <img src="images/beauty/cont1-2a.jpg" alt="보그갤러리" />
              </div>
              <div className="swiper-slide">
                <img src="images/beauty/cont2-3b.jpg" alt="보그갤러리" />
              </div>
              <div className="swiper-slide">
                <img src="images/beauty/cont1-1b.jpg" alt="보그갤러리" />
              </div>
            </div>

            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
          </div>
        </section>
      </main>
    </div>
  );
} /////////////////////Gallery////////////////////
