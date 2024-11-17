import React from "react";
import "../index.css";
import vv from "./vv.png";
import pump from "./pump.png";
import x from "./x.png";
import song from "./song.mp3";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="flex">
          <a href="https://vvaifu.fun" className="redirect" target="_blank ">
            <img src={vv} alt="vvaifu" />
          </a>
          <a href="https://pump.fun/board" className="redirect" target="_blank ">
            <img src={pump} alt="pumpfun"  className="pump"/>
          </a>
          <a href="https://x.com/eef_terminal" className="redirect" target="_blank ">
            <img src={x} alt="pumpfun"  className="x"/>
          </a>
        </div>
      </div>
      <audio autoPlay loop>
        <source src={song} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Home;
