import React from "react";
import ReactPic from "../../../../images/react.png";
import Algo from "../../../../images/what-is-an-algorithm-featured.png";

function CardItem2() {
  return (
    <>
      <div className="card-item">
        <div className="for-img c">
          <img
            src={ReactPic}
            alt=""
            className="for-img-pic" /*onDrag={() => handleHover}*/
          />
        </div>
        <div className="work-t-p-b">
          <div className="work-t">
            <h3>React</h3>
          </div>
          <div className="work-p">
            <p>Portofolio page worked in React.</p>
          </div>
          <div className="work-b">
            <button
              className="work-btn"
              // onClick={() => {
              //   window.location.href =
              //     "https://github.com/TarikCata/my-website";
              // }}
            >
              See more
            </button>
          </div>
        </div>
      </div>

      <div className="card-item">
        <div className="for-img d">
          <img src={Algo} alt="" className="for-img-pic" />
        </div>
        <div className="work-t-p-b">
          <div className="work-t">
            <h3>Data Structures And Algorithms</h3>
          </div>
          <div className="work-p">
            <p>Dijkstra Hashing Sortings...</p>
          </div>
          <div className="work-b">
            <button
              className="work-btn"
              onClick={() => {
                window.location.href =
                  "https://github.com/TarikCata/Algoritmi-Strukture-Podataka";
              }}
            >
              See more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem2;
