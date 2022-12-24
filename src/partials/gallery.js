import React from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from "../resources/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import Photos from '../gallery/photos';
import Videos from "../gallery/videos";
import Albums from "../gallery/albums";
import Collections from "../gallery/collections";


const Gallery = () => {
    const burger = () => {
        document.querySelector(".contain").classList.toggle("active");
      }
      const lis = () => {
        document.querySelector(".contain").classList.remove("active");
      }
      const {name} = useParams();
  return (
    <>
        <div className="contain">
            <div className="bg">
                <div onClick={burger} className="burger">
                    <div className="line"></div>
                    <div className="line two"></div>
                    <div className="line three"></div>
                </div>
                <div className="nav">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="axlr8 logo" />
                            <p>AXLR8</p>
                        </Link>
                    </div>
                    <div className="library">
                        <h2 className="tag">Library</h2>
                        <ul>
                            <li onClick={lis}><Link to="/gallery/photos"><FontAwesomeIcon icon={faImage}></FontAwesomeIcon>Photos</Link></li>
                            <li onClick={lis}><Link to="/gallery/videos"><FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>Videos</Link></li>
                            <li onClick={lis}><Link to="/gallery/albums"><FontAwesomeIcon icon={faImages}></FontAwesomeIcon>Albums</Link></li>
                            <li onClick={lis}><Link to="/gallery/collections"><FontAwesomeIcon icon={faTableCellsLarge}></FontAwesomeIcon>Collections</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main">
                {name=="photos" && <Photos />}
                {name=="videos" && <Videos /> }
                {name=="albums" && <Albums /> }
                {name=="collections" && <Collections /> }
            </div>
        </div>
    </>
  )
}

export default Gallery;