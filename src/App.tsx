import "./App.css";
import Carousel from "./components/Carousel";
import LoginModal from "./components/LoginModal";
import Menu from "./components/Menu";
import Player from "./components/Player";

function App() {
  return (
    <div className="flex h-screen items-center text-white">
      {/* {bg} */}
      <div className="bg-[url('./assets/img/bg-coffee.jpg')] w-full h-full absolute -z-10 bg-cover bg-center"></div>
      <div className="flex-col w-iframeW h-iframeH mx-auto z-100">
        <Carousel />
        <Menu />
        <Player />
      </div>
      <div>
        <LoginModal />
      </div>

      <footer className="flex absolute bottom-2 justify-center items-center w-full">
        <p>Copyright ©2021 soundrown.com. All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
