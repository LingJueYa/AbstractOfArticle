const express = require("express");
//创建路由对象
const router = express.Router();
//导入 GeminiAi 处理模块
const GeminiHandler = require("../router_handler/post/gemini");
//GeminiAi 路由
router.post("/gemini", GeminiHandler.gemini);

module.exports = router;
