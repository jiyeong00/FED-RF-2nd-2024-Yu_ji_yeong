// 스와이퍼 플러그인 컴포넌트

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

// 스와이퍼 비디오 모듈 css
import "./css/swiper_vid.scss";
// 데이터 불러오기
import { swVidData } from "../data/swiper_vid";
import { Navigation } from "swiper/modules";

export function SwiperVid({ catName }) {
  // 선택데이터 변수할당
  const selData = swVidData[catName];

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다 */
        modules={[Navigation]}
        className="mySwiper"
      >
        {selData.map((v, i) => (
          <SwiperSlide key={i}>
            <section className="sw-inbox">
              {/* 동영상이미지박스 */}
              <div className="vid-img">
                <img src={v.isrc} alt={v.tit} />
                {/* 폰트어썸 아이콘 */}
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  style={{
                    position: "absolute",
                    bottom: "55%",
                    left: "10%",
                    color: "#fff",
                    fontSize: "50px",
                  }}
                />
              </div>
              {/* 동영상 타이틀 박스 */}
              <div className="vid-tit">
                <h4>{v.cat}</h4>
                <h3>{v.tit}</h3>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
} /////////// SwiperVid 컴포넌트 ///////////
