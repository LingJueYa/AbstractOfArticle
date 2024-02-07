//Gemini 处理模块
const { GoogleGenerativeAI } = require("@google/generative-ai");

// 获取API密钥
const API_KEY =
  process.env.GEMINI_API_KEY || "";

if (!API_KEY) {
  throw new Error(
    "API Key not found. Please ensure it is set as an environment variable."
  );
}

// 创建Google Generative AI实例
const genAI = new GoogleGenerativeAI(API_KEY);

async function generateSummary(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

module.exports = {
  gemini: async (req, res) => {
    try {
      const inputText = req.body.text;

      if (!inputText) {
        return res.status(400).json({
          error: "Missing required 'text' field in the request body.",
        });
      }

      const prompt = `请将这段话用简短的语言概括成文章摘要：${inputText}`;
      const summary = await generateSummary(prompt);
      res.json({ summary });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};
