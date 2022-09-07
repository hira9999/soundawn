import mongoose from "mongoose";
const { Schema, model } = mongoose;

const playlistSchema = new Schema({
  userName: String,
  title: String,
  createAt: String,
  songs: [
    {
      title: String,
      playtime: String,
      createAt: String,
      src: String,
    },
  ],
});

export const Playlist = model("Playlist", playlistSchema);
