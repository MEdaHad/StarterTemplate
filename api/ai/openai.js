import { OpenAI } from '@vercel/ai';

const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async function handler(req, res) {
  const { prompt } = req.body;

  try {
    const response = await openai.complete({
      prompt,
      maxTokens: 100,
    });

    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}