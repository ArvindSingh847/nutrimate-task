const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://nutrimateuser:Nutrimate12345@nutrimate-cluster.jpff5ay.mongodb.net/?appName=nutrimate-cluster";

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