import React, { useState, useEffect } from "react";

// -----------Birds Img------------
import bird1 from "../../../assets/birds/bird1.svg";
import bird2 from "../../../assets/birds/bird2.svg";

// -----------Cloud IMG------------
import cloud1 from "../../../assets/cloud/cloud1.svg";
import cloud2 from "../../../assets/cloud/cloud2.svg";
import cloud3 from "../../../assets/cloud/cloud3.svg";

//------------Hand IMG--------------

// ------------Home Img-------------
import chimney from "../../../assets/home/chimney.svg";
import wall1 from "../../../assets/home/wall-1.svg";
import wall2 from "../../../assets/home/wall-2.svg";
import roof1 from "../../../assets/home/roof.svg";
import roof3 from "../../../assets/home/backroof.svg";
import roof2 from "../../../assets/home/roof-top.svg";
import roof4 from "../../../assets/home/rooftop1.svg";
import gate from "../../../assets/home/gate.svg";
import frontw1 from "../../../assets/home/window1.svg";
import frontw2 from "../../../assets/home/window2.svg";
import frontw3 from "../../../assets/home/window3.svg";
import frontw4 from "../../../assets/home/window4.svg";
import frontw5 from "../../../assets/home/window5.svg";
import frontw6 from "../../../assets/home/window6.svg";

// ---------- Plant Img----------
import plant1 from "../../../assets/plant/plant1.svg";
import plant2 from "../../../assets/plant/plant2.svg";

//--------------Sun IMG-------------
import sun from "../../../assets/sun/sun.svg";

