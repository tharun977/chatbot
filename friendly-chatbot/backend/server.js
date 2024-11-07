// Import necessary libraries
const express = require('express');
const { OpenAI } = require('openai');
const cors = require('cors');

// Initialize OpenAI with the provided API key
const openai = new OpenAI({
  apiKey: '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',  // Directly added API key
});

// Initialize Express application
const app = express();
const port = 5000;

// Middleware setup
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(express.json());  // Parse incoming JSON data

// Function to interact with OpenAI API
const getAIResponse = async (message) => {
  try {
    // Sending the chat completion request to OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',  // You can change this to gpt-4 if you have access
      messages: [{ role: 'user', content: message }],
    });

    // Log the response for debugging
    console.log('OpenAI Response:', response);

    // Return the AI response message
    return response.choices[0].message.content;
  } catch (error) {
    // Log the full error response and provide a fallback message
    console.error('Error fetching AI response:', error.response || error);
    return `Error: ${error.message}`;  // Display the specific error message for debugging
  }
};

// Route to handle chatbot messages
app.post('/chat', async (req, res) => {
  const { message } = req.body;  // Get the message from the frontend request

  // If no message is provided, return a bad request error
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Get the AI response based on the user's message
    const aiResponse = await getAIResponse(message);
    res.json({ reply: aiResponse });  // Send back the AI response to the frontend
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error in /chat route:', error);
    res.status(500).json({ error: 'Failed to get AI response' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
