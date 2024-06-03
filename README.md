# A ChatGPT Clone

This is a very simple chat bot using OpenAI's API. 

In the future, I plan to add streaming responses, like how ChatGPT works. I also want to connect my backend to Google Firebase so that users can choose different threads and pick up messaging on those threads.

## Local Setup Instructions
An OpenAI GPT-3.5-turbo API key is required to run locally. Run npm install in both the frontend and backend directories. In the backend, create a .env file with

```bash
OPENAI_API_KEY=<YOUR KEY>
```

In two separate terminals, run npm start in the backend and npm run dev in the frontend, and you're good to go!