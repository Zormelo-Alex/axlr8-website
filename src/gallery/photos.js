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
import p1 from "../resources/images/photos/photo_1@25-02-2022_07-52-27_thumb.jpg"
import p2 from "../resources/images/photos/photo_2@25-02-2022_07-52-27_thumb.jpg"
import p3 from "../resources/images/photos/photo_3@25-02-2022_07-52-27_thumb.jpg"
import p4 from "../resources/images/photos/photo_4@25-02-2022_07-52-27_thumb.jpg"
import p5 from "../resources/images/photos/photo_5@25-02-2022_07-52-27_thumb.jpg"
import p6 from "../resources/images/photos/photo_6@25-02-2022_07-52-27_thumb.jpg"
import p7 from "../resources/images/photos/photo_7@25-02-2022_07-52-27_thumb.jpg"
import p8 from "../resources/images/photos/photo_8@25-02-2022_07-52-27_thumb.jpg"
import p9 from "../resources/images/photos/photo_9@25-02-2022_07-52-27_thumb.jpg"
import p10 from "../resources/images/photos/photo_10@25-02-2022_07-52-27_thumb.jpg"
import p11 from "../resources/images/photos/photo_11@25-02-2022_07-52-28_thumb.jpg"
import p12 from "../resources/images/photos/photo_12@25-02-2022_07-52-28_thumb.jpg"
import p13 from "../resources/images/photos/photo_13@25-02-2022_07-52-28_thumb.jpg"
import p14 from "../resources/images/photos/photo_14@25-02-2022_07-52-28_thumb.jpg"
import p15 from "../resources/images/photos/photo_15@25-02-2022_07-52-28_thumb.jpg"
import p16 from "../resources/images/photos/photo_16@25-02-2022_07-52-28_thumb.jpg"
import p17 from "../resources/images/photos/photo_17@25-02-2022_07-52-28_thumb.jpg"
import p18 from "../resources/images/photos/photo_18@25-02-2022_07-52-29_thumb.jpg"
import p19 from "../resources/images/photos/photo_19@25-02-2022_07-52-29_thumb.jpg"
import p20 from "../resources/images/photos/photo_20@25-02-2022_07-52-29_thumb.jpg"
import p21 from "../resources/images/photos/photo_21@25-02-2022_07-52-40_thumb.jpg"
import p22 from "../resources/images/photos/photo_22@25-02-2022_07-52-40_thumb.jpg"
import p23 from "../resources/images/photos/photo_23@25-02-2022_07-52-40_thumb.jpg"
import p24 from "../resources/images/photos/photo_24@25-02-2022_07-52-40_thumb.jpg"
import p25 from "../resources/images/photos/photo_25@25-02-2022_07-52-49_thumb.jpg"
import p26 from "../resources/images/photos/photo_26@25-02-2022_07-52-49_thumb.jpg"
import p27 from "../resources/images/photos/photo_27@25-02-2022_07-52-49_thumb.jpg"
import p28 from "../resources/images/photos/photo_28@25-02-2022_07-52-49_thumb.jpg"
import p29 from "../resources/images/photos/photo_29@25-02-2022_07-52-49_thumb.jpg"
import p30 from "../resources/images/photos/photo_30@25-02-2022_07-52-49_thumb.jpg"



const Photos = () => {
    const photos = [
        {imgUrl: dinnerNight, id:0},
        {imgUrl: prez, id:1},
        {imgUrl: tay, id:2},
        {imgUrl: dinnerNight2, id:3},
        {imgUrl: iot, id:4},
        {imgUrl: wskills, id:5},
        {imgUrl: out, id:6},
        {imgUrl: p1, id:7},
        {imgUrl: p2, id:8},
        {imgUrl: p3, id:9},
        {imgUrl: p4, id:10},
        {imgUrl: p5, id:11},
        {imgUrl: p6, id:12},
        {imgUrl: p7, id:13},
        {imgUrl: p8, id:14},
        {imgUrl: p9, id:15},
        {imgUrl: p10, id:16},
        {imgUrl: p11, id:17},
        {imgUrl: p12, id:18},
        {imgUrl: p13, id:19},
        {imgUrl: p14, id:20},
        {imgUrl: p15, id:21},
        {imgUrl: p16, id:22},
        {imgUrl: p17, id:23},
        {imgUrl: p18, id:24},
        {imgUrl: p19, id:25},
        {imgUrl: p20, id:26},
        {imgUrl: p21, id:27},
        {imgUrl: p22, id:28},
        {imgUrl: p23, id:29},
        {imgUrl: p24, id:30},
        {imgUrl: p25, id:31},
        {imgUrl: p26, id:32},
        {imgUrl: p27, id:33},
        {imgUrl: p28, id:34},
        {imgUrl: p29, id:35},
        {imgUrl: p30, id:36},
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