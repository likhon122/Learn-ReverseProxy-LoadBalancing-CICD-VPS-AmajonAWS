const os = require("os");

const app = require("express")();

const PORT = process.env.PORT || 3000;

const INSTANCE = process.env.INSTANCE || os.hostname();

app.get("/", (req, res) => {
  res.send(`Hello from ${INSTANCE}!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});