const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./Apis/Users/user.router");

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(express.json());

// Use routes
app.use("/api/users", userRouter);

app.get('/api', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}/`);
});
