import express from "express";
import cors from "cors";
import Users from "./database/queries/users";

import "./database/connection";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";

const app = express();

if (isDevelopment) {
    app.use(cors());
}

if (isProduction) {
    app.use(express.static("public"));
}

app.get("/api/users", async (req, res) => {
    try {
        const users = await Users.getAll();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Cannot get all users at this time, blame Andrew" });
    }
});

// 404 fallback for client side routing
if (isProduction) {
    app.get("*", (req, res) => {
        res.sendFile("index.html", { root: "public" });
    });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server last launched at ${new Date().toLocaleString()} (running on port ${PORT})`));
