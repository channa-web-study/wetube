import express from "express";

const PORT = 4000;

const app = express();

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from Home");

const handleProfile = (req, res) => res.send("Hello from Profile");

const middleware = (req, res, next) => {
  console.log("Beween Home");
  next();
};

app.use(middleware);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
