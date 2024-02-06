# AbstractOfArticle

AbstractOfArticle 是一个基于 Google Gemini 的生成文章摘要API，只需要向 API 发送一段文本内容，即可获得实时生成的文章摘要。 

# 演示站点

[我的文章](https://my.forevers.love/#/article)

# 功能特性

- 实时生成的摘要
- 自动生成，无需人工干预
- 支持中国大陆访问

# 应用部署

请确保您已经得到 Gemini API 密钥，有关 Gemini API 的申请，请前往 [Google AI Studio](https://makersuite.google.com/app/apikey)。

确保已安装 [Node.js](https://nodejs.org/zh-cn/) 和 [Git](https://git-scm.com/)。

准备工作完成后，执行以下步骤：

1. 将仓库 clone 至本地

   ```
   $ git clone https://github.com/axiomxs/AbstractOfArticle
   ```

   

2. 进入项目目录

   ```
   cd AbstractOfArticle
   ```

3. 安装依赖

   ```
   npm install
   ```

4. 按照 .env.example 的提示 在 .env 文件填入配置信息

   > 后端 API 的端口
   >
   > Gemini API Key 

5. 部署项目

   > 将文件部署至服务器或虚拟主机上

6. 启动服务

   > 若在本地测试，执行

   ```
   nodemon app.js
   ```

   > 在服务器端部署，执行

   ```
   nohup node app.js
   ```

   
