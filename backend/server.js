const express = require("express");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
require("dotenv").config();
const userRoutes = require("./routes/userRouter");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const chatRoutes = require("./routes/chatRoutes");

const app = express();

connectDB();
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Welcome to jay's application." });
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
});
