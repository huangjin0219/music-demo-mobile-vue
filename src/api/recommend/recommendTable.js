/**
 * 设计表结构-数据库
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/sizhu", {// 连接数据库 - url:端口/数据库名称
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("连接sizhu数据库成功")
});

// 表规则
let recommendShema = new Schema({
  category: {
    type: String,
    required: true
  },
  categoryList: [
    {
      id: {
        type: String,
        required: true
      },
      cover: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    }
  ]
});

let recommendDatas = mongoose.model("recommenddatas", recommendShema);

module.exports = {
  recommendTable: recommendDatas
}