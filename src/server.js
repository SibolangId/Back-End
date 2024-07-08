const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // Import modul cors
const userRouter = require("./Apis/Users/user.router");
const destinationRouter = require("./Apis/Destinations/destination.router");
const favoriteRouter = require("./Apis/Favorites/favorites.router");

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(cors()); // Gunakan middleware cors
app.use(express.json());
app.use('/images', express.static('public/images'));

// Gunakan routes
app.use("/api/users", userRouter);
app.use("/api/destinations", destinationRouter);
app.use("/api/favorites", favoriteRouter);

app.get('/api', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}/`);
});
