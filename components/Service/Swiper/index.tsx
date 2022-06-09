import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

interface Props {
  myimage?: [] | any;
}
const SwiperThumb: React.FC<Props> = ({ myimage }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [userimage, setUserimage] = useState([myimage]);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {userimage?.map((items) => (
          <SwiperSlide key={Math.random()}>
            <img src={items?.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      {}
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3"
      >
        {userimage?.map((items) => (
          <SwiperSlide key={Math.random()}>
            <img src={items?.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperThumb;
