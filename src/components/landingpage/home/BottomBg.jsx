import "./style/background.css";
import "animate.css";
import React, { useState, useEffect } from "react";

// -----------Birds Img------------
import bird1 from "../../../assets/birds/bird1.svg";
import bird2 from "../../../assets/birds/bird2.svg";

// -----------Cloud IMG------------
import cloud1 from "../../../assets/cloud/cloud1.svg";
import cloud2 from "../../../assets/cloud/cloud2.svg";
import cloud3 from "../../../assets/cloud/cloud3.svg";

//------------Hand IMG--------------
import hand from "../../../assets/hand/hand.svg";

// ------------Home Img-------------
import chimney from "../../../assets/home/chimney.svg";
import wall1 from "../../../assets/home/wall-1.svg";
import wall2 from "../../../assets/home/wall-2.svg";
import roof1 from "../../../assets/home/roof.svg";
import roof2 from "../../../assets/home/roof-top.svg";
import roof3 from "../../../assets/home/backroof.svg";
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

// ---------- Background Img----------
import bg1 from "../../../assets/background/grey.svg";
import bg2 from "../../../assets/background/black.svg";

const BottomImages = () => {
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
    <div className="-translate-y-[550px] translate-x-[17rem]">
      <div className="relative bottom-img">
        <img
          src={bg1}
          alt=""
          className={`absolute opacity-0 transition-all duration-[1s] ease-in-out transform ${
            isScrolled
              ? "w-[500px] h-[600px] opacity-[0.2] translate-x-[150%] translate-y-[-130px]"
              : "translate-x-[560px] translate-y-[-520px]"
          }`}
        />
        <img
          src={bg2}
          alt=""
          className={`absolute opacity-0 transition-all duration-[0.5s] ease-in-out ${
            isScrolled
              ? "opacity-[0.2] h-[1200px] w-[1200px] z-[-1] translate-x-[18%] translate-y-[-290px]"
              : "h-[600px] translate-x-[-600px] translate-y-[-300px]"
          }`}
        />

        {/* ---------- Birds Image ---------- */}
        <img
          src={bird1}
          alt="Home Img"
          className={`absolute opacity-0 transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "opacity-100 w-[80px] h-[30px] translate-x-[640px] translate-y-[-70px]"
              : "translate-x-[-1040px] translate-y-[-250px]"
          }`}
        />
        <img
          src={bird2}
          alt="Home Img"
          className={`absolute opacity-0 transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "opacity-100 w-[80px] h-[30px] translate-x-[940px] translate-y-[-100px]"
              : "translate-x-[-700px] translate-y-[72px]"
          }`}
        />

        {/* -----------Cloud Images---------- */}
        <img
          src={cloud1}
          alt=""
          className={`absolute w-[100px] h-[40px] transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "opacity-100 translate-x-[685px] translate-y-[-250px]"
              : "opacity-0 translate-x-[-260px] translate-y-[-245px]"
          }`}
        />
        <img
          src={cloud2}
          alt=""
          className={`absolute w-[130px] h-[40px] transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "opacity-100 translate-x-[490px] translate-y-[-120px]"
              : "opacity-[0.3] translate-x-[-450px] translate-y-[45px]"
          }`}
        />
        <img
          src={cloud3}
          alt=""
          className={`absolute w-[260px] h-[40px] transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "opacity-100 translate-x-[840px] translate-y-[-165px]"
              : "opacity-0 translate-x-[-550px] translate-y-[-50px]"
          }`}
        />

        {/*----------Sun Image -------------- */}

        <img
          src={sun}
          alt="Home Img"
          className={`absolute transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "opacity-90 w-[80px] h-[60px] translate-x-[870px] translate-y-[-100px]"
              : "opacity-[0.3] w-[620px] h-[600px] translate-x-[-860px] translate-y-[-350px]"
          }`}
        />

        {/* -----------Plant Images----------- */}
        <img
          src={plant1}
          alt=""
          className={`absolute z-0 transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "opacity-100 w-[60px] h-[80px] right-[16rem] top-[6rem] transform-none"
              : "opacity-[0.3] w-[60px] h-[80px] translate-x-[-420px] translate-y-[0px]"
          }`}
        />
        <img
          src={plant2}
          alt=""
          className={`absolute z-0 transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "opacity-100 w-[75px] h-[110px] right-[35rem] top-[5rem] transform-none"
              : "opacity-[0.1] w-[75px] h-[110px] translate-x-[-280px] translate-y-[150px]"
          }`}
        />

        {/* ----------Home Images------------ */}
        <img
          src={roof3}
          alt=""
          className={`absolute transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "w-[190px] h-[100px] right-[18.1rem] top-[1rem] transform-none"
              : "w-[190px] h-[100px] translate-x-[-100px] translate-y-[-50px] z-[0]"
          }`}
        />

        {/* -----------Wall and Gate Images----------- */}
        <img
          src={wall1}
          alt=""
          className={`absolute transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "w-[170px] h-[110px] right-[25.4rem] top-[7rem] opacity-100 rotate-[360deg] translate-x-[1px] translate-y-[1px]"
              : "w-[80px] h-[20px] opacity-100 rotate-[20deg] translate-x-[-450px] translate-y-[191px]"
          }`}
        />
        <img
          src={wall2}
          alt=""
          className={`absolute transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "w-[160px] h-[180px] right-[18.3rem] top-[1rem] opacity-100 rotate-[360deg] translate-x-[2px] translate-y-[3px]"
              : "w-[80px] h-[20px] opacity-100 rotate-[30deg] translate-x-[-350px] translate-y-[230px] translate-z-[50px]"
          }`}
        />
        <img
          src={gate}
          alt=""
          className={`absolute transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "w-[30px] h-[80px] right-[30rem] top-[9rem] transform-none"
              : "w-[30px] h-[80px] right-[55rem] top-[5rem] translate-x-[80px] translate-y-[65px]"
          }`}
        />

        {/* -----------Window Images----------- */}
        <img
          src={frontw1}
          alt=""
          className={`absolute transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "opacity-100 w-[30px] h-[60px] right-[32.2rem] top-[7.4rem] transform-none"
              : "opacity-[0.2] w-[30px] h-[60px] translate-x-[-40rem] translate-y-[-8rem]"
          }`}
        />
        <img
          src={frontw2}
          alt=""
          className={`absolute transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "opacity-100 w-[30px] h-[60px] right-[27.4rem] top-[7.4rem] transform-none"
              : "opacity-[0.2] w-[30px] h-[60px] translate-x-[-40rem] translate-y-[-8rem]"
          }`}
        />
        <img
          src={frontw3}
          alt=""
          className={`absolute transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "opacity-100 w-[30px] h-[60px] right-[24rem] top-[7.4rem] transform-none"
              : "opacity-[0.2] w-[30px] h-[60px] translate-x-[-40rem] translate-y-[-8rem]"
          }`}
        />
        <img
          src={frontw4}
          alt=""
          className={`absolute transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "opacity-100 w-[30px] h-[60px] right-[20.5rem] top-[7.4rem] transform-none"
              : "opacity-[0.2] w-[30px] h-[60px] translate-x-[-40rem] translate-y-[-8rem]"
          }`}
        />
        <img
          src={frontw5}
          alt=""
          className={`absolute transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "opacity-100 w-[25px] h-[40px] right-[22.1rem] top-[4.2rem] transform-none"
              : "opacity-[0.2] w-[25px] h-[40px] translate-x-[-40rem] translate-y-[-8rem]"
          }`}
        />
        <img
          src={frontw6}
          alt=""
          className={`absolute z-[1] transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "opacity-100 w-[25px] h-[35px] right-[29.2rem] top-[3.65rem] transform-none"
              : "opacity-[0.2] w-[25px] h-[35px] translate-x-[-40rem] translate-y-[-8rem]"
          }`}
        />

        {/* ----------Home Images------------ */}
        <img
          src={roof1}
          alt=""
          className={`absolute transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "w-[200px] h-[140px] right-[22.5rem] top-[-0.2rem] transform-none rotate-[360deg]"
              : "w-[190px] h-[140px] right-[10.5rem] top-[-0.2rem] translate-x-[-55vw] translate-y-[75vh]"
          }`}
        />
        <img
          src={roof4}
          alt=""
          className={`absolute transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "w-[85px] h-[140px] right-[26.3rem] top-[-0.37rem] transform-none opacity-100"
              : "w-[85px] h-[140px] translate-x-[-600px] translate-y-[250px] opacity-20"
          }`}
        />
        <img
          src={roof2}
          alt=""
          className={`absolute transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "w-[90px] h-[170px] right-[19rem] top-[-6.25rem] opacity-100 translate-x-[-7.1rem] translate-y-[63px] rotate-[360deg]"
              : "w-[90px] h-[170px] right-[10rem] top-[-6.25rem] opacity-10 translate-x-[-1200px] translate-y-[90px] rotate-[360deg]"
          }`}
        />

        <img
          src={chimney}
          alt=""
          className={`absolute transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "w-[25px] h-[25px] opacity-100 right-[23.5rem] top-[0rem] transform-none"
              : "w-[25px] h-[25px] opacity-20 right-[60rem] top-[-5rem]"
          }`}
        />

        {/* -----------Hand Images----------- */}
        <img
          src={hand}
          alt=""
          className={`absolute transition-all duration-[2s] ease-in-out ${
            isScrolled
              ? "opacity-100 z-[2] right-[10rem] top-[2.4rem] w-[470px] h-[400px] transform-none"
              : "opacity-0 w-[470px] right-[10rem] top-[2.4rem] h-[400px] translate-x-[185%] translate-y-[-45%]"
          }`}
        />
      </div>
    </div>
  );
};

export default BottomImages;
