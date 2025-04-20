import express from "express";
const app = express();
const PORT = process.env.PORT || 8080;

//Middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send("Hello im NodeJS BackendDD");
})

//Start Server
app.listen(PORT, () => {
  console.log(`Sever Running on port ${PORT}`);
})