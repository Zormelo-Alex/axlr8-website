import React from 'react';
import video1 from "../resources/videos/kunt.mp4";

const vision = () => {
  return (
    <div className="vision">
        <div className="side">
          <div className="text">
            <p className="heading">choose your</p>
            <h2>Perfect destinations</h2>
            <p className="more">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos temporibus optio perspiciatis voluptatibus tempore neque consequatur culpa officia voluptas? Explicabo, error obcaecati voluptates veniam placeat tempora ducimus reprehenderit eius!</p>
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