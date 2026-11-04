import express from "express"

const app = express();

const PORT = 5000;

function logger(req, res, next) {
    const time = new Date().toISOString();
    console.log(`[${time}] - ${req.method} ${req.url}`);
     next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("Look at your terminal: the logger printed this request")
});

app.get("/notes", (req, res) => {
    res.json([{ id: 1, text: "Buy Groceries" }])
});


app.listen(PORT, (error) => {
    if (error) {
        console.error("could not start server:", error.message)
        return
    }


    console.log(`Server running at http://localhost:${PORT}`);
    })