const TopBg = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 5) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* -----------------Top Component----------------- */}
      <div className="w-[6.8rem] -translate-y-[400px] translate-x-[400px]">
        <div className="top-img">
          {/* Birds Image */}
          <img
            src={bird1}
            alt="Bird 1"
            className={`absolute w-[100px] h-[40px] transform transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[250px] translate-y-[190px]"
                : "opacity-50 translate-x-[-600px] translate-y-[100px]"
            }`}
          />
          <img
            src={bird2}
            alt="Bird 2"
            className={`absolute w-[100px] h-[40px] transform transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[450px] translate-y-[250px]"
                : "opacity-50 translate-x-[-310px] translate-y-[420px]"
            }`}
          />
          {/* Cloud Images */}
          <img
            src={cloud1}
            alt="Cloud 1"
            className={`absolute opacity-30 w-[100px] h-[40px] transform translate-x-[-260px] translate-y-[45px] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[250px] translate-y-[150px]"
                : ""
            }`}
          />
          <img
            src={cloud2}
            alt="Cloud 2"
            className={`absolute opacity-50 w-[170px] h-[60px] transform translate-x-[-50%] translate-y-[160px] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[70px] translate-y-[220px]"
                : ""
            }`}
          />
          <img
            src={cloud3}
            alt="Cloud 3"
            className={`absolute opacity-50 w-[120px] h-[40px] transform translate-x-[-520px] translate-y-[430px] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[340px] translate-y-[175px]"
                : ""
            }`}
          />

          {/* Sun Image */}
          <img
            src={sun}
            alt="Sun"
            className={`absolute opacity-[0.6] w-[620px] h-[600px] transform translate-x-[-360px] translate-y-[-50px] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-[0.06] w-[80px] h-[60px] translate-x-[630px] translate-y-[100px]"
                : ""
            }`}
          />

          {/* Plant Images */}
          <img
            src={plant1}
            alt="Plant 1"
            className={`absolute w-[60px] h-[80px] opacity-20 z-0 transform translate-x-[510px] translate-y-[520px] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[510px] translate-y-[390px]"
                : ""
            }`}
          />
          <img
            src={plant2}
            alt="Plant 2"
            className={`absolute w-[70px] h-[90px] opacity-20 z-0 transform translate-x-[208px] translate-y-[590px] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[207px] translate-y-[390px]"
                : ""
            }`}
          />

          {/* ----------Home Images------------ */}
          {/* Roof and Wall Images */}
          <img
            src={roof3}
            alt="Roof 3"
            className={`absolute w-[190px] h-[120px] opacity-[0.2] z-0 transform translate-x-[-625px] translate-y-[470px] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[325px] translate-y-[270px]"
                : ""
            }`}
          />
          <img
            src={roof1}
            alt="Roof 1"
            className={`absolute w-[190px] h-[140px] opacity-[0.1] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[21.2vw] translate-y-[30vh] rotate-[360deg]"
                : "translate-x-[-55vw] translate-y-[75vh]"
            }`}
          />
          <img
            src={roof4}
            alt="Roof 4"
            className={`absolute w-[85px] h-[140px] opacity-[0.06] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[300px] translate-y-[200px]"
                : "translate-x-[250px] translate-y-[330px]"
            }`}
          />
          <img
            src={roof2}
            alt="Roof 2"
            className={`absolute w-[90px] h-[170px] opacity-[0.2] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[205px] translate-y-[155px] rotate-[360deg]"
                : "translate-x-[-115px] translate-y-[445px]"
            }`}
          />
          <img
            src={wall1}
            alt="Wall 1"
            className={`absolute w-[80px] h-[20px] opacity-100 transform rotate-[20deg] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "w-[170px] h-[110px] right-[25.4rem] top-[7rem] rotate-[360deg] translate-x-[1px] translate-y-[1px]"
                : "translate-x-[-450px] translate-y-[191px]"
            }`}
          />
          <img
            src={wall2}
            alt="Wall 2"
            className={`absolute w-[80px] h-[20px] opacity-100 transform rotate-[30deg] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "w-[160px] h-[180px] right-[18.3rem] top-[1rem] rotate-[360deg] translate-x-[2px] translate-y-[3px]"
                : "translate-x-[-350px] translate-y-[230px]"
            }`}
          />

          {/* Window Images */}
          <img
            src={frontw1}
            alt="Window 1"
            className={`absolute h-[60px] w-[30px] opacity-[0.06] transform translate-x-[31vw] translate-y-[52vh] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[22.5vw] translate-y-[45vh]"
                : ""
            }`}
          />
          <img
            src={frontw2}
            alt="Window 2"
            className={`absolute h-[60px] w-[30px] opacity-[0.06] transform translate-x-[28vw] translate-y-[52vh] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[28vw] translate-y-[45vh]"
                : ""
            }`}
          />
          <img
            src={frontw3}
            alt="Window 3"
            className={`absolute h-[60px] w-[30px] opacity-[0.06] transform translate-x-[25vw] translate-y-[52vh] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[32.5vw] translate-y-[42vh]"
                : ""
            }`}
          />
          <img
            src={frontw4}
            alt="Window 4"
            className={`absolute h-[60px] w-[30px] opacity-[0.06] transform translate-x-[22vw] translate-y-[52vh] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[37vw] translate-y-[42vh]"
                : ""
            }`}
          />
          <img
            src={frontw5}
            alt="Window 5"
            className={`absolute h-[40px] w-[25px] opacity-[0.06] transform translate-x-[19vw] translate-y-[54vh] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[32.7vw] translate-y-[42vh]"
                : ""
            }`}
          />
          <img
            src={frontw6}
            alt="Window 6"
            className={`absolute z-[1] h-[35px] w-[25px] opacity-[0.06] transform translate-x-[16vw] translate-y-[54vh] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[25.5vw] translate-y-[50vh]"
                : ""
            }`}
          />

          {/* Gate and Chimney Images */}
          <img
            src={gate}
            alt="Gate"
            className={`absolute h-[80px] w-[30px] transform translate-x-[80px] translate-y-[85vh] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[20px] translate-y-[55vh]"
                : ""
            }`}
          />
          <img
            src={chimney}
            alt="Chimney"
            className={`absolute h-[25px] w-[25px] opacity-[0.2] transform translate-x-[430px] translate-y-[330px] transition-all duration-[2s] ease-in-out ${
              isScrolled
                ? "opacity-0 translate-x-[430px] translate-y-[300px]"
                : ""
            }`}
          />

          {/* -----------Hand Images----------- */}
        </div>
      </div>
    </>
  );
};
export default TopBg;
