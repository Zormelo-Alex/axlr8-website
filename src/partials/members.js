import React from 'react';
import image1 from "../resources/images/ab.jpg";
import globe from "../resources/icons/earth.png";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const members = () => {
  return (
     <div className="member-section" id="members">
        <div className="container">
            <div className="members">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                //scrollbar={{ draggable: true }}
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
            </div>
        </div>
        <div className="other-thing">
          <div className="image">
            <img src={globe} alt="Members icon" />
          </div>
          <div className="texts">
            <h6>Handpicked places</h6>
            <h2>Members</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere exercitationem cumque! Adipisci harum, cumque dolores ea fugit ad saepe pariatur numquam dolorum doloremque, fuga delectus vel similique ipsa earum!</p>
          </div>
        </div>
      </div>
  )
}

export default members;




    //   <Swiper
    //   // install Swiper modules
    //   modules={[Navigation, Pagination, Scrollbar, A11y]}
    //   spaceBetween={50}
    //   slidesPerView={2}
    //   navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    // >
    //   <SwiperSlide>
    //     <div className="member">
    //       <h5 className="name">Adu-Cherry</h5>
    //       <p className="role">Big Boss</p>
    //       <p className="quote">"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"</p>
    //     </div>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <div className="member">
    //       <h5 className="name">Adu-Cherry</h5>
    //       <p className="role">Big Boss</p>
    //       <p className="quote">"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"</p>
    //     </div>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <div className="member">
    //       <h5 className="name">Adu-Cherry</h5>
    //       <p className="role">Big Boss</p>
    //       <p className="quote">"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"</p>
    //     </div>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <div className="member">
    //       <h5 className="name">Adu-Cherry</h5>
    //       <p className="role">Big Boss</p>
    //       <p className="quote">"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"</p>
    //     </div>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <div className="member">
    //       <h5 className="name">Adu-Cherry</h5>
    //       <p className="role">Big Boss</p>
    //       <p className="quote">"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"</p>
    //     </div>
    //   </SwiperSlide>
    //   ...
    // </Swiper>