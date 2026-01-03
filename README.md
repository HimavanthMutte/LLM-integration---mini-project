# GenAI - AI Prompt Interface

A full-stack web application for interacting with generative AI models. This project provides a user-friendly interface to send prompts to an AI agent with configurable parameters.

## Features

- **System & User Prompts**: Two textarea inputs for customizing system instructions and user queries
- **Temperature Control**: Slider to adjust model creativity (0-1 scale)
- **Token Limit**: Slider to set maximum response length (100-500 tokens)
- **Real-time Streaming Response**: AI responses stream in real-time using Server-Sent Events (SSE)
- **Agent Response Display**: Shows AI agent responses in a read-only textarea with live updates
- **LM Studio Integration**: Direct integration with LM Studio for running open-source models locally
- **Modern UI**: Green gradient theme with smooth, responsive design
- **Form Reset**: Automatically clears inputs after successful request submission

## Tech Stack

**Frontend:**
- React.js
- CSS3 with Gradient backgrounds
- State management with React Hooks

**Backend:**
- Node.js with Express.js (API server)
- Server-Sent Events (SSE) for real-time streaming
- CORS enabled for cross-origin requests
- LM Studio API integration (OpenAI-compatible)
- Environment configuration with .env

## Project Structure

```
GENAI/
├── genai/ (React Frontend)
│   ├── src/
│   │   ├── components/
│   │   │   └── home/
│   │   │       ├── index.js (Main Home component with prompts & controls)
│   │   │       └── index.css (Green gradient theme & styling)
│   │   ├── App.js (Root component)
│   │   ├── App.css
│   │   └── index.js (Entry point)
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── package.json
├── backend/ (Node.js Express Server)
│   ├── index.js (Main server with /request endpoint)
│   ├── package.json
│   └── .env (Environment variables)
├── semantic_search.py
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

npm install

# Configure environment
# Create .env file with the following:
# PORT=5000

# Make sure LM Studio is running on http://127.0.0.1:1234
npm start
```

**Note:** This backend expects [LM Studio](https://lmstudio.ai/) running locally with a model loaded on `http://127.0.0.1:1234Edit .env with your API keys and settings

# Run the server
npm start
```

## Usage

1. EnteEndpoint

### POST `/request`

Sends a prompt request to the LM Studio API with streaming response.

**Request Payload:**
```json
{
  "systemPrompt": "You are a helpful assistant",
  "userPrompt": "What is the capital of France?",
  "temperature": 0.5,
  "maxTokens": 250
}
```

**Response:** Server-Sent Events (SSE) stream of text tokens

## Features Implemented

✅ React component with hooks (useState)  
✅ Dual textarea inputs for system and user prompts  
✅ Range sliders for Temperature (0-1) and Tokens (100-500)  
✅ Real-time streaming response from LM Studio  
✅ Submit button with request handling  
✅ Automatic form reset after submission  
✅ Response display with live streaming updates  
✅ Modern green gradient UI  
✅ Responsive design  
✅ CORS enabled for frontend-backend communication  
✅ LM Studio integration with OpenAI-compatible API  

## Future Enhancements

- [ ] Chat history and conversation management
- [ ] Preset prompt templates
- [ ] Export conversations as JSON/PDF
- [ ] User authentication
- [ ] Rate limiting and usage statistics
- [ ] Dark/Light theme toggle
- [ ] Model selection dropdown
- [ ] Response copy-to-clipboard button

## Environment Variables

Create a `.env` file in the backend folder:

```
PORT=5000
```

## Running the Full Stack

1. **Start LM Studio** with a model loaded on `http://127.0.0.1:1234`
2. **Start Backend:**
   ```bash
   cd backend
   npm start
   ```
3. **Start Frontend (in another terminal):**
   ```bash
   cd genai
   npm start
   ```
4. **Open browser** at `http://localhost:3000
Create a `.env` file in the backend folder:

```
OPENAI_API_KEY=your_api_key_here
API_PORT=5000
```

