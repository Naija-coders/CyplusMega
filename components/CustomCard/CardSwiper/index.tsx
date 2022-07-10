import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Lazy, EffectFlip, Pagination, Navigation } from "swiper";
type Props = {
  id?: any;
  image?: string;
  name?: any;
  type?: string;
  about?: string;
  price?: any;
  updated_at?: any;
};
let value;

const CustomCardSwiper: React.FC<Props> = ({ image }) => {
  const [nav, setNav] = useState(false);
  const [anchorElmenu, setAnchorElmenu] = React.useState<null | HTMLElement>(
    null
  );

  return (
    <div
      style={{ height: "100%" }}
      onMouseEnter={() => setNav(true)}
      onMouseLeave={() => setNav(false)}
    >
      <Swiper
        lazy={true}
        effect={"flip"}
        grabCursor={false}
        navigation={nav}
        modules={[Lazy, EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default CustomCardSwiper;
