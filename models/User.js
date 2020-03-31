import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const Userschema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video"
    }
  ]
});

Userschema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", Userschema);

export default model;
