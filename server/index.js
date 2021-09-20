const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const workRouter = require("./routes/work_router");
const educationRouter = require("./routes/education_router");
const skillRouter = require("./routes/skill_router");
const userRouter = require("./routes/user_router");
const projectRouter = require("./routes/project_router");
const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", workRouter);
app.use("/api", educationRouter);
app.use("/api", skillRouter);
app.use("/api", userRouter);
app.use("/api", projectRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
