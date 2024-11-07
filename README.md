# Friendly Chatbot

This project consists of a simple chatbot application with a frontend and backend. The backend is built with Express.js and interacts with OpenAI's GPT-3.5 API to generate responses, while the frontend allows users to interact with the chatbot.

## Project Structure

The project is structured as follows:

```
friendly-chatbot/
│
├── frontend/              # React-based frontend for the chatbot UI
│   ├── public/            # Public assets and index.html
│   ├── src/               # React components and source code
│   ├── .env               # Environment variables (e.g., API endpoint URL)
│   └── package.json       # Frontend dependencies and project info
│
├── backend/               # Express.js backend handling API requests
│   ├── .env               # Backend environment variables (e.g., OpenAI API Key)
│   ├── server.js          # Server code for API interactions
│   ├── package.json       # Backend dependencies and project info
│
└── README.md              # Project documentation
```

## Features

- **Frontend**: A React app for user interactions with the chatbot.
- **Backend**: An Express.js server that communicates with OpenAI's API to fetch responses.
- **Chat Interface**: The user can send messages and receive AI-generated responses in real time.
- **Environment Variable Management**: Both frontend and backend use `.env` files for configuration (e.g., API keys, backend URLs).

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) (Node package manager, installed with Node.js)
- [Git](https://git-scm.com/) (for version control)

## Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/friendly-chatbot.git
cd friendly-chatbot
```

### 2. Install Dependencies

#### Backend Setup:

Navigate to the `backend` folder and install the required dependencies:

```bash
cd backend
npm install
```

#### Frontend Setup:

Navigate to the `frontend` folder and install the required dependencies:

```bash
cd frontend
npm install
```

### 3. Configure Environment Variables

#### Backend Configuration:

Create a `.env` file in the `backend` folder to store your OpenAI API key:

```bash
cd backend
touch .env
```

Add the following content to your `.env` file:

```plaintext
OPENAI_API_KEY=your-openai-api-key-here
```

#### Frontend Configuration:

In the `frontend` folder, create a `.env` file if it doesn't already exist:

```bash
cd frontend
touch .env
```

Add the following content to configure the backend API endpoint:

```plaintext
REACT_APP_API_URL=http://localhost:5000/chat
```

This assumes the backend is running on `http://localhost:5000`.

### 4. Run the Development Servers

#### Start the Backend Server:

In the `backend` folder, start the Express.js server:

```bash
cd backend
npm start
```

This will start the server on `http://localhost:5000`.

#### Start the Frontend Server:

In the `frontend` folder, start the React development server:

```bash
cd frontend
npm start
```

The React app will be served on `http://localhost:3000`.

### 5. Access the Chatbot

Once both servers are running, open your browser and navigate to `http://localhost:3000` to interact with the chatbot.

### 6. Test the Chatbot

You can send messages in the text box provided on the frontend, and the backend will handle the message processing and provide responses using OpenAI's API.

### Example Conversation

#### User Input:

```
Hello, how are you?
```

#### Chatbot Response:

```
I'm doing great, thank you for asking!
```

## Error Handling

- If the frontend doesn’t receive a response from the backend, an error message will be shown.
- If there’s an issue with the OpenAI API, the backend will respond with a default message: `Sorry, I am facing some issues.`

## Project Structure Overview

### Frontend

- **React Components**: The main frontend logic resides in the `src/` folder, where all components such as `ChatBox`, `Message`, and `InputForm` are defined.
- **Public Assets**: The `public/` folder holds static files like `index.html` and assets for the UI.
- **.env File**: Stores frontend-specific variables such as the backend API URL.

### Backend

- **server.js**: The Express.js server that handles incoming POST requests to the `/chat` endpoint, interacting with OpenAI’s API.
- **.env File**: Stores sensitive information such as the OpenAI API key.
- **Package.json**: Contains the backend dependencies like `express` and `axios`.

## Deployment (Optional)

You can deploy both the frontend and backend to cloud platforms like:

- [Heroku](https://www.heroku.com/)
- [Vercel](https://vercel.com/) (for the frontend)
- [Render](https://render.com/)

Ensure to update the API URL in the frontend `.env` file to the deployed backend URL.

## Future Improvements

- **User Authentication**: Integrate user authentication for saving conversation history.
- **UI Improvements**: Enhance the frontend with more advanced features like message formatting, emojis, and better error handling.
- **Advanced AI Models**: Upgrade to GPT-4 for more powerful responses.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenAI for providing the GPT-3.5/4 API.
- React and Express.js for their easy-to-use frameworks for frontend and backend development.

