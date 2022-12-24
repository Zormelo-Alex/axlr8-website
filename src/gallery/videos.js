import React from 'react';
import video1 from "../resources/videos/kunt.mp4";
import gallerypng from "../resources/icons/gallery.png"
const videos = () => {
  const videos = [
      {vidUrl: video1, id:0},
      {vidUrl: video1, id:1},
      {vidUrl: video1, id:2},
      {vidUrl: video1, id:3},
      {vidUrl: video1, id:4},
      {vidUrl: video1, id:5},
      {vidUrl: video1, id:6},
  ]
  const date = "May 25th, 2021";
return (
  <div className='box'>
      <div className='flex'>
        <div>
          <div className="title">Videos</div>
          <p><span>{date}</span> - {videos.length} Videos</p>
        </div>
        <img src={gallerypng} alt="png" />
      </div>
      <div className="images">
        {videos.map((video)=>
          <div className="image" key={video.id}>
            <video controls muted>
              <source src={video.vidUrl}/>
            </video>
          </div>
        )}
      </div>
  </div>
)
}

export default videos;