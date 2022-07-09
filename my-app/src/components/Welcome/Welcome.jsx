import React from 'react'
import './Welcome.css'
import {BiSearchAlt} from 'react-icons/bi'

const Welcome = () => {
  return (
    <div>
    <section id='welcome'>
      <div className="search-container">
        <div className="wlc-title">Hải Phòng Là Không Lòng Vòng</div>
        <div className="wlc-subtitle">Tìm tên cửa hàng, tên món ăn</div>
        <div className='wlc-search-bar'>
          <input className="wlc-search-box" type="text" placeholder="Hôm nay bạn ăn gì?" />
          <button className="wlc-search-btn">Tìm <BiSearchAlt/></button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Welcome