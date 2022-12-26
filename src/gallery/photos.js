import React from 'react';
import image1 from "../resources/images/group.jpg";
import dinnerNight from "../resources/images/IMG_9598.jpg";
import prez from "../resources/images/comt.jpg";
import tay from "../resources/images/tay.jpg";
import dinnerNight2 from "../resources/images/itweek.jpg";
import iot from "../resources/images/five.jpg";
import wskills from "../resources/images/wskills.jpg";
import out from "../resources/images/two.jpg";
import gallerypng from "../resources/icons/gallery.png"



const Photos = () => {
    const photos = [
        {imgUrl: dinnerNight, id:0},
        {imgUrl: prez, id:1},
        {imgUrl: tay, id:2},
        {imgUrl: dinnerNight2, id:3},
        {imgUrl: iot, id:4},
        {imgUrl: wskills, id:5},
        {imgUrl: out, id:6},
    ]
    const date = "May 25th, 2021";
  return (
    <div className='box'>
        <div className='flex'>
        <div>
          <div className="title">Photos</div>
          <p><span>{date}</span> - {photos.length} Images</p>
        </div>
        <img src={gallerypng} alt="png" />
      </div>
        <div className="images">
          {photos.map((picture)=>
            <div className="image" key={picture.id}>
                <img src={picture.imgUrl} alt="image" />
            </div>
          )}
          <div className="image">
            <img className='big' src={image1} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Photos;