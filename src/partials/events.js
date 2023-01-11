import React from 'react';
import chall from "../resources/icons/chall.jpg";
import { Link } from 'react-router-dom';



const Events = () => {

  return (
    <div id="events" className="events">
        <div className="top">
          <div className="image">
            <img src={chall} alt="" />
          </div>
          <div className="text">
            <h4>Social/Club Events</h4>
            <p data-aos="fade-down">As you've most likely already guessed, Yes! AXLR8 as a club organizes some social activities among developers as well as attend external dev-gatherings. We've also participated in several developer competitions and contests such as <span className="highlight">World Skills</span>, <span className="highlight">Hackathon</span>, and<span className="highlight"> Codefest</span> just to name a few... check out our gallery for some more media in relation to our social activities.</p>
          </div>
        </div>
        <div className="bottom">
          <div className="images">
            <div className="big" data-aos="zoom-out">
            </div>
            <div className="smalls">
              <div className='pack' data-aos="fade-down">
                <div className="small one">
                </div>
                <div className="small three">
                </div>
              </div>
              <div className='pack' data-aos="fade-down">
                <div className="small two">
                </div>
                <div className="small four">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="link">
          <Link to="/gallery/photos">View Gallery</Link>
        </div>
      </div>
  )
}

export default Events;