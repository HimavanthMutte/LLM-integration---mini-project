import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/request", async (req, res) => {
  try {
    const { systemPrompt, userPrompt, temperature, maxTokens } = req.body;

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const llmResponse = await fetch(
      "http://127.0.0.1:1234/v1/chat/completions",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
          ],
          temperature,
          max_tokens: maxTokens,
          stream: true
        })
      }
    );

    const reader = llmResponse.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);

      // LM Studio sends SSE-style data
      const lines = chunk.split("\n");

      for (const line of lines) {
        if (!line.startsWith("data:")) continue;
        if (line.includes("[DONE]")) continue;

        const json = JSON.parse(line.replace("data:", ""));
        const token = json.choices?.[0]?.delta?.content;

        if (token) {
          res.write(token);
        }
      }
    }

    res.end();
  } catch (error) {
    console.error("Error:", error);
    res.end();
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
