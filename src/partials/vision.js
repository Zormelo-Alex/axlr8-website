import React from 'react';
import video1 from "../resources/videos/kunt.mp4";

const vision = () => {
  return (
    <div className="vision" id='about'>
        <div className="side" data-aos="fade-up">
          <div className="text">
            <p className="heading">Wondering...</p>
            <h2>Why AXLR8?</h2>
            <p className="more">AXLR8 is a <span className='highlight'>multi-award wining</span> developer club of <span className='highlight'>Ho Technical University</span>, specifically the Computer Science department. Most of our top executive members are <span className='highlight'>licenced educators</span>. We pride ourselves on the simple fact that no single member who joins the club and stays commited to our core principles fails to become better off, afterall it was for that exact <span className='highlight'>vision</span> the club was founded; To nurture growing tech personnels into becoming the best!</p>
          </div>
        </div>
        <div className="other">
          <video controls loop>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      </div>
  )
}

export default vision;