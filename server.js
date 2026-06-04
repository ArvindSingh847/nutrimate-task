require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();

let db;

app.use(cors());
app.use(express.json());

connectDB().then((database) => {
    db = database;
});

app.get("/", (req, res) => {
    res.send("Hi Hello");
});

app.post("/hello", async (req, res) => {
    try {
        const interaction = {
            user_action: "Button Clicked",
            response: "Hi Hello",
            timestamp: new Date()
        };

        await db.collection("interactions").insertOne(interaction);

        res.json({
            message: "Hi Hello"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Something went wrong"
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});