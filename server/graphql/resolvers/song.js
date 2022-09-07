import { Playlist } from "../../models/Playlist.js";
import { checkAuth } from "../../utils/checkAuth.js";

export const songsResolvers = {
  Mutation: {
    createSong: async (
      _,
      { songInput: { playlistId, title, src, playtime } },
      context
    ) => {
      const user = checkAuth(context);
      if (src.trim() === "") {
        throw new Error("Can not find song source");
      }
      const playlist = await Playlist.findById(playlistId);
      if (playlist) {
        playlist.songs.unshift({
          title,
          src,
          playtime,
          userName: user.userName,
          createAt: new Date().toISOString(),
        });
        await playlist.save();
        return playlist;
      } else {
        throw new Error("Playlist not found");
      }
    },
    deleteSong: async (_, { playlistId, songId }, context) => {
      checkAuth(context);
      const playlist = await Playlist.findById(playlistId);
      if (playlist) {
        const playlistIndex = playlist.songs.findIndex(
          (song) => song.id === songId
        );
        playlist.songs.splice(playlistIndex, 1);
        await playlist.save();
        return playlist;
      } else {
        throw new Error("Playlist not found");
      }
    },
  },
};
