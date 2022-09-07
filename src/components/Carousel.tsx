import React, { useEffect, useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { RefreshIcon } from "@heroicons/react/outline";
import { useRecoilState, useRecoilRefresher_UNSTABLE } from "recoil";
import CurrentTheme from "../state/CurrentTheme";
import { RandomThemeSong } from "../state/RandomThemeSong";

const Carousel = () => {
  const carouselTheme = [
    "coffee",
    "rain",
    "waves",
    "bird",
    "fire",
    "night",
    "train",
    "fountain",
    "whitenoise",
    "playground",
  ];
  const sliderRef = useRef<HTMLUListElement>(null);
  const [onSlide, setOnSlide] = useState<string | null>(null);
  const [theme, setTheme] = useRecoilState(CurrentTheme);
  const refreshRandomTheme = useRecoilRefresher_UNSTABLE(RandomThemeSong);

  useEffect(() => {
    if (onSlide === "left" && sliderRef.current) {
      sliderRef.current.className =
        "flex overflow-hidden w-[50000px] ease-in duration-500";
    } else if (onSlide === "right" && sliderRef.current) {
      sliderRef.current.className +=
        " ease-in duration-500 translate-x-[-900px]";
    }
  }, [onSlide]);

  const playSong = (e: React.MouseEvent<HTMLLIElement>) => {
    setTheme(e.currentTarget.id);
    refreshRandomTheme();
  };

  return (
    <div className="flex">
      <button
        id="leftBtn"
        className="w-[30px] bg-primary"
        type="button"
        onClick={(e) => {
          setOnSlide("left");
        }}
      >
        <ChevronLeftIcon />
      </button>
      <div className="w-[900px] overflow-hidden text-[#2d2d2d] bg-white cursor-pointer">
        <ul
          className="flex overflow-hidden w-[50000px] ease-in duration-500"
          ref={sliderRef}
        >
          {carouselTheme.map((currentTheme) => (
            <li
              id={currentTheme}
              className="wrapper group"
              onClick={(e) => playSong(e)}
            >
              {theme === currentTheme ? (
                <RefreshIcon className="w-14 h-14 ease duration-200 group-hover:translate-y-3" />
              ) : (
                <img
                  src={`/icons/icon_${currentTheme}.svg`}
                  alt="icon"
                  className="w-14 h-14 ease duration-200 group-hover:translate-y-3"
                />
              )}
              <p className="mt-2 group-hover:animate-fade">{currentTheme}</p>
            </li>
          ))}
        </ul>
      </div>
      <button
        id="rightBtn"
        className="w-[30px] bg-primary "
        type="button"
        onClick={(e) => {
          setOnSlide("right");
        }}
      >
        <ChevronRightIcon className="" />
      </button>
    </div>
  );
};

export default Carousel;
