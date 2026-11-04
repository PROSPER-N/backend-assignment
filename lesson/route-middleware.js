import express from "express";

const app = express();

const PORT = 5000;

// Only lets the request through if it has an Authorization header
function requireAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).json({ error: "not authenticated" });
    }
    next();
}


// Private: requireAuth runs first, only for this route
app.get("/notes/private", requireAuth, (req, res) => {
    res.json({ message: "secret notes" });
});


app.listen(PORT, (error) => {
    if (error) {
        console.error("could not start server:", error.message)
        return
    }


    console.log(`Server running at http://localhost:${PORT}`);
    }) 