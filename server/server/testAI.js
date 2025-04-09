import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function test() {
  try {
    const result = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Summarize text" },
        { role: "user", content: "Summarize this: Artificial intelligence is a branch of computer science..." },
      ],
    });
    console.log("✅ Response:", result.choices[0].message.content.trim());
  } catch (err) {
    console.error("❌ Test failed:", err);
  }
}

test();
