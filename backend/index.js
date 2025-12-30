import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import {OpenAI} from "openai"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY
})

app.post('/request',async(req,res)=>{
    try {
        const {
            systemPrompt,
            userPrompt,
            temperature,
            maxTokens
        } = req.body;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {"role": "system","content": systemPrompt || "You are a helpful assistant."},
                {"role": "user","content": userPrompt}
            ],
            temperature: temperature || 0.5,
            max_tokens: maxTokens || 100
        })

        const response = completion.choices[0].message.content;
        res.status(200).json({
            success: true,
            response: response
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