// Replace everything in server.js with this. Last week's code is safe in server-week1.js .
 // server.js — the ENTRY POINT: set up the app and wire the pieces together
import express from "express";

// Relative imports start with ./ and must end in .js . Forget .js and Node can't find the file.
import logger from "./middleware/logger.js";

// We chose the name notesRoutes because the file uses export default .
import notesRoutes from "./routes/notesRoutes.js";
import notFound from "./middleware/notfound.js";
import errorHandler from "./middleware/errorhandler.js";

    const app = express();
    const PORT = 3000;

// 2. Routes
// 2. A home route, then mount the router at /notes .
    app.get("/", (req, res) => {
        res.json({ message: "Notes API is running. Try GET /notes" });
});
    app.use("/notes", notesRoutes);

// 3. Error handling: these two always go LAST
// 3. No route matched? Make a 404 error.

app.use(notFound);

// The error handler is the very last app.use .
app.use(errorHandler);


app.listen(PORT, (error) => {
    if (error) {
        console.error("could not start server:", error.message)
        return
    }


    console.log(`Server running at http://localhost:${PORT}`);
    })