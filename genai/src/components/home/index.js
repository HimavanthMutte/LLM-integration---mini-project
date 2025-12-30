import React, { useState } from "react";
import "./index.css";

const Home = () => {
  const [systemPrompt, setSystemPrompt] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [temperature, setTemperature] = useState(0.5);
  const [tokens, setTokens] = useState(100);
  const [agentResponse, setAgentResponse] = useState(""); 

  const generateRequest =async () =>{
    const requestPayload = {
        systemPrompt: systemPrompt,
        userPrompt: userPrompt,
        temperature: temperature,
        maxTokens: tokens
    };
    const response = await fetch('http://localhost:5000/request',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(requestPayload)
    });
    const data = await response.json();
    setAgentResponse(data.response);
    setSystemPrompt("");
    setUserPrompt("");
    setTemperature(0.5);
    setTokens(100);
  }

  return (
    <div>
      <h1>Hello GenAI</h1>

      <label htmlFor="systemPrompt">System Prompt:</label>
      <br />
      <textarea
        id="systemPrompt"
        value={systemPrompt}
        onChange={(e) => setSystemPrompt(e.target.value)}
        placeholder="Enter System Prompt..."
      />

      <br /><br />

      <label htmlFor="userPrompt">User Prompt:</label>
      <br />
      <textarea
        id="userPrompt"
        value={userPrompt}
        onChange={(e) => setUserPrompt(e.target.value)}
        placeholder="Enter User Prompt..."
      />

      <br /><br />

      <label htmlFor="temperature">Temperature: {temperature.toFixed(2)}</label>
      <input type="range" id="temperature" name="temperature" min="0" max="1" step="0.01" value={temperature} onChange={(e) => setTemperature(parseFloat(e.target.value))}/>

      <br /><br />

      <label htmlFor="tokens">Tokens: {tokens}</label>
      <input type="range" id="tokens" name="tokens" min="100" max="500" step="10" value={tokens} onChange={(e) => setTokens(parseInt(e.target.value))}/>

      <br></br>

      <div className="button-container">
        <button onClick={generateRequest}>Submit</button>
      </div>

      <label htmlFor="agentResponse">Agent Response:</label>
      <br />
      <textarea
      readOnly
        id="agentResponse"
        value={agentResponse}
        placeholder="Agent will respond here..."
      />
      <br/><br/>
    </div>
  );
};

export default Home;
