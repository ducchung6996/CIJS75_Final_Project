import React, { useEffect, useState } from "react";
import "./Welcome.css";
import { BiSearchAlt } from "react-icons/bi";
import Tatca from "../Content/Tatca";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [keyword, setKeyWord] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searching, setSearching] = useState(false);
  useEffect(() => {
    let arr = [];
    if (keyword === "") {
      setSearchResult([...arr]);
      return;
    }
    for (let item of Tatca) {
      if (
        item.title
          .toLocaleLowerCase().replaceAll(" ", "")
          .includes(keyword.toLocaleLowerCase())
      ) {
        arr = [...arr, item];
      }
    }
    setSearchResult([...arr]);
    console.log(arr);
  }, [keyword]);
  const handleSearch = (e) => {
    setKeyWord(e.target.value.replaceAll(" ", ""));
  };
  return (
    <div>
      <section id="welcome">
        <div className="search-container">
          <div className="wlc-title">Hải Phòng Là Không Lòng Vòng</div>
          <div className="wlc-subtitle">Tìm tên cửa hàng, tên món ăn</div>
          <div className="wlc-search-bar">
            <input
              onFocus={() => setSearching(true)}
              onBlur={() => setSearching(false)}
              onChange={handleSearch}
              className="wlc-search-box"
              type="text"
              placeholder="Hôm nay bạn ăn gì?"
            />
            <button className="wlc-search-btn">
              Tìm <BiSearchAlt />
            </button>
            <div className={`search-result-container ${searching && "active"}`}>
              {keyword === "" ? 
                <p className="no-result">Tìm kiếm...</p>
               :
               JSON.stringify(searchResult) === "[]" ? <p className="no-result">Không có kết quả</p> : searchResult.map((item) => {
                  return (
                    <Link
                      className="search-result"
                      key={item.id}
                      to={`/fooddetail/${item.id}`}
                    >
                      {item.title}
                    </Link>
                  );
                })
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
