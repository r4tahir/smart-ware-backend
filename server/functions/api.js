// functions/api.js

require('dotenv').config({ path: './config.env' });

const express = require("express");
const cors = require("cors");

const dbo = require(".././db/conn"); // Adjust the path based on your file structure

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require(".././routes/record")); // Adjust the path based on your file structure

// This is a sample handler for your function
exports.handler = async (event, context) => {
  // Connect to the database
  try {
    await dbo.connectToServer();
    console.log('Connected to MongoDB');
    
    // Your logic for handling the function's task here
    // ...

    // Return a response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Function executed successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred' }),
    };
  }
};
