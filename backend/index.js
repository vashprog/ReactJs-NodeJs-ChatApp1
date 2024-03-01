const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: username, first_name: username},
      {headers: {"private-key": "af3ef32a-e1aa-485c-93c3-f725f725aeaf"}}
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }

  return res.json({ username: username, secret: "sha256..." });
});
//2dfcd845-e647-4926-b6d5-6bb3fccb00d1
//af3ef32a-e1aa-485c-93c3-f725f725aeaf
app.listen(3001);