const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
//middleware
app.use(express.json(), cors());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get("/", async (req, res) => {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            "Generate random motivational one quote said by famous people,",
        },
      ],
    });
    console.log(completion.data.choices[0].message);

    res.status(200).send(completion.data.choices[0].message);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(8000, () => {
  console.log("Server is listening to 8000...");
});
