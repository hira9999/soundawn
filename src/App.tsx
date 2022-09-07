import Modal from "./components/Modal";
import "./App.css";
import Carousel from "./components/Carousel";
import Menu from "./components/Menu";
import Player from "./components/Player";
import { useRecoilValue } from "recoil";

import CurrentTheme from "./state/CurrentTheme";

function App() {
  const currentTheme = useRecoilValue(CurrentTheme);
  const bgUrl = `/bg/bg-${currentTheme}.jpg`;
  return (
    <div className="flex h-screen items-center text-white">
      {/* {bg} */}
      <img
        src={bgUrl}
        alt="bg"
        className="w-full h-full absolute -z-10 bg-cover bg-center"
      />
      <div className="flex-col w-iframeW h-iframeH mx-auto z-100">
        <Carousel />
        <Menu />
        <Player />
      </div>
      <div>
        <Modal />
      </div>

      <footer className="flex absolute bottom-2 justify-center items-center w-full">
        <p>Copyright ©2022 soundrown.com. All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
