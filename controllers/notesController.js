 // controllers/notesController.js — the logic for every /notes route
let notes = [
    { id: 1, text: "Buy groceries" },
    { id: 2, text: "Finish assignment" },
];
    let nextId = 3;


export function getAllNotes(req, res) {
    const { search } = req.query;

    if (search) {
        const matches = notes.filter((note) =>
        note.text.toLowerCase().includes(search.toLowerCase())
    );
        return res.json(matches);
    }


    res.json(notes);
}


// GET /notes/:id
// Needs next because it may hand on an error.
export function getNoteById(req, res, next) {
    const note = notes.find((n) => n.id === Number(req.params.id));

    if (!note) {
      //  Instead of res.status(404).json(...) here, we create an error…

        const error = new Error("Note not found");
        error.status = 404;

     //   …and let errorHandler.js send it. Every error now looks the same.
    return next(error);
}

    res.json(note);
}


export function createNote(req, res, next) {
// req.body || {} still protects us when there's no body.
    const { text } = req.body || {};

    if (typeof text !== "string" || text.trim() === "") {
 // Invalid text → a 400 error, sent through next . Success (line 49) is still sent right here.
    const error = new Error("Text is required");
    error.status = 400;
    return next(error);
    }

    const newNote = { id: nextId, text: text.trim() };
    nextId = nextId + 1;
    notes.push(newNote);

    res.status(201).json(newNote);
}


// PUT /notes/:id body: { "text": "..." }

    export function updateNote(req, res, next) {

// Find the note…
    const note = notes.find((n) => n.id === Number(req.params.id));

    if (!note) {

// …404 through next if it's missing.
    const error = new Error("Note not found");
    error.status = 404;
    return next(error);
}


const { text } = req.body || {};

// 400 through next if the text is invalid…
    if (typeof text !== "string" || text.trim() === "") {
        const error = new Error("Text is required");
            error.status = 400;
            return next(error);
}

// …otherwise update it and reply.
    note.text = text.trim();
    res.json(note);
}

// DELETE /notes/:id
export function deleteNote(req, res, next) {
    const id = Number(req.params.id);
// .some : is there a note with this id?
    const exists = notes.some((n) => n.id === id);

if (!exists) {
// No → 404 through next .
    const error = new Error("Note not found");
    error.status = 404;
    return next(error);
}
// Yes → keep every other note, then reply 204.
    notes = notes.filter((n) => n.id !== id);
    res.status(204).send();
}
