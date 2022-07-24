import React, { useEffect, useState } from "react";
import "./Welcome.css";
import { BiSearchAlt } from "react-icons/bi";
import Tatca from "../Content/Tatca";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [keyword, setKeyWord] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searching, setSearching] = useState(false);
  const [result, setResult] = useState(false);
  useEffect(() => {
    let searchedResults = document.getElementById("searched-result-container");
    const handleCloseSearchedResult = function(e) {
      if (e.target === searchedResults) {
        setResult(false);
      }
    };
    document.addEventListener("click", handleCloseSearchedResult);
    return () => {
      document.removeEventListener("click", handleCloseSearchedResult);
    };
  });

  useEffect(() => {
    let arr = [];
    if (keyword === "") {
      setSearchResult([...arr]);
      return;
    }
    for (let item of Tatca) {
      if (
        item.title
          .toLocaleLowerCase()
          .replaceAll(" ", "")
          .includes(keyword.toLocaleLowerCase())
      ) {
        arr = [...arr, item];
      }
    }
    setSearchResult([...arr]);
  }, [keyword]);
  const handleSearch = (e) => {
    setKeyWord(e.target.value.replaceAll(" ", ""));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (JSON.stringify(searchResult) === "[]") {
      return;
    }
    setResult(true);
  };
  return (
    <div>
      <section id="welcome">
        <div className="search-container">
          <div className="wlc-title">Hải Phòng Là Không Lòng Vòng</div>
          <div className="wlc-subtitle">Tìm tên cửa hàng, tên món ăn</div>
          <form onSubmit={handleSubmit} className="wlc-search-bar">
            <input
              onFocus={() => setSearching(true)}
              onBlur={() => setSearching(false)}
              onChange={handleSearch}
              className="wlc-search-box"
              type="text"
              placeholder="Hôm nay bạn ăn gì?"
            />
            <button type="submit" className="wlc-search-btn">
              Tìm <BiSearchAlt />
            </button>
            <div className={`search-result-container ${searching && "active"}`}>
              {keyword === "" ? (
                <p className="no-result">Tìm kiếm...</p>
              ) : JSON.stringify(searchResult) === "[]" ? (
                <p className="no-result">Không có kết quả</p>
              ) : (
                searchResult.map((item) => {
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
              )}
            </div>
          </form>
        </div>
        <div id="searched-result-container" className={result ? "active" : ""}>
          <div className="searched-results">
            <button
              onClick={() => setResult(false)}
              className="searched-results-close"
              type="button"
            >
              Đóng
            </button>
            <h1 className="searched-results-title">Kết quả tìm kiếm</h1>
            <div className="results-container">
              {searchResult.map((item) => {
                return (
                  <Link
                    key={item.id}
                    to={`/fooddetail/${item.id}`}
                    className="searched-result"
                  >
                    <div className="todo-image-container">
                      <img
                        className="todo-image"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <h1 className="searched-result-title">{item.title}</h1>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
