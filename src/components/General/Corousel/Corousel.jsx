import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverFlow } from "swiper";
import CardKiosko from "@components/Cliente/Inicio/Commerce/components/CardKiosko";

const Corousel = ({ children }) => {
  return (
    <Swiper
      centeredSlides
      slidesPerView="auto"
      effect="coverflow"
      loop
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverFlow]}
    >
      <div className="swiper-wrapper">
        {data.map((d) => {
          <SwiperSlide>
            <CardKiosko commerce={data} />
          </SwiperSlide>;
        })}
      </div>
    </Swiper>
  );
};

export default Corousel;
