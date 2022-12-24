import React from 'react';
import globe from "../resources/icons/earth.png";
import exec from "../resources/icons/exec.png";
import fuji from "../resources/images/fuji.jpg";
import alex from "../resources/images/alex.jpg";
import adolph from "../resources/images/adolph.jpg";
import tay from "../resources/images/tay.jpg";
import logo from "../resources/images/logo.png";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Thumbs, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Members = [
  {name: "Adolph Adu-Cherry",role: "Big Boss", quote: '"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"', imgURL: adolph},
  {name: "Tay Bernard",role: "Front Man", quote: '"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"', imgURL: tay},
  {name: "Agbo Manfuji",role: "Sus", quote: '"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"', imgURL: fuji},
  {name: "Sewor Eugene Emmanuel",role: "Project Lead", quote: '"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"', imgURL: logo},
  {name: "Seth iforgot",role: "iforgotagain", quote: '"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"', imgURL: logo},
  {name: "Titiati Elorm",role: "Head of inovation", quote: '"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"', imgURL: logo},
  {name: "Zormelo Alexander Dodzi",role: "PRO", quote: '"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"', imgURL: alex},
  {name: "Asiedu One",role: "another Big Boss", quote: '"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"', imgURL: logo},
  {name: "Hihihi",role: "Big Boss", quote: '"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"', imgURL: logo},
  {name: "sue me",role: "Big Boss", quote: '"IF ANYTHING MUST BE DONE, THEN IT MUST BE DONE WELL"', imgURL: logo},
];


const members = () => {
  return (
     <div className="member-section" id="members">
        <div className="container">
            <div className="members">
              <Swiper
                // install Swiper modules
               modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs, EffectFade]}
                speed={800}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                //grabCursor={true}
                className= 'members-slider'
                //scrollbar={{ draggable: true }}
                //effect='fade'
                //onSwiper={(swiper) => console.log(swiper)}
                //onSlideChange={() => console.log('slide change')}
              >
                {Members.map((member)=> 
                  <SwiperSlide>
                    <div className="member">
                      <img src={member.imgURL} alt="" />
                      <h5 className="name">{member.name}</h5>
                      <p className="role">{member.role}</p>
                      <p className="quote">{member.quote}</p>
                    </div>
                  </SwiperSlide>
                  )}
                </Swiper>
            </div>
        </div>
        <div className="other-thing" data-aos="fade-down">
          <div className="image">
            <img src={exec} alt="Members icon" />
          </div>
          <div className="texts">
            <h6>AXLR8 Executive</h6>
            <h2>Members</h2>
            <p>As a developer-social club our members are our utmost pride and priority and in that faith we are honored to have them... </p>
          </div>
        </div>
      </div>
  )
}

export default members;
