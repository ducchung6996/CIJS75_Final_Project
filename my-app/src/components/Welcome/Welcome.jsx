import React from 'react'
import './Welcome.css'

const Welcome = () => {
  return (
    <div>
    <section id='welcome'>
      <div className="search-container">
      <div>Tìm Tên Cửa Hàng, Tên Món Ăn</div>
      <input type="text" placeholder="Hôm nay bạn ăn gì?" />
      </div>
    </section>
    </div>
  );
};

export default Welcome