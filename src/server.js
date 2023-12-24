require("dotenv/config");

const cors = require("cors");
const express = require("express");


const app = express();
app.use(cors());
app.use(express.json());

app.get ("/", async(req, res) => {
  res.send("Oi mozinho")
});

const PORT = process.env.PORT || 3332;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
