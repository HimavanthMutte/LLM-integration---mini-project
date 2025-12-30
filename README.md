# GenAI - AI Prompt Interface

A full-stack web application for interacting with generative AI models. This project provides a user-friendly interface to send prompts to an AI agent with configurable parameters.

## Features

- **System & User Prompts**: Two textarea inputs for customizing system instructions and user queries
- **Temperature Control**: Slider to adjust model creativity (0-1 scale)
- **Token Limit**: Slider to set maximum response length (100-500 tokens)
- **Mock Response Display**: Shows AI agent responses in a read-only textarea
- **Request Payload**: JSON view of the sent request for debugging
- **Modern UI**: Green gradient theme with smooth, responsive design

## Tech Stack

**Frontend:**
- React.js
- CSS3 with Gradient backgrounds
- State management with React Hooks

**Backend:**
- Python/Node.js (API server)
- Environment configuration with .env

## Project Structure

```
genai/
├── genai/
│   ├── src/
│   │   ├── components/
│   │   │   └── home/
│   │   │       ├── index.js (Main component)
│   │   │       └── index.css (Green gradient theme)
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── README.md
├── backend/
│   ├── .env
│   └── (backend source files)
└── README.md (this file)
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Frontend Setup

```bash
cd genai
npm install
npm start
```

The app will run on `http://localhost:3000`

### Backend Setup

```bash
cd backend
# Install dependencies
 npm install

# Configure environment
# Edit .env with your API keys and settings

# Run the server
npm start
```

## Usage

1. Enter a **system prompt** to define the AI's behavior
2. Enter a **user prompt** with your question/request
3. Adjust **Temperature** (0=deterministic, 1=creative) and **Tokens** (response length)
4. Click **Submit** to generate a response
5. View the response and request details below

## API Payload

The app sends requests with the following structure:

```json
{
  "systemPrompt": "You are a helpful assistant",
  "userPrompt": "What is the capital of France?",
  "temperature": 0.5,
  "maxTokens": 250
}
```

## Features Implemented

✅ React component with hooks (useState)  
✅ Dual textarea inputs for prompts  
✅ Range sliders for Temperature and Tokens  
✅ Submit button with request payload generation  
✅ Response display area  
✅ Modern green gradient UI  
✅ Responsive design  

## Future Enhancements

- [ ] Response streaming
- [ ] Chat history and conversation management
- [ ] Preset prompt templates
- [ ] Export conversations as JSON/PDF
- [ ] User authentication
- [ ] Rate limiting and usage statistics
- [ ] Dark/Light theme toggle

## Environment Variables

Create a `.env` file in the backend folder:

```
OPENAI_API_KEY=your_api_key_here
API_PORT=5000
```

