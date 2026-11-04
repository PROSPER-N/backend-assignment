import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 5000;

// morgan is a ready-made logger: "dev" is a short, coloured format
// morgan("dev") creates a logger middleware for you. Status code
// and speed included!

app.use(morgan("dev"));
app.get("/notes", (req, res) => {
    res.json([{ id: 1, text: "Buy groceries" }]);
});




app.listen(PORT, (error) => {
    if (error) {
        console.error("could not start server:", error.message)
        return
    }


    console.log(`Server running at http://localhost:${PORT}`);
    })