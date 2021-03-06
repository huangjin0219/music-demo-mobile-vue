const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/sizhu", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("连接成功")
}).catch(() => {
  console.log("连接失败")
});

let songSchema = new Schema({
  songMid: {
    type: String,
    required: true
  },
  m4aUrl: {
    type: String,
    required: true
  },
  songName: {
    type: String,
    required: true
  },
  playTime: {
    type: String,
    required: true
  },
  songPic: {
    type: String,
    required: true
  }

});

let songTable = mongoose.model("songTables", songSchema);

module.exports = {
  songTable
};