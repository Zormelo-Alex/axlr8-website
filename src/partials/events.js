import React from 'react';
import globe from "../resources/icons/earth.png";

const events = () => {
  return (
    <div id="about" className="events">
        <div className="top">
          <div className="image">
            <img src={globe} alt="" />
          </div>
          <div className="text">
            <h4>Countries travel</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, illo cum dolorum tempore maxime voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus aliquam, excepturi, doloremque illo maxime, quaerat autem repellendus illum magni in alias hic quasi explicabo unde praesentium vitae nostrum error.</p>
          </div>
        </div>
        <div className="bottom">
          <div className="images">
            <div className="big">
            </div>
            <div className="smalls">
              <div className="small one">
              </div>
              <div className="small three">
              </div>
              <div className="small two">
              </div>
              <div className="small">
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default events;