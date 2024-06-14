// 캐릭터모듈 스와이퍼 플러그인 컴포넌트

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import $ from "jquery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

// 스와이퍼 비디오 모듈 css
import "./css/swiper_cat.scss";
// 데이터 불러오기
import { catListData } from "../data/swiper_cat";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export function SwiperCat() {
  // 선택데이터 변수할당
  const selData = catListData;

  return (
    <>
      <Swiper
        // slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다 */
        modules={[Navigation]}
        // 스와이퍼 사이즈별 슬라이드수 변경!
        breakpoints={{
          200: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 7,
          },
        }}
        className="mySwiper2"
      >
        {selData.map(
          (v, i) =>
            // idx번호가 7번이하만 출력
            // idx가 문자형 숫자이므로 비교를 위해 숫자형으로 변환해줌 Number(변수)
            Number(v.idx) <= 7 && (
              <SwiperSlide key={i}>
                <Link 
                to="/detail"
                // state로 3가지 값을 넘겨줌
                state={{
                  cname:v.cname,
                  cdesc:v.cdesc,
                  facts:v.facts
                }}
                >
                  <section className="sw-inbox2">
                    {/* 캐릭터이미지영역 */}
                    <div className="cat-img2">
                      <img src={v.tmsrc} alt={v.cname} />
                    </div>
                    {/* 캐릭터타이틀영역 */}
                    <div className="cat-tit2">
                      <h3>{v.cname}</h3>
                    </div>
                  </section>
                </Link>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </>
  );
} /////////// SwiperCat 컴포넌트 ///////////
