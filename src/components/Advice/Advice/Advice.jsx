import { useEffect, useState } from "react";
import axios from "axios";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
} from "./data";

const Advice = () => {
  const url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  const backgroundImages = [
    img1,
    img2,
    img3,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  const loadAdvice = async () => {
    try {
      const randomIndex = Math.floor(Math.random() * backgroundImages.length);
      setBackgroundImage(backgroundImages[randomIndex]);
      console.log("background", randomIndex);
      const response = await axios.get(url);
      setAdvice(response.data.slip.advice);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadAdvice();
  }, []);

  return (
    <div className="min-h-screen w-full relative">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        {backgroundImage}
      </div>
      <div className="w-4/5 md:w-3/5 text-center text-white text-3xl md:text-5xl bg-[rgba(0,0,0, 0.3)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="mb-4 md:mb-6">{advice}</h2>

        <button
          onClick={() => loadAdvice()}
          className="uppercase font-semibold text-base md:text-xl bg-gradient-to-l from-indigo-600 via-purple-600 to-pink-600 py-2 px-5 rounded-lg"
        >
          give me advice
        </button>
      </div>
    </div>
  );
};

export default Advice;
