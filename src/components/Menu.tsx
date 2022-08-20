import React, { useState } from "react";
import {
  ChatAlt2Icon,
  ExternalLinkIcon,
  MusicNoteIcon,
  RefreshIcon,
  ViewListIcon,
} from "@heroicons/react/solid";

const Menu = () => {
  const [selectedLi, setSelectedLi] = useState<string>("");

  return (
    <nav className="">
      <ul className="flex w-[900px] h-[60px] mx-[30px] cursor-pointer">
        <li className="relative float-left w-[180px] h-[60px] bg-primary group">
          {/* menu css checkbox */}
          <input className="hidden" type="checkbox" id="btnControl" />
          <label
            className="flex justify-center w-full h-full cursor-pointer"
            htmlFor="btnControl"
          >
            <ViewListIcon className="w-6" />
          </label>

          {/* submenu */}
          <div
            id="submenu"
            className="flex absolute w-[900px] h-[180px] bg-[#222222] z-100 scale-y-0 origin-top ease duration-100"
          >
            <ul className="w-[180px] h-[180px] bg-primary cursor-pointer">
              <li
                id="subMenuLi1"
                className="w-[180px] h-[60px] hover:bg-[#222222] text-center"
                onClick={(e) => setSelectedLi(e.currentTarget.id)}
              >
                <p className="pt-4">About</p>
                <div className="absolute top-0 left-[180px] w-[720px] h-[180px]">
                  1
                </div>
              </li>
              <li
                id="subMenuLi2"
                className="w-[180px] h-[60px] hover:bg-[#222222] text-center"
                onClick={(e) => setSelectedLi(e.currentTarget.id)}
              >
                <p className="pt-4">Knowledge</p>
                <div className="absolute top-0 left-[180px] w-[720px] h-[180px]">
                  2
                </div>
              </li>
              <li
                id="subMenuLi3"
                className="w-[180px] h-[60px] hover:bg-[#222222] text-center"
                onClick={(e) => setSelectedLi(e.currentTarget.id)}
              >
                <p className="pt-4">Credits</p>
                <div className="absolute top-0 left-[180px] w-[720px] h-[180px]">
                  3
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li className="w-[180px] flex items-center justify-center bg-[#FF932B]">
          <MusicNoteIcon className="w-6" />
          <p className="hidden">Music</p>
        </li>
        <li className="w-[180px] flex items-center justify-center bg-[#F3294D]">
          <RefreshIcon className="w-6" />
          <p className="hidden">Random</p>
        </li>
        <li className="w-[180px] flex items-center justify-center bg-[#54C9DA]">
          <ChatAlt2Icon className="w-6" />
          <p className="hidden">Sns</p>
        </li>
        <li className="w-[180px] flex items-center justify-center bg-[#88F15B]">
          <ExternalLinkIcon className="w-6" />
          <p className="hidden">Questions</p>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
