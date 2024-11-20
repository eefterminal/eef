import React, { useRef } from "react";
import "../index.css";
import vv from "./vv.png";
import pump from "./pump.png";
import x from "./x.png";
import tel from "./tel.png";
import song from "./song.mp3";

const Home = () => {
  const audioRef = useRef(null);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <div className="home">
        <div className="flex">
          <a
            href="https://vvaifu.fun/character/673a5cb074b9788b3c5d36b3"
            className="redirect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={vv} alt="vvaifu" />
          </a>
          <a
            href="https://pump.fun/coin/9cS2vsANfgEp9urCeDbbmsT7Y9Ci4mMW6JQpnEe4VHGZ"
            className="redirect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pump} alt="pumpfun" className="pump" />
          </a>
          <a
            href="https://x.com/eef_terminal"
            className="redirect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={x} alt="pumpfun" className="x" />
          </a>
          <a
            href="https://t.me/eefterminal"
            className="redirect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tel} alt="pumpfun" className="x" />
          </a>
        </div>
        <button className="play-button" onClick={handlePlayMusic}>
          Play Music
        </button>
      </div>
      <audio ref={audioRef}>
        <source src={song} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Home;
