import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CustomCard from "../CustomCard";

// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper";
type Props = {
  id?: any;
  image?: string;
  name?: any;
  type?: string;
  about?: string;
  price?: any;
  updated_at?: any;
  data?: any;
};
const SlideCustomCard: React.FC<Props> = ({ data }) => {
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
        slidesPerView={4}
        spaceBetween={30}
        navigation={nav}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.slice(0, 9).map((item: any) => (
          <SwiperSlide>
            <CustomCard
              id={item.services_id}
              name={item.name}
              type={item.type}
              about={item.about}
              price={item.price}
              updated_at={item.updated_at}
              image={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideCustomCard;
