// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image1 from "../resources/images/ab.jpg";
import globe from "../resources/icons/earth.png";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={300}
      slidesPerView={1.5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      //onSwiper={(swiper) => console.log(swiper)}
      //onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="member">
            <img src={image1} alt="" />
            <h5 className="name">Adolph Adu-Cherry</h5>
            <p className="role">Big Boss</p>
            <p className="quote">"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"</p>
        </div>
       </SwiperSlide>
      <SwiperSlide>
        <div className="member">
            <img src={image1} alt="" />
            <h5 className="name">Adolph Adu-Cherry</h5>
            <p className="role">Big Boss</p>
            <p className="quote">"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"</p>
        </div>
       </SwiperSlide>
      <SwiperSlide>
        <div className="member">
            <img src={image1} alt="" />
            <h5 className="name">Adolph Adu-Cherry</h5>
            <p className="role">Big Boss</p>
            <p className="quote">"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"</p>
        </div>
       </SwiperSlide>
      <SwiperSlide>
        <div className="member">
            <img src={image1} alt="" />
            <h5 className="name">Adolph Adu-Cherry</h5>
            <p className="role">Big Boss</p>
            <p className="quote">"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"</p>
        </div>
       </SwiperSlide>
    </Swiper>
  );
};