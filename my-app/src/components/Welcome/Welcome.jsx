import React from 'react'
import './Welcome.css'

const Welcome = () => {
  return (
    <div>
    <section id='welcome'>
      <div className="search-container">
      <div className="wlc-title">Hải Phòng Là Không Lòng Vòng</div>
      <div className="wlc-subtitle">Tìm tên cửa hàng, tên món ăn</div>
      <input className="wlc-search-box" type="text" placeholder="Hôm nay bạn ăn gì?" />
      <button className="wlc-search-btn">Tìm </button>
      </div>
    </section>
    </div>
  );
};

export default Welcome