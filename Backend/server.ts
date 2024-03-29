import express, { Express, Request, Response } from "express";
const port = 8000;

// Make the express object
const app: Express = express();

// Routes
const tagRoute = require("./routes/tag");
app.use('/tag', tagRoute);
const accountRoute = require("./routes/account");
app.use('/account', accountRoute);
const searchRoute = require("./routes/search");
app.use('/search', searchRoute);
const promptRoute = require("./routes/prompt");
app.use('/prompt', promptRoute);
const llmRoute = require("./routes/llm");
app.use('/llm', llmRoute);

// Basic get
app.get("/", (_: Request, res: Response) => {
  res.send("HELLO");
});

// Start listening on the port
app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
