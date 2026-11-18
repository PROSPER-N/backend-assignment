// routes/notesRoutes.js — which URL runs which controller
// Router makes a mini-app just for one group of routes.
import { Router } from "express";

// Bring in the five controller functions. ../ means “go up one folder” first.

    import {
        getAllNotes,
        getNoteById,
        createNote,
        updateNote,
        deleteNote,
        countNotes,
    } from "../controllers/notesController.js";

// Create the router.
const router = Router();


// Inside a router, "/" means wherever it's mounted. Here it will become /notes .
    router.get("/", getAllNotes);
    router.get("/count", countNotes);

// "/:id" becomes /notes/:id .
    router.get("/:id", getNoteById);
    router.post("/", createNote);
    router.put("/:id", updateNote);
    router.delete("/:id", deleteNote);

// Share the router so server.js can plug it in.
    export default router;