//导入env
require("dotenv").config();
//导入 express
const express = require("express");
//创建服务器的实例对象
const app = express();
//定义监听端口
const port = process.env.port || 3000;
//导入配置cors中间件
const cors = require("cors");
app.use(cors());
//配置解析json的中间件
app.use(express.json());
//导入请求路由模块(/api/xxxx全部走这里的路由模块)
const getRouter = require("./router/post");

//导入不需要验证 jwt 的路由（获取）
app.use("/post", getRouter);
// 为了响应 "/yan" 路径，并返回“部署成功”
app.get("/yan", (req, res) => {
  res.send("成功");
});
//定义错误级别中间件
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizeError") return res.send("身份验证失败");
  res.send(err);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
