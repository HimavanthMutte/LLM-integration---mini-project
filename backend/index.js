
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/request',async(req,res)=>{
    try {
        const {
            systemPrompt,
            userPrompt,
            temperature,
            maxTokens
        } = req.body;

        const response = await fetch("http://127.0.0.1:1234/v1/chat/completions",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "openai/gpt-oss-20b",
                messages: [{
                    role: "system",
                    content: systemPrompt},
                    {
                        role: "user",
                        content: userPrompt
                    }
                ],
                temperature: temperature,
                maxTokens: maxTokens,
                stream: false
            })
        })
        const ans = await response.json();
        res.status(200).json({
            success: true,
            response: ans.choices[0].message.content
        })
    }
    catch (error) {
        console.log("Erorr processing request:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
}});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});