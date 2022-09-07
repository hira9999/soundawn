import { AuthenticationError } from "apollo-server";
import { Playlist } from "../../models/Playlist.js";
import { checkAuth } from "../../utils/checkAuth.js";

export const playlistsResolvers = {
  Query: {
    getPlaylists: async (_, { userId }, context) => {
      try {
        const playlists = await Playlist.find({ userId });
        return playlists;
      } catch (error) {
        throw new Error(error);
      }
    },
    getPlaylist: async (_, { playlistId }) => {
      try {
        const playlist = await Playlist.findById(playlistId);
        if (playlist) {
          return playlist;
        } else {
          throw new Error("playlist not found");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    createPlaylist: async (_, { title }, context) => {
      const user = checkAuth(context);
      if (title.trim() === "") {
        throw new Error("Playlist name must not be empty");
      }
      const playlist = await Playlist.find({ title: title });
      if (playlist) {
        throw new Error("Duplicate playlist name");
      }
      const newPlaylist = new Playlist({
        title,
        id: user.id,
        userName: user.userName,
        createAt: new Date().toISOString(),
      });
      const newplaylist = await newPlaylist.save();
      return newplaylist;
    },

    deletePlaylist: async (_, { playlistId }, context) => {
      const user = checkAuth(context);
      try {
        const playlist = Playlist.findById(playlistId);
        if (user.userName === playlist.userName) {
          await playlist.delete();
          return "Playlist deleted successfully";
        } else {
          throw new AuthenticationError("Invalid access");
        }
      } catch (e) {
        throw new Error(e);
      }
    },
  },
};
