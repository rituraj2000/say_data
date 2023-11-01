// server.js
const express = require("express");
const multer = require("multer");
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Multer setup for handling multipart/form-data
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(cors()); // Enable CORS for all origins (consider tightening this for production)

app.post("/transcribe", upload.single("audio"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // OpenAI API key should be set in environment variables for security
  // const OPENAI_API_KEY = process.env.KEY;
  const OPENAI_API_KEY = process.env.KEY;
  const model = "whisper-1";

  const formData = new FormData();
  formData.append("model", model);
  formData.append("file", req.file.buffer, req.file.originalname);

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/audio/transcriptions",
      formData,
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      }
    );
    // Send back the transcription text
    console.log(response.data.text);
    res.json({ transcription: response.data.text });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error during transcription");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
