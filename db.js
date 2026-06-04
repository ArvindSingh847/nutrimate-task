const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        return client.db("nutrimate");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }
}

module.exports = connectDB;