
import dotenv from 'dotenv';
import OpenAI from 'openai';
import express from 'express';
import cors from 'cors';

dotenv.config(); //load the .env file

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

// Create an instance of the express application
const app=express();
// Specify a port number for the server
const port=5000;
// Start the server and listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// use middleware to parse json request bodies
app.use(express.json());

app.use(cors());


app.post("/message", async (req, res) => {
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." },...req.body.messages],
            model: "gpt-3.5-turbo",
          });
        res.status(200).json(completion.choices[0].message.content)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});
