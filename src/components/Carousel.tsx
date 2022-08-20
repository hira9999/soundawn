import React, { useEffect, useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { SiCoffeescript } from "react-icons/si";
import { WiRaindrops } from "react-icons/wi";
import { MdWaves, MdOutlineNightlightRound } from "react-icons/md";
import { ImFire } from "react-icons/im";
import { GiSoundWaves } from "react-icons/gi";
import { TbFountain } from "react-icons/tb";
import { FaTwitter, FaFrog, FaTrain } from "react-icons/fa";
import { useSetRecoilState, useRecoilRefresher_UNSTABLE } from "recoil";
import CurrentTheme from "../state/CurrentTheme";
import { RandomThemeSong } from "../state/RandomThemeSong";

const Carousel = () => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const [onSlide, setOnSlide] = useState<string | null>(null);
  const setTheme = useSetRecoilState(CurrentTheme);
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
          <li
            id="coffee"
            className="wrapper group"
            onClick={(e) => playSong(e)}
          >
            <SiCoffeescript className="w-14 h-14 ease duration-200 group-hover:translate-y-3" />
            <p className="mt-2 group-hover:animate-fade">Coffee</p>
          </li>
          <li id="rain" className="wrapper group" onClick={(e) => playSong(e)}>
            <WiRaindrops className="w-14 h-14 ease duration-200 group-hover:translate-y-3" />
            <p className="mt-2 group-hover:animate-fade">Rain</p>
          </li>
          <li id="waves" className="wrapper group" onClick={(e) => playSong(e)}>
            <MdWaves className="w-14 h-14 ease duration-200 group-hover:translate-y-3" />
            <p className="mt-2 group-hover:animate-fade">Waves</p>
          </li>
          <li id="fire" className="wrapper group" onClick={(e) => playSong(e)}>
            <ImFire className="w-14 h-14 ease duration-200 group-hover:translate-y-3" />
            <p className="mt-2 group-hover:animate-fade">FIre</p>
          </li>
          <li id="bird" className="wrapper group" onClick={(e) => playSong(e)}>
            <FaTwitter className="w-14 h-14 ease duration-200 group-hover:translate-y-3" />
            <p className="mt-2 group-hover:animate-fade">Bird</p>
          </li>
          <li id="night" className="wrapper group" onClick={(e) => playSong(e)}>
            <MdOutlineNightlightRound className="w-14 h-14 ease duration-200 group-hover:translate-y-3" />
            <p className="mt-2 group-hover:animate-fade">Night</p>
          </li>
          <li
            id="fountain"
            className="wrapper group"
            onClick={(e) => playSong(e)}
          >
            <TbFountain className="w-14 h-14 ease duration-200 group-hover:translate-y-3" />
            <p className="mt-2 group-hover:animate-fade">Fountain</p>
          </li>
          <li
            id="whiteNoise"
            className="wrapper group"
            onClick={(e) => playSong(e)}
          >
            <GiSoundWaves className="w-14 h-14 ease duration-200 group-hover:translate-y-3" />
            <p className="mt-2 group-hover:animate-fade">White Noise</p>
          </li>
          <li
            id="playGround"
            className="wrapper group"
            onClick={(e) => playSong(e)}
          >
            <FaFrog className="w-14 h-14 ease duration-200 group-hover:translate-y-3" />
            <p className="mt-2 group-hover:animate-fade">Play Ground</p>
          </li>
          <li id="train" className="wrapper group" onClick={(e) => playSong(e)}>
            <FaTrain className="w-14 h-14 ease duration-200 group-hover:translate-y-3" />
            <p className="mt-2 group-hover:animate-fade">Train</p>
          </li>
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
