import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useRecoilValue } from "recoil";
import rain1 from "../assets/audio/rain/rain1.mp3";
import waves1 from "../assets/audio/waves/waves1.mp3";
import { RandomThemeSong } from "../state/RandomThemeSong";

const Player = () => {
  const randomThemeSong = useRecoilValue(RandomThemeSong);
  const [songSource, setSongSource] = useState<string | undefined>(
    "/static/media/rain1.9d2d965db299119c0798.mp3"
  );

  useEffect(() => {
    const songs = [rain1, waves1];
    const foundSong = songs.find((song) => song.includes(randomThemeSong));
    setSongSource(foundSong);
  }, [randomThemeSong]);

  return (
    <div className="mx-[30px] w-[900px] h-[60px]">
      <ReactAudioPlayer
        controls
        className="relative w-full z-0"
        src={songSource}
      />
    </div>
  );
};

export default Player;